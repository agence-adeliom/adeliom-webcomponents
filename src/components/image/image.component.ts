import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { transformProps } from './image.utils';
import AWCElement from '../../internal/awc-element.js';
import styles from './image.styles.js';
import type { AWCImageProps, BaseImageProps, CoreImageAttributes, Layout } from './image.utils';
import type { CSSResultGroup } from 'lit';
import type { ImageCdn, UrlTransformer } from 'unpic';
import type { StyleInfo } from 'lit/directives/style-map.js';

/**
 * @summary A image component for responsive, high-performance images using image CDNs
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-image--docs
 * @status experimental
 * @since 1.0
 *
 * @event awc-load - Emitted when the image is loaded successfully.
 * @event awc-error - Emitted if an error occurs while loading.
 * @event awc-abort - Emitted occurs when a download is aborted, not when an error occurs.
 *
 */
export default class AWCImage
  extends AWCElement
  implements BaseImageProps<Partial<HTMLImageElement>, CSSStyleDeclaration>
{
  static styles: CSSResultGroup = styles;

  /** The image URL */
  @property({ type: String }) src = '';

  /** Defines an alternative text description of the image. */
  @property({ type: String }) alt = '';

  /** The intrinsic height of the image in pixels. Must be an integer without a unit. */
  @property({ type: Number }) height?: number;

  /** The intrinsic width of the image in pixels. Must be an integer without a unit. */
  @property({ type: Number }) width?: number;

  /** By default, images cover the container. If `objectFit` is set, the property is used to specify how an images should be resized to fit its container. */
  @property({ type: String }) objectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' | 'inherit' | 'initial' =
    'cover';

  /** The resizing behaviour of the image. */
  @property({ type: String }) layout: Layout = 'constrained';

  /** By default, images are loaded lazily. If `priority` is set to `true`, the image will be loaded eagerly, and will be given high priority by the browser. This is useful for images that are above the fold, particularly large ones such as hero images. */
  @property({ type: Boolean }) priority = false;

  /**
   * Either an image URL, CSS gradient or CSS colour value. If set to `auto`, a low-resolution version of the image will be rendered as a background image, with a blurred placeholder effect. This is still loaded from the remote server, so if you can instead provide an inline base64-encoded version of the image or background colour, you should do that instead. Look at [`@unpic/placeholder`](/placeholder/) for a library that can generate these placeholders.
   *
   * Bear in mind that this is not removed after the image loads, so it will be visible if the image has transparency.
   */
  @property({ type: String }) background?: string;

  /** Instead of specifying both `width` and `height`, you can specify can `aspectRatio`. */
  @property({ type: Number }) aspectRatio?: number;

  /** By default, the CDN is auto-detected from the `src` URL. If you want to override this, you can specify a CDN object. See the [unpic](https://github.com/ascorbic/unpic) for supported values. */
  @property({ type: String }) cdn?: ImageCdn;

  /** By default, the image breakpoints used in the `srcset` are generated based on the layout and image size. You can override this by specifying an array of breakpoints. The breakpoints are specified as an array of numbers, representing the width of the image in pixels. */
  @property({ type: Array }) breakpoints?: number[];

  /** Indicates if the fetching of the image must be done using a CORS request. see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#crossorigin) */
  @property({ type: String }) crossOrigin?: 'anonymous' | 'use-credentials';

  /** Provides a hint of the relative priority to use when fetching the image. see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#fetchpriority) */
  @property({ type: String }) fetchPriority?: 'high' | 'low';

  /** Indicates how the browser should load the image. see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading) */
  @property({ type: String }) loading?: 'eager' | 'lazy';

  /** Provides an image decoding hint to the browser. see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#decoding) */
  @property({ type: String }) decoding?: 'sync' | 'async' | 'auto';

  /** A string indicating which referrer to use when fetching the resource. see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#referrerpolicy) */
  @property({ type: String }) referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';

  /** One or more strings separated by commas, indicating a set of source sizes. see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes) */
  @property({ type: String }) sizes?: string;

  /** This Boolean attribute indicates that the image is part of a [server-side map](https://en.wikipedia.org/wiki/Image_map#Server-side). If so, the coordinates where the user clicked on the image are sent to the server. */
  @property({ type: Boolean }) isMap?: boolean;

  /** The partial URL (starting with #) of an image map associated with the element. */
  @property({ type: String }) useMap?: string;

  /** Customized URL Transformer */
  @property({ type: Function }) transformer?: UrlTransformer;

  private handleLoad(event: Event) {
    this.emit('awc-load', event);
  }

  private handleError(event: Event) {
    this.emit('awc-error', event);
  }

  private handleAbort(event: Event) {
    this.emit('awc-abort', event);
  }

  override render() {
    const inputProps = {
      src: this.src,
      width: this.width,
      height: this.height,
      alt: this.alt,
      loading: this.loading,
      decoding: this.decoding,
      aspectRatio: this.aspectRatio,
      objectFit: this.objectFit,
      role: this.role,
      sizes: this.sizes,
      fetchpriority: this.fetchPriority,
      layout: this.layout,
      transformer: this.transformer
    } as AWCImageProps<CoreImageAttributes<StyleInfo>>;

    const transformedProps = transformProps<CoreImageAttributes<StyleInfo>, StyleInfo>(inputProps);

    return html`
      <style>
        ${this.layout === 'filled' ? `:host { width: 100%; height: 100%; }` : ''}
        ${this.layout === 'inset'
          ? `:host { position: absolute !important; inset: 0; width: 100%; height: 100%; }`
          : ''}
      </style>
      <img
        src="${transformedProps.src}"
        alt="${transformedProps.alt}"
        width="${transformedProps.width}"
        height="${transformedProps.height}"
        style="${styleMap(transformedProps.style ?? {})}"
        srcset="${transformedProps.srcset}"
        role="${ifDefined(transformedProps.role)}"
        sizes="${transformedProps.sizes}"
        loading="${transformedProps.loading}"
        fetchpriority="${ifDefined(transformedProps.fetchpriority)}"
        decoding="${ifDefined(transformedProps.decoding)}"
        crossorigin="${ifDefined(this.crossOrigin)}"
        ismap="${ifDefined(this.isMap)}"
        referrerpolicy="${ifDefined(this.referrerPolicy)}"
        usemap="${ifDefined(this.useMap)}"
        @error=${this.handleError}
        @load=${this.handleLoad}
        @abort=${this.handleAbort}
      />
    `;
  }
}
