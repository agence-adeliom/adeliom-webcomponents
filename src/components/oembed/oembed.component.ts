import { extract } from '@extractus/oembed-extractor';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { transformProps } from './oembed.utils';
import AWCElement from '../../internal/awc-element.js';
import AWCIcon from '../icon/icon.js';
import AWCImage from '../image/image.js';
import styles from './oembed.styles.js';
import type { AWCOEmbedProps, BaseOEmbedProps, CoreOEmbedAttributes } from './oembed.utils';
import type { CSSResultGroup } from 'lit';
import type { OembedData, PhotoTypeData, RichTypeData, VideoTypeData } from '@extractus/oembed-extractor';
import type { StyleInfo } from 'lit/development/directives/style-map';

/**
 * @summary An embedded representation of a URL on third party sites
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-oembed--documentation
 * @status experimental
 * @since 1.0
 *
 * @dependency awc-image
 * @dependency awc-icon
 *
 * @event awc-load - Emitted when the image loads successfully.
 * @event awc-error - Emitted when the image fails to load.
 *
 * @slot base - The base component slot.
 * @slot embed - Slot for the embed content.
 * @slot thumbnail - Optional thumbnail to use instead of the default. Works best with `<awc-image>`.
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<awc-icon>`.
 *
 * @csspart base - The component's base wrapper.
 * @csspart thumbnail - The container who containe the thumbnail image.
 * @csspart control-box - The container that surrounds the play icon and provides their background.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play icon.
 */
export default class AWCOembed
  extends AWCElement
  implements BaseOEmbedProps<Partial<HTMLElement>, CSSStyleDeclaration>
{
  static styles: CSSResultGroup = styles;
  static dependencies = {
    'awc-icon': AWCIcon,
    'awc-image': AWCImage
  };
  /** The URL */
  @property({ type: String }) src: string;

  /** The intrinsic width of the embed in pixels. Must be an integer without a unit. */
  @property({ type: Number }) width?: number;

  /** The intrinsic height of the embed in pixels. Must be an integer without a unit. */
  @property({ type: Number }) height?: number;

  /** Instead of specifying both `width` and `height`, you can specify can `aspectRatio`. */
  @property({ type: Number }) aspectRatio?: number;

  /** The resizing behaviour of the embed. */
  @property({ type: String }) layout: 'fixed' | 'constrained' | 'fullWidth' = 'constrained';

  /** Set the frameborder attribute, only used in iframe embeds. */
  @property({ type: String }) frameBorder = '0';

  /** Allow fullscreen mode */
  @property({ type: Boolean }) allowFullscreen = true;

  /** For YouTube only. Enable privacy mode. */
  @property({ type: Boolean }) privacyEnhancedMode = true;

  /** Indicates how the browser should load the iframe. see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#loading) */
  @property({ type: String }) loading?: 'eager' | 'lazy';

  /** Override the default thumbnail */
  @property({ type: String }) thumbnail?: string;

  /** Plays the embed. When this attribute is remove, the embed will reset. */
  @property({ type: Boolean, reflect: true }) play: boolean;

  @state()
  private isLoading = true;

  @state()
  private data?: OembedData | null;

  connectedCallback() {
    super.connectedCallback();
    extract(this.src)
      .then((data: OembedData) => {
        this.handleLoad(data);
      })
      .catch(() => {
        this.handleError();
      });
  }

  private handleLoad(data: OembedData) {
    this.emit('awc-load');
    this.isLoading = false;
    this.data = data;
  }

  private handleError() {
    this.emit('awc-error');
    this.isLoading = false;
    this.data = null;
  }

  private handleClick() {
    this.play = !this.play;
  }

  render() {
    if (this.isLoading) {
      return html``;
    }

    const inputProps = {
      src: this.src,
      width: this.width,
      height: this.height,
      aspectRatio: this.aspectRatio,
      layout: this.layout
    } as AWCOEmbedProps<CoreOEmbedAttributes<StyleInfo>>;

    const transformedProps = transformProps<CoreOEmbedAttributes<StyleInfo>, StyleInfo>(inputProps);

    let innerContent = null;
    if (this.data?.type === 'video') {
      const data = this.data as VideoTypeData;
      const tmp = document.createElement('div');
      tmp.innerHTML = data.html;
      const iframe = tmp.querySelector('iframe');
      if (iframe) {
        const url = new URL(iframe.src);
        const params = new URLSearchParams(url.search);
        if (this.data.provider_name === 'YouTube') {
          if (this.privacyEnhancedMode) {
            url.host = url.host.replace('youtube.com', 'youtube-nocookie.com');
          }
          params.set('autoplay', this.play ? '1' : '0');
          params.set('auto_play', this.play ? '1' : '0');
          params.set('fs', this.allowFullscreen ? '1' : '0');
          params.set('modestbranding', '1');
          params.set('rel', '0');
          params.set('showinfo', '0');
        }

        url.search = params.toString();
        iframe.src = url.toString();
        iframe.loading = this.loading ?? 'lazy';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = this.frameBorder;
        iframe.allowFullscreen = this.allowFullscreen;
      }
      const content = this.play ? unsafeStatic(tmp.innerHTML) : null;
      const thumbnail = this.thumbnail ?? data?.thumbnail_url?.replace('hqdefault.jpg', 'maxresdefault.jpg');
      innerContent = html`
        <slot name="embed">${content}</slot>
        <div
          part="thumbnail"
          class="oembed__thumbnail"
          aria-hidden=${this.play ? 'true' : 'false'}
          @click=${this.handleClick}
        >
          <slot name="thumbnail">
            <awc-image
              src="${thumbnail}"
              aspectRatio="${this.aspectRatio}"
              width="${this.width}"
              height="${this.height}"
            ></awc-image>
          </slot>
          <div part="control-box" class="oembed__control-box">
            <slot name="play-icon"><awc-icon name="play-fill" library="system"></awc-icon></slot>
          </div>
        </div>
      `;
    }

    if (this.data?.type === 'rich') {
      const data = this.data as RichTypeData;
      const tmp = document.createElement('div');
      tmp.innerHTML = data.html;
      const iframe = tmp.querySelector('iframe');
      if (iframe) {
        const url = new URL(iframe.src);
        const params = new URLSearchParams(url.search);
        if (this.data.provider_name === 'YouTube') {
          if (this.privacyEnhancedMode) {
            url.host = url.host.replace('youtube.com', 'youtube-nocookie.com');
          }
          params.set('autoplay', this.play ? '1' : '0');
          params.set('auto_play', this.play ? '1' : '0');
        }

        url.search = params.toString();
        iframe.src = url.toString();
        iframe.loading = this.loading ?? 'lazy';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = this.frameBorder;
        iframe.allowFullscreen = this.allowFullscreen;
      }
      const content = unsafeStatic(tmp.innerHTML);
      innerContent = html`<slot name="embed">${content}</slot>`;
    }

    if (this.data?.type === 'photo') {
      const data = this.data as PhotoTypeData;
      innerContent = html`<slot name="embed"
        ><awc-image
          src="${data.url}"
          aspectRatio="${this.aspectRatio}"
          layout="${this.layout}"
          width="${this.width}"
          height="${this.height}"
        ></awc-image
      ></slot>`;
    }

    return html`
      <div
        part="base"
        class="oembed"
        width="${transformedProps.width}"
        height="${transformedProps.height}"
        style="${styleMap(transformedProps.style ?? {})}"
      >
        ${innerContent}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'awc-oembed': AWCOembed;
  }
}
