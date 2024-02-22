import { spread } from './spread.js';
import { useArgs } from '@storybook/preview-api';
import type { TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import type { Declaration } from './cem-schema.js';
import { getAttributesAndProperties, getCssParts, getCssProperties, getSlots } from './cem-utilities.js';

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

/**
 * Gets the template used to render the component in Storybook
 * @param component component object from the Custom Elements Manifest
 * @param args args object from Storybook story
 * @param slot content to be rendered between the component's opening and closing tags
 * @returns
 */
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
  const operators = { ...attrOperators, ...propOperators };
  const slotsTemplate = getSlotsTemplate(component!, args);
  const cssPropertiesTemplate = getCssPropTemplate(component!, args);
  const styleTemplate = getStyleTemplate(component!, args);
  syncControls(component!);

  return html`${styleTemplate}
<${unsafeStatic(component!.tagName!)} ${styleTemplate ? unsafeStatic(`class="${args.className}"`) : null}
  ${spread(operators)}
  ${cssPropertiesTemplate}
  >
    ${slotsTemplate}${slot || ''}
</${unsafeStatic(component!.tagName!)}>
`;
}

/**
 * Gets the template used to render the component's styles in Storybook
 * @param component component object from the Custom Elements Manifest
 * @param args args object from Storybook story
 * @returns styles in a tagged template literal
 */
export function getStyleTemplate(component?: Declaration, args?: any) {
  const cssPartsTemplate = getCssPartsTemplate(component!, args);

  return `${cssPartsTemplate?._$litStatic$}`?.replaceAll(/\s+/g, '') != ''
    ? html`<style>
        ${cssPartsTemplate}
      </style> `
    : null;
}

/**
 * Gets a formatted object with the component's attributes and properties formatted to be used as operators in the template
 * @param component component object from the Custom Elements Manifest
 * @param args args object from Storybook story
 * @returns object of properties and attributes with their values
 */
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
    if (attrValue && attrValue != attr.defaultValue) {
      attrOperators[prop] = attrValue === 'false' ? false : attrValue;
    }
  });

  Object.keys(args)
    .filter(key => attributes[key]?.table?.category === 'properties')
    .forEach(key => {
      if (key.startsWith('on')) {
        return;
      }

      const propValue = args![key];
      if (propValue) {
        propOperators[`.${key}`] = propValue;
      }
    });

  return { attrOperators, propOperators };
}

/**
 * Gets the template used to render the component's styles in Storybook
 * @param component component object from the Custom Elements Manifest
 * @param args args object from Storybook story
 * @returns string of css properties with arg values
 */
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

/**
 * Gets the template used to render the component's CSS Shadow Parts in Storybook
 * @param component component object from the Custom Elements Manifest
 * @param args args object from Storybook story
 * @returns formatted string with CSS shadow parts and their styles
 */
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
        return cssPartValue && cssPartValue?.replaceAll(/\s+/g, '').trim() !== ''
          ? `${component?.tagName}${args?.className ? `.${args?.className}` : ''}::part(${cssPartName}) {
            ${cssPartValue || ''}
          }`
          : null;
      })
      .filter(value => value !== null)
      .join('\n')}`
  );
}

/**
 * Gets the template used to render the component's slots in Storybook
 * @param component component object from the Custom Elements Manifest
 * @param args args object from Storybook story
 * @returns formatted string with slots and their values
 */
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
            : (slotValue || '').includes(`slot="${slotName}"`)
              ? slotValue
              : `<span slot="${slotName}">${slotValue || ''}</span>`
          : null;
      })
      .filter(value => value !== null)
      .join('\n')}`
  );
}

/**
 * Watches for changes to the component's attributes and properties and updates Storybook controls
 * @param component component object from the Custom Elements Manifest
 */
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

/**
 * Sets up the MutationObserver to sync the component's attributes and properties with Storybook controls
 * @param component component object from the Custom Elements Manifest
 */
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
