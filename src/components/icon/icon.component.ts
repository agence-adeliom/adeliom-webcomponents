import { bound } from '../../internal/bound.js';
import { getIconLibrary, type IconLibrary, unwatchIcon, watchIcon } from './library.js';
import { html } from 'lit';
import { isTemplateResult } from 'lit/directive-helpers.js';
import { property, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './icon.styles.js';
import type { CSSResultGroup, HTMLTemplateResult } from 'lit';

const CACHEABLE_ERROR = Symbol();
const RETRYABLE_ERROR = Symbol();
type SVGResult = HTMLTemplateResult | SVGSVGElement | typeof RETRYABLE_ERROR | typeof CACHEABLE_ERROR;

let parser: DOMParser;
const iconCache = new Map<string, Promise<SVGResult>>();

interface IconSource {
  url?: string;
  fromLibrary: boolean;
}

/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-icon--documentation
 * @status stable
 * @since 1.0
 *
 * @event awc-load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
 * @event awc-error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
 *
 * @csspart svg - The internal SVG element.
 * @csspart use - The <use> element generated when using `spriteSheet: true`
 */
export default class AWCIcon extends AWCElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private initialRender = false;

  private intersectionObserver: IntersectionObserver;

  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  private async resolveIcon(url: string, library?: IconLibrary): Promise<SVGResult> {
    let fileData: Response;

    if (library?.spriteSheet) {
      this.svg = html`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;

      // Using a templateResult requires the SVG to be written to the DOM first before we can grab the SVGElement
      // to be passed to the library's mutator function.
      await this.updateComplete;

      const svg = this.shadowRoot!.querySelector("[part='svg']")!;

      if (typeof library.mutator === 'function') {
        library.mutator(svg as SVGElement);
      }

      return this.svg;
    }

    try {
      fileData = await fetch(url, { mode: 'cors' });
      if (!fileData.ok) return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    } catch {
      return RETRYABLE_ERROR;
    }

    try {
      const div = document.createElement('div');
      div.innerHTML = await fileData.text();

      const svg = div.firstElementChild;
      if (svg?.tagName?.toLowerCase() !== 'svg') return CACHEABLE_ERROR;

      if (!parser) parser = new DOMParser();
      const doc = parser.parseFromString(svg.outerHTML, 'text/html');

      const svgEl = doc.body.querySelector('svg');
      if (!svgEl) return CACHEABLE_ERROR;

      svgEl.part.add('svg');
      return document.adoptNode(svgEl);
    } catch {
      return CACHEABLE_ERROR;
    }
  }

  @state() private svg: SVGElement | HTMLTemplateResult | null = null;

  /** The name of the icon to draw. Available names depend on the icon library being used. */
  @property({ reflect: true }) name?: string;

  /**
   * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
   * can result in XSS attacks.
   */
  @property() src?: string;

  /**
   * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
   * ignored by assistive devices.
   */
  @property() label = '';

  /** The name of a registered custom icon library. */
  @property({ reflect: true }) library = 'default';

  /** How the icon should be loaded. */
  @property({ type: String, reflect: true }) loading: 'eager' | 'lazy' = 'eager';

  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }

  firstUpdated() {
    this.initialRender = true;

    if ('lazy' === this.loading) {
      this.intersectionObserver = new IntersectionObserver(this.loadIcon, { rootMargin: '375px' });
      this.intersectionObserver.observe(this);
    } else {
      this.setIcon();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
    this.intersectionObserver?.disconnect();
  }

  private getIconSource(): IconSource {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return {
        url: library.resolver(this.name),
        fromLibrary: true
      };
    }

    return {
      url: this.src,
      fromLibrary: false
    };
  }

  @watch('label')
  handleLabelChange() {
    const hasLabel = typeof this.label === 'string' && this.label.length > 0;

    if (hasLabel) {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.label);
      this.removeAttribute('aria-hidden');
    } else {
      this.removeAttribute('role');
      this.removeAttribute('aria-label');
      this.setAttribute('aria-hidden', 'true');
    }
  }

  @bound
  async loadIcon(records?: IntersectionObserverEntry[]) {
    if ('lazy' === this.loading && !records) return;

    if (
      records &&
      !records.some(
        (x: IntersectionObserverEntry) =>
          x.isIntersecting && (x.boundingClientRect.height > 0 || x.boundingClientRect.width > 0)
      )
    ) {
      return;
    }

    this.intersectionObserver?.disconnect();

    await this.setIcon();
  }

  @bound
  @watch(['name', 'src', 'library'])
  async setIcon() {
    const { url, fromLibrary } = this.getIconSource();
    const library = fromLibrary ? getIconLibrary(this.library) : undefined;

    if (!url) {
      this.svg = null;
      return;
    }

    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = this.resolveIcon(url, library);
      iconCache.set(url, iconResolver);
    }

    // If we haven't rendered yet, exit early. This avoids unnecessary work due to watching multiple props.
    if (!this.initialRender) {
      return;
    }

    const svg = await iconResolver;

    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }

    if (url !== this.getIconSource().url) {
      // If the url has changed while fetching the icon, ignore this request
      return;
    }

    if (isTemplateResult(svg)) {
      this.svg = svg;
      return;
    }

    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.emit('awc-error');
        break;
      default:
        this.svg = svg.cloneNode(true) as SVGElement;
        library?.mutator?.(this.svg);
        this.emit('awc-load');
    }
  }

  render() {
    return this.svg;
  }
}
