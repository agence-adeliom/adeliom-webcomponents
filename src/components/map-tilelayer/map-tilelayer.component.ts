import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletILayerMixin } from '../../internal/leaflet/ilayer.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';

/**
 * @summary Element which defines a tile layer. The content of the `awc-map-tilelayer` is used as attribution.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-raster-layers-tilelayer--documentation
 * @status experimental
 * @since 1.0
 *
 * @event awc-map - type : loading - Emitted when the tile layer loaded all visible tiles.
 * @event awc-map - type : load - Emitted when a tile is requested and starts loading.
 * @event awc-map - type : tileloadstart - Emitted when a tile is requested and starts loading.
 * @event awc-map - type : tileload - Emitted when a tile loads.
 * @event awc-map - type : tileunload - Emitted when a tile is removed (e.g. when you have unloadInvisibleTiles on).
 *
 * @slot - The default slot for attribution.
 */
export default class AWCMapTilelayer extends LeafletILayerMixin(AWCLeafletElement) {
  static readonly events = 'loading load tileloadstart tileload tileunload';

  layer: L.TileLayer;

  /**
   * The `url` attribute sets the address template for tilesets.
   *
   * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}.png'
   *
   * {s} means one of the available subdomains (used sequentially to help with
   * browser parallel requests per domain limitation; subdomain values are specified
   * in options; a, b or c by default, can be omitted), {z} — zoom level, {x} and {y}
   * — tile coordinates.
   */
  @property({ type: String }) url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

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
  @property({ type: Number, attribute: 'z-index' }) zIndex: number = 1;

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

  private get cleanedUrl(): string {
    return this.url.replace(/%7B([sxyz])%7D/g, '{$1}');
  }

  containerChanged(): void {
    if (!this.container) return;

    this.layer = L.tileLayer(this.cleanedUrl, {
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
      detectRetina: this.detectRetina
    });

    // forward events
    this.layer.on(AWCMapTilelayer.events, this.onLeafletEvent);

    if (this.container instanceof L.Map) this.container.setMaxZoom(this.maxZoom);

    this.layer.addTo(this.container);
  }

  @watch('url', { waitUntilFirstUpdate: true })
  urlChanged(): void {
    if (!this.layer) return;
    this.layer.setUrl(this.cleanedUrl);
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
