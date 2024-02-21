import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletILayerMixin } from '../../internal/leaflet/ilayer.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import styles from './map-video-overlay.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Element which defines a video overlay.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-raster-layers-video-overlay--documentation
 * @status experimental
 * @since 1.0
 *
 * @event awc-map - type : load - Emitted when the VideoOverlay layer has loaded its video.
 * @event awc-map - type : error - Emitted when the VideoOverlay layer fails to load its video.
 * @event awc-map - type : click	- If interactive, emitted when the user clicks (or taps) the layer.
 * @event awc-map - type : dblclick	- If interactive, emitted when the user double-clicks (or double-taps) the layer.
 * @event awc-map - type : mousedown	- If interactive, emitted when the user pushes the mouse button on the layer.
 * @event awc-map - type : mouseup	- If interactive, emitted when the user releases the mouse button pushed on the layer.
 * @event awc-map - type : mouseover	- If interactive, emitted when the mouse enters the layer.
 * @event awc-map - type : mouseout	- If interactive, emitted when the mouse leaves the layer.
 * @event awc-map - type : contextmenu	- If interactive, emitted when the user right-clicks on the layer, prevents default browser context menu from showing if there are listeners on this event. Also fired on mobile when the user holds a single touch for a second (also called long press).
 */
export default class AWCMapVideoOverlay extends LeafletILayerMixin(AWCLeafletElement) {
  static styles: CSSResultGroup = styles;

  static readonly events = 'load error click dblclick mousedown mouseup mouseover mouseout contextmenu';

  layer: L.VideoOverlay;

  /**
   * The attribute `latLngBounds` represents a rectangular geographical area on a map..
   */
  @property({ type: Array, attribute: 'lat-lng-bounds' }) latLngBounds?: L.LatLngBoundsExpression;

  /**
   * Instantiates an image overlay object given the URL of the image and the geographical bounds it is tied to.
   */
  @property({ type: String }) url?: string;

  /**
   * Text for the alt attribute of the image (useful for accessibility).
   *
   */
  @property({ type: String }) alt = '';

  /**
   * URL to the overlay image to show in place of the overlay that failed to load.
   *
   */
  @property({ type: String, attribute: 'error-overlay-url' }) errorOverlayUrl = '';

  /**
   * The `attribution` attribute sets the attribute. As html code needs to be escaped here, it is preferable to define it as child element.
   */
  @property({ type: String }) attribution = '';

  /**
   * The `opacity` attribute sets the opacity of the tile layer.
   */
  @property({ type: Number }) opacity = 1.0;

  /**
   * The `z-index` attribute sets the explicit zIndex of the tile layer. Not set by default.
   *
   */
  @property({ type: Number, attribute: 'z-index' }) zIndex: number = 1;

  /**
   * If `true`, the image overlay will emit mouse events when clicked or hovered.
   */
  @property({ type: Boolean }) interactive: boolean = false;

  /**
   * If `true`, the image overlay will emit mouse events when clicked or hovered.
   *
   */
  @property({ attribute: 'cross-origin' }) crossOrigin: boolean | 'anonymous' | 'use-credentials' | '' = false;

  /**
   * Whether the video starts playing automatically when loaded. On some browsers autoplay will only work with `muted: true`
   */
  @property({ type: Boolean }) autoplay: boolean = true;

  /**
   * Whether the video will loop back to the beginning when played.
   */
  @property({ type: Boolean }) loop: boolean = true;

  /**
   * Whether the video will save aspect ratio after the projection. Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
   */
  @property({ type: Boolean, attribute: 'keep-aspect-ratio' }) keepAspectRatio: boolean = true;

  /**
   * 	Whether the video starts on mute when loaded.
   */
  @property({ type: Boolean }) muted: boolean = false;

  /**
   * 	Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
   */
  @property({ type: Boolean, attribute: 'plays-inline' }) playsInline: boolean = true;

  containerChanged(): void {
    if (!this.container || !this.url || !this.latLngBounds) return;

    this.layer = L.videoOverlay(this.url, this.latLngBounds, {
      attribution: this.innerHTML + this.attribution,
      opacity: this.opacity,
      zIndex: this.zIndex,
      interactive: this.interactive,
      errorOverlayUrl: this.errorOverlayUrl,
      alt: this.alt,
      className: this.className,
      crossOrigin: this.crossOrigin,
      autoplay: this.autoplay,
      loop: this.loop,
      keepAspectRatio: this.keepAspectRatio,
      muted: this.muted,
      playsInline: this.playsInline
    });

    // forward events
    this.layer.on(AWCMapVideoOverlay.events, this.onLeafletEvent);

    this.layer.addTo(this.container);
  }

  @watch('url', { waitUntilFirstUpdate: true })
  urlChanged(): void {
    if (!this.layer || !this.url) return;
    this.layer.setUrl(this.url);
  }

  @watch('lat-lng-bounds', { waitUntilFirstUpdate: true })
  latLngBoundsChanged(): void {
    if (!this.layer || !this.latLngBounds) return;
    this.layer.setBounds(L.latLngBounds(this.latLngBounds as L.LatLngExpression[]));
  }

  @watch('opacity', { waitUntilFirstUpdate: true })
  opacityChanged() {
    if (this.layer) this.layer.setOpacity(this.opacity);
  }

  @watch('z-index', { waitUntilFirstUpdate: true })
  zIndexChanged() {
    if (this.layer) this.layer.setZIndex(this.zIndex);
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
    if (this.container && this.layer) this.container.removeLayer(this.layer);
  }
}
