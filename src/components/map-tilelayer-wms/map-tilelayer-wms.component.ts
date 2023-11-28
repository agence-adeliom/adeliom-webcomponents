import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletILayerMixin } from '../../internal/leaflet/ilayer.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import styles from './map-tilelayer-wms.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Element which defines a tile layer for WMS. The content of the `awc-map-tilelayer-wms` is used as attribution. It inherits attributes and events from `awc-map-tilelayer`;
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-raster-layers-tilelayer-wms--docs
 * @status experimental
 * @since 1.0
 *
 *
 * @event loading - Emitted when the tile layer loaded all visible tiles.
 * @event load - Emitted when a tile is requested and starts loading.
 * @event tileloadstart - Emitted when a tile is requested and starts loading.
 * @event tileload - Emitted when a tile loads.
 * @event tileunload - Emitted when a tile is removed (e.g. when you have unloadInvisibleTiles on).
 *
 * @slot - The default slot for attribution.
 */
export default class AWCMapTilelayerWMS extends LeafletILayerMixin(AWCLeafletElement) {
  static styles: CSSResultGroup = styles;

  static readonly events = 'loading load tileloadstart tileload tileunload';

  layer: L.TileLayer.WMS;

  /**
   * The `url` attribute sets the URL of the WMS service and a WMS parameters/options object.
   */
  @property({ type: String }) url = '';

  /**
   * The `min-zoom` attribute sets the minimum zoom number.
   *
   */
  @property({ type: Number, attribute: 'min-zoom' }) minZoom = 0;

  /**
   * The `max-zoom` attribute sets the maximum zoom number.
   *
   */
  @property({ type: Number, attribute: 'max-zoom' }) maxZoom = 18;

  /**
   * The `maxnativezoom` attribute sets the maximum zoom number the tiles source has available. If it is specified, the tiles on all zoom levels higher than maxNativeZoom will be loaded from maxZoom level and auto-scaled.
   *
   */
  @property({ type: Number, attribute: 'max-native-zoom' }) maxNativeZoom: number;

  /**
   * The `tile-size` attribute sets the tile size (width and height in pixels, assuming tiles are square).
   *
   */
  @property({ type: Number, attribute: 'tile-size' }) tileSize = 256;

  /**
   * The `subdomains` attribute sets the subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
   */
  @property({ type: String }) subdomains: string | string[] = 'abc';

  /**
   * The `error-tile-url` attribute sets the URL to the tile image to show in place of the tile that failed to load.
   *
   */
  @property({ type: String, attribute: 'error-tile-url' }) errorTileUrl = '';

  /**
   * The `attribution` attribute sets the attribute. As html code needs to be escaped here, it is preferable to define it as child element.
   */
  @property({ type: String }) attribution = '';

  /**
   * The `tms` attribute sets whether inverses Y axis numbering for tiles should be used (turn this on for TMS services).
   *
   */
  @property({ type: Boolean }) tms = false;

  /**
   * The `continuous-world` attribute sets the wether tile coordinates won't be wrapped by world width (-180 to 180 longitude) or clamped to lie within world height (-90 to 90). Use this if you use Leaflet for maps that don't reflect the real world (e.g. game, indoor or photo maps).
   *
   */
  @property({ type: Boolean, attribute: 'continuous-world' }) continuousWorld = false;

  /**
   * The `nowrap` attribute sets wether the tiles just won't load outside the world width (-180 to 180 longitude) instead of repeating.
   */
  @property({ type: Boolean }) noWrap = false;

  /**
   * The `zoom-offset` attribute sets the zoom number used in tile URLs will be offset with this value.
   *
   */
  @property({ type: Number, attribute: 'zoom-offset' }) zoomOffset = 0;

  /**
   * The `zoom-reverse` attribute sets whether the zoom number used in tile URLs will be reversed (maxZoom - zoom instead of zoom)
   *
   */
  @property({ type: Boolean, attribute: 'zoom-reverse' }) zoomReverse = false;

  /**
   * The `opacity` attribute sets the opacity of the tile layer.
   */
  @property({ type: Number }) opacity = 1.0;

  /**
   * The `z-index` attribute sets the explicit zIndex of the tile layer. Not set by default.
   *
   */
  @property({ type: Number, attribute: 'z-index' }) zIndex: number = 10;

  /**
   * The `detect-retina` attribute sets whether if user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
   *
   */
  @property({ type: Boolean, attribute: 'detect-retina' }) detectRetina = false;

  /**
   * The `reuse-tiles` attribute sets whether all the tiles that are not visible after panning are placed in a reuse queue from which they will be fetched when new tiles become visible (as opposed to dynamically creating new ones). This will in theory keep memory usage low and eliminate the need for reserving new memory whenever a new tile is needed.
   *
   */
  @property({ type: Boolean, attribute: 'reuse-tiles' }) reuseTiles = false;

  /**
   * The `layers` attribute sets the comma-separated list of WMS layers to show (required).
   */
  @property() layers = '';

  /**
   * The `styles` attribute sets the comma-separated list of WMS styles.
   */
  @property() styles = '';

  /**
   * The `format` attribute sets the WMS image format (use 'image/png' for layers with transparency).
   */
  @property() format = 'image/jpeg';

  /**
   * The `transparent` attribute whether the WMS service will return images with transparency.
   */
  @property({ type: Boolean }) transparent = false;

  /**
   * The `version` attribute sets the version of the WMS service to use.
   */
  @property() version = '1.1.1';

  /**
   * The `crs` attribute sets the coordinate Reference System to use for the WMS requests, defaults to map CRS. Don't change this if you're not sure what it means.
   */
  @property({ attribute: false }) crs: L.CRS;

  containerChanged(): void {
    if (!this.container) return;

    this.layer = L.tileLayer.wms(this.url, {
      attribution: this.innerHTML + this.attribution,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      maxNativeZoom: this.maxNativeZoom,
      tileSize: this.tileSize,
      subdomains: this.subdomains,
      errorTileUrl: this.errorTileUrl,
      tms: this.tms,
      noWrap: this.noWrap,
      zoomOffset: this.zoomOffset,
      zoomReverse: this.zoomReverse,
      opacity: this.opacity,
      zIndex: this.zIndex,
      detectRetina: this.detectRetina,
      layers: this.layers,
      styles: this.styles,
      format: this.format,
      transparent: this.transparent,
      version: this.version,
      crs: this.crs
    });

    // forward events
    this.layer.on(AWCMapTilelayerWMS.events, this.onLeafletEvent);

    this.layer.addTo(this.container);
  }

  @watch('url', { waitUntilFirstUpdate: true })
  urlChanged(): void {
    if (this.layer) this.layer.setUrl(this.url);
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
