import { spread, spreadProps } from '@open-wc/lit-helpers';
import { useArgs } from '@storybook/client-api';
import { TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { Declaration } from './cem-schema';
import { getAttributesAndProperties, getCssParts, getCssProperties, getSlots } from './cem-utilities.js';
import { argsHash } from '@storybook/blocks';

let argObserver: MutationObserver | undefined;
let lastTagName: string | undefined;

function generateClassName(length: number = 5) {
  var arr = new Uint8Array((length + 1 || 40) / 2);
  window.crypto.getRandomValues(arr);
  return (
    'cl-' +
    Array.from(arr, dec => {
      return dec.toString(16).padStart(2, '0');
    }).join('')
  );
}

export function getTemplate(component?: Declaration, args?: any, slot?: TemplateResult): TemplateResult {
  if (!args) {
    return html`<${unsafeStatic(component!.tagName!)}></${unsafeStatic(component!.tagName!)}>`;
  }

  // reset argObserver if the component changes
  if (component?.tagName !== lastTagName) {
    argObserver = undefined;
    lastTagName = component?.tagName;
  }

  args.className = generateClassName();

  const { attrOperators, propOperators } = getTemplateOperators(component!, args);
  const slotsTemplate = getSlotsTemplate(component!, args);
  const cssPropertiesTemplate = getCssPropTemplate(component!, args);
  const styleTemplate = getStyleTemplate(component!, args);
  syncControls(component!);

  return html`${styleTemplate}
<${unsafeStatic(component!.tagName!)} ${styleTemplate ? unsafeStatic(`class="${args.className}"`) : null}
  ${spread(attrOperators)}
  ${spreadProps(propOperators)}
  ${cssPropertiesTemplate}
  >
    ${slotsTemplate}${slot || ''}
</${unsafeStatic(component!.tagName!)}>
`;
}

export function getStyleTemplate(component?: Declaration, args?: any) {
  const cssPartsTemplate = getCssPartsTemplate(component!, args);
  return `${cssPartsTemplate?._$litStatic$}`?.replaceAll(/\s+/g, '') != ''
    ? html`<style>
        ${cssPartsTemplate}
      </style> `
    : null;
}

function getTemplateOperators(component: Declaration, args: any) {
  const attributes = getAttributesAndProperties(component);
  const attrOperators: any = {};
  const propOperators: any = {};

  Object.keys(attributes).forEach(key => {
    const attr = attributes[key];
    if (attr?.table?.category !== 'attributes') {
      return;
    }

    const attrName = attr.name;
    const attrValue = args![key] as unknown;
    const prop: string = (attr.control as any).type === 'boolean' ? `?${attrName}` : attrName;
    attrOperators[prop] = attrValue === 'false' ? false : attrValue;
  });

  Object.keys(args)
    .filter(key => attributes[key]?.table?.category === 'properties')
    .forEach(key => {
      if (key.startsWith('on')) {
        return;
      }

      const propValue = args![key];
      propOperators[`.${key}`] = propValue;
    });

  return { attrOperators, propOperators };
}

function getCssPropTemplate(component: Declaration, args: any) {
  if (!component?.cssProperties?.length) {
    if (args.style) {
      return unsafeStatic(`style="${args.style}"`);
    }
    return;
  }

  const cssProperties = getCssProperties(component);
  const cssPropertiesTemplate = Object.keys(cssProperties)
    .map(key => {
      const cssName = cssProperties[key].name;
      const cssValue = args![key];
      return cssValue ? `${cssName}: ${cssValue || ''}` : null;
    })
    .filter(value => value !== null)
    .join(';');

  return cssPropertiesTemplate || args.style
    ? unsafeStatic(`style="${cssPropertiesTemplate}${args.style ?? ''}"`)
    : null;
}

function getCssPartsTemplate(component: Declaration, args: any) {
  if (!component?.cssParts?.length) {
    return;
  }

  const cssParts = getCssParts(component);

  return unsafeStatic(
    `${Object.keys(cssParts)
      .filter(key => key.endsWith('-part'))
      .map(key => {
        const cssPartName = cssParts[key].name;
        const cssPartValue = args![key];
        return cssPartValue?.replaceAll(/\s+/g, '') !== ''
          ? `${component?.tagName}${args?.className ? `.${args?.className}` : ''}::part(${cssPartName}) {
    ${cssPartValue || ''}
  }`
          : null;
      })
      .filter(value => value !== null)
      .join('\n')}`
  );
}

function getSlotsTemplate(component: Declaration, args: any) {
  if (!component?.slots?.length) {
    return;
  }

  const slots = getSlots(component);

  return unsafeStatic(
    `${Object.keys(slots)
      .filter(key => key.endsWith('-slot'))
      .map(key => {
        const slotName = slots[key].name;
        const slotValue = args![key];
        return slotValue
          ? slotName === 'default'
            ? `${slotValue || ''}`
            : `<span slot="${slotName}">${slotValue || ''}</span>`
          : null;
      })
      .filter(value => value !== null)
      .join('\n')}`
  );
}

function syncControls(component: Declaration) {
  setArgObserver(component);

  // wait for story to render before trying to attach the observer
  setTimeout(() => {
    const selectedComponent = document.querySelector(component.tagName!)!;
    argObserver?.observe(selectedComponent, {
      attributes: true
    });
  });
}

function setArgObserver(component: Declaration) {
  let isUpdating = false;
  const updateArgs = useArgs()[1];
  const attributes = getAttributesAndProperties(component);

  if (argObserver) {
    return;
  }

  argObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if ((mutation.type as string) !== 'attributes' || (mutation.attributeName === 'class' && isUpdating)) {
        return;
      }

      isUpdating = true;
      const attribute = attributes[`${mutation.attributeName}`];
      if (attribute?.control === 'boolean' || (attribute?.control as any)?.type === 'boolean') {
        updateArgs({
          [`${mutation.attributeName}`]: (mutation.target as HTMLElement)?.hasAttribute(mutation.attributeName || '')
        });
      } else {
        updateArgs({
          [`${mutation.attributeName}`]: (mutation.target as HTMLElement).getAttribute(mutation.attributeName || '')
        });
      }

      isUpdating = false;
    });
  });
}
