/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query, queryAssignedNodes } from 'lit/decorators.js';
import styles from './map-fullscreen-control.styles.js';
import type { CSSResultGroup } from 'lit';

declare global {
  interface Element {
    /* eslint-disable max-len */
    mozRequestFullScreen?: (
      ...params: Parameters<HTMLElement['requestFullscreen']>
    ) => ReturnType<HTMLElement['requestFullscreen']>;
    webkitRequestFullscreen?: (
      ...params: Parameters<HTMLElement['requestFullscreen']>
    ) => ReturnType<HTMLElement['requestFullscreen']>;
    msRequestFullscreen?: (
      ...params: Parameters<HTMLElement['requestFullscreen']>
    ) => ReturnType<HTMLElement['requestFullscreen']>;
    /* eslint-enable max-len */
  }

  interface DocumentOrShadowRoot {
    mozFullScreenElement?: DocumentOrShadowRoot['fullscreenElement'];
    webkitFullscreenElement?: DocumentOrShadowRoot['fullscreenElement'];
    msFullscreenElement?: DocumentOrShadowRoot['fullscreenElement'];
  }

  interface Document {
    mozCancelFullScreen?: Document['exitFullscreen'];
    webkitCancelFullScreen?: Document['exitFullscreen'];
    msExitFullscreen?: Document['exitFullscreen'];
  }
}

/* eslint-disable @typescript-eslint/no-namespace*/
declare module 'leaflet' {
  export interface FullscreenOptions extends ControlOptions {
    pseudoFullscreen: boolean;
    fullscreenIcon: string | Element;
    exitIcon: string | Element;
    title: {
      false: string;
      true: string;
    };
  }

  namespace control {
    function fullscreen(options: FullscreenOptions): Control.Fullscreen;
  }

  namespace Control {
    class Fullscreen extends Control {
      constructor(options?: FullscreenOptions);

      link: HTMLAnchorElement;

      options: FullscreenOptions;

      public updateIcons(iconsChanged?: boolean): void;

      protected _map: Map;

      protected _click(e: Event): void;

      protected _toggleTitle(): void;
    }
  }

  export interface Map {
    isFullscreen: () => boolean;
    toggleFullscreen: (options: FullscreenOptions, control: Control.Fullscreen) => Promise<void>;
    getContainerRoot: () => DocumentOrShadowRoot;
    _setFullscreen: (state: boolean) => void;
    _disablePseudoFullscreen: (container: HTMLElement) => void;
    _enablePseudoFullscreen: (container: HTMLElement) => void;
    _isPseudoFullscreen: boolean;
  }
}

function getFullscreenElement(root: DocumentOrShadowRoot): Element | undefined | null {
  return (
    root.fullscreenElement || root.mozFullScreenElement || root.webkitFullscreenElement || root.msFullscreenElement
  );
}

function canRequestFullscreen(element: HTMLElement): boolean {
  return !!(
    element.requestFullscreen ||
    element.mozRequestFullScreen ||
    element.webkitRequestFullscreen ||
    element.msRequestFullscreen
  );
}

function requestFullscreen(element: HTMLElement) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
}
function canExitFullscreen(root: Document): boolean {
  return !!(root.exitFullscreen || root.mozCancelFullScreen || root.webkitCancelFullScreen || root.msExitFullscreen);
}

function exitFullscreen(root: Document) {
  if (root.exitFullscreen) {
    root.exitFullscreen();
  } else if (root.msExitFullscreen) {
    root.msExitFullscreen();
  } else if (root.webkitCancelFullScreen) {
    root.webkitCancelFullScreen();
  } else if (root.mozCancelFullScreen) {
    root.mozCancelFullScreen();
  }
}
/**
 * @summary Fullscreen control.
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-map-controls-fullscreen--docs
 * @status experimental
 * @since 1.0
 *
 * @slot fullscreen-icon - Enter fullscreen icon.
 * @slot exit-icon - Exit fullscreen icon.
 */
export default class AWCMapFullscreenControl extends AWCLeafletElement {
  static styles: CSSResultGroup = styles;

  // @ts-expect-error: ambient property. see https://github.com/microsoft/TypeScript/issues/40220
  container: L.Map;

  control: L.Control.Fullscreen;

  private readonly localize = new LocalizeController(this);

  /**
   * The position of the control (one of the map corners).
   * Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
   */
  @property({ type: String }) position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'topleft';

  @property({ type: Boolean, attribute: 'pseudo-fullscreen' }) pseudoFullscreen = false;

  @property({ type: String, attribute: 'true-text' }) trueText = 'Exit Fullscreen';

  @property({ type: String, attribute: 'false-text' }) falseText = 'View Fullscreen';

  @queryAssignedNodes({ slot: 'exit-icon' }) private exitIcons: NodeListOf<SVGSVGElement>;

  @queryAssignedNodes({ slot: 'fullscreen-icon' }) private fullscreenIcons: NodeListOf<SVGSVGElement>;

  @query('[name="fullscreen-icon"] awc-icon') private defaultFullscreenIcon: SVGSVGElement;

  @query('[name="exit-icon"] awc-icon') private defaultExitIcon: SVGSVGElement;

  get isFullscreen(): boolean {
    return this.container?.isFullscreen() ?? false;
  }

  async toggleFullscreen(): Promise<void> {
    return await this.container.toggleFullscreen(this.control.options, this.control);
  }

  containerChanged(): void {
    if (!this.container) return;
    const {
      position,
      pseudoFullscreen,
      trueText,
      falseText,
      fullscreenIcons: [fullscreenIcon = this.defaultFullscreenIcon],
      exitIcons: [exitIcon = this.defaultExitIcon]
    } = this;

    const title = { true: trueText, false: falseText };
    this.control = L.control.fullscreen({ position, title, pseudoFullscreen, fullscreenIcon, exitIcon });
    this.control.addTo(this.container);
  }

  disconnectedCallback(): void {
    if (this.container && this.control) this.container.removeControl(this.control);
  }

  render() {
    return html`
      <slot name="fullscreen-icon" @slotchange="${() => this.control.updateIcons(true)}">
        <awc-icon name="fullscreen" label="${this.localize.term('enterFullscreen')}"></awc-icon>
      </slot>
      <slot name="exit-icon" @slotchange="${() => this.control.updateIcons(true)}">
        <awc-icon name="fullscreen-exit" label="${this.localize.term('exitFullscreen')}"></awc-icon>
      </slot>
    `;
  }
}

L.Control.Fullscreen = L.Control.extend({
  options: {
    position: 'topleft',
    exitIcon: '',
    fullscreenIcon: '',
    pseudoFullscreen: false,
    title: {
      false: 'View Fullscreen',
      true: 'Exit Fullscreen'
    }
  } as L.FullscreenOptions,

  onAdd(this: L.Control.Fullscreen, map: L.Map) {
    const container = L.DomUtil.create('div', 'leaflet-control-fullscreen leaflet-bar leaflet-control');

    this.link = L.DomUtil.create('a', 'leaflet-control-fullscreen-button leaflet-bar-part', container);

    this.link.href = '#';
    this.link.innerHTML = /* html */ `
      <span class="fullscreen-icon" hidden></span>
      <span class="exit-icon" hidden></span>
    `;

    this._map = map;
    this._map.on('fullscreenchange', this._toggleTitle, this);
    this._toggleTitle();

    this.updateIcons(true);

    L.DomEvent.on(this.link, 'click', this._click, this);

    return container;
  },

  _click(e: Event) {
    L.DomEvent.stopPropagation(e);
    L.DomEvent.preventDefault(e);
    this._map.toggleFullscreen(this.options, this);
  },

  _toggleTitle() {
    this.link.title = this.options.title[`${this._map.isFullscreen()}`];
  },

  updateIcons(iconsChanged: boolean): void {
    const exitContainer = this.link.querySelector('.exit-icon');
    const fullscreenContainer = this.link.querySelector('.fullscreen-icon');

    if (iconsChanged) {
      const { exitIcon, fullscreenIcon } = this.options;
      exitContainer.children[0]?.remove();
      fullscreenContainer.children[0]?.remove();

      if (typeof exitIcon === 'string') exitContainer.appendChild(new Text(exitIcon));
      else if (exitIcon instanceof Element) exitContainer.appendChild(exitIcon.cloneNode(true));

      if (typeof fullscreenIcon === 'string') fullscreenContainer.appendChild(new Text(fullscreenIcon));
      else if (fullscreenIcon instanceof Element) fullscreenContainer.appendChild(fullscreenIcon.cloneNode(true));
    }

    const isFullscreen = this._map.isFullscreen();

    exitContainer.hidden = !isFullscreen;
    fullscreenContainer.hidden = isFullscreen;
  }
} as unknown as L.Control.Fullscreen);

L.Map.include({
  isFullscreen(this: L.Map): boolean {
    return this._isPseudoFullscreen || this.getContainer() === getFullscreenElement(this.getContainerRoot());
  },

  getContainerRoot(this: L.Map) {
    const root = this.getContainer()?.getRootNode?.();
    if (root instanceof Document || root instanceof ShadowRoot) return root;
    else return document;
  },

  toggleFullscreen(this: L.Map, options: L.FullscreenOptions, control: L.Control.Fullscreen) {
    const container = this.getContainer();
    if (this.isFullscreen()) {
      if (options?.pseudoFullscreen) this._disablePseudoFullscreen(container);
      else if (canExitFullscreen(document)) exitFullscreen(document);
      else this._disablePseudoFullscreen(container);
    } else {
      if (options?.pseudoFullscreen) this._enablePseudoFullscreen(container);
      else if (canRequestFullscreen(container)) requestFullscreen(container);
      else this._enablePseudoFullscreen(container);
    }

    setTimeout(() => {
      control.updateIcons();
    }, 100);
  },

  _enablePseudoFullscreen(this: L.Map, container: HTMLElement) {
    L.DomUtil.addClass(container, 'leaflet-pseudo-fullscreen');
    this._isPseudoFullscreen = true;
    this._setFullscreen(true);
    this.fire('fullscreenchange');
  },

  _disablePseudoFullscreen(this: L.Map, container: HTMLElement) {
    L.DomUtil.removeClass(container, 'leaflet-pseudo-fullscreen');
    this._isPseudoFullscreen = false;
    this._setFullscreen(false);
    this.fire('fullscreenchange');
  },

  _setFullscreen(this: L.Map, fullscreen: boolean) {
    const container = this.getContainer();
    if (fullscreen) L.DomUtil.addClass(container, 'leaflet-fullscreen-on');
    else L.DomUtil.removeClass(container, 'leaflet-fullscreen-on');

    this.invalidateSize();
  },

  _onFullscreenChange(this: L.Map) {
    this._setFullscreen(!this.isFullscreen());
    this.fire('fullscreenchange');
  }
});

L.Map.mergeOptions({
  fullscreenControl: false
});

/* eslint-disable @typescript-eslint/no-invalid-this */
L.Map.addInitHook(function () {
  if (this.options.fullscreenControl) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.fullscreenControl = new L.Control.Fullscreen(this.options.fullscreenControl);
    this.addControl(this.fullscreenControl);
  }

  let fullscreenchange: string = 'fullscreenchange';

  if ('onmozfullscreenchange' in document) {
    fullscreenchange = 'mozfullscreenchange';
  } else if ('onwebkitfullscreenchange' in document) {
    fullscreenchange = 'webkitfullscreenchange';
  } else if ('onmsfullscreenchange' in document) {
    fullscreenchange = 'MSFullscreenChange';
  }

  if (fullscreenchange) {
    const onFullscreenChange = this._onFullscreenChange.bind(this);

    this.whenReady(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      L.DomEvent.on(document as unknown as HTMLElement, fullscreenchange, onFullscreenChange);
    });

    this.on('unload', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      L.DomEvent.off(document as unknown as HTMLElement, fullscreenchange, onFullscreenChange);
    });
  }
});
/* eslint-enable @typescript-eslint/no-invalid-this */

L.control.fullscreen = function (options) {
  return new L.Control.Fullscreen(options);
};
