import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletILayerMixin } from '../../internal/leaflet/ilayer.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import styles from './map-image-overlay.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Element which defines a image overlay.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-raster-layers-image-overlay--documentation
 * @status experimental
 * @since 1.0
 *
 * @event load - Emitted when the ImageOverlay layer has loaded its image.
 * @event error - Emitted when the ImageOverlay layer fails to load its image.
 * @event click	- If interactive, emitted when the user clicks (or taps) the layer.
 * @event dblclick	- If interactive, emitted when the user double-clicks (or double-taps) the layer.
 * @event mousedown	- If interactive, emitted when the user pushes the mouse button on the layer.
 * @event mouseup	- If interactive, emitted when the user releases the mouse button pushed on the layer.
 * @event mouseover	- If interactive, emitted when the mouse enters the layer.
 * @event mouseout	- If interactive, emitted when the mouse leaves the layer.
 * @event contextmenu	- If interactive, emitted when the user right-clicks on the layer, prevents default browser context menu from showing if there are listeners on this event. Also fired on mobile when the user holds a single touch for a second (also called long press).
 */
export default class AWCMapImageOverlay extends LeafletILayerMixin(AWCLeafletElement) {
  static styles: CSSResultGroup = styles;

  static readonly events = 'load error click dblclick mousedown mouseup mouseover mouseout contextmenu';

  layer: L.ImageOverlay;

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
   *
   */
  @property({ type: Boolean }) interactive: boolean = false;

  /**
   * If `true`, the image overlay will emit mouse events when clicked or hovered.
   *
   */
  @property({ attribute: 'cross-origin' }) crossOrigin: boolean | 'anonymous' | 'use-credentials' | '' = false;

  containerChanged(): void {
    if (!this.container || !this.url || !this.latLngBounds) return;

    this.layer = L.imageOverlay(this.url, this.latLngBounds, {
      attribution: this.innerHTML + this.attribution,
      opacity: this.opacity,
      zIndex: this.zIndex,
      interactive: this.interactive,
      errorOverlayUrl: this.errorOverlayUrl,
      alt: this.alt,
      className: this.className,
      crossOrigin: this.crossOrigin
    });

    // forward events
    this.layer.on(AWCMapImageOverlay.events, this.onLeafletEvent);

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
    this.layer.setBounds(L.latLngBounds(this.latLngBounds));
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
