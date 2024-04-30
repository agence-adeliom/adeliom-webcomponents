import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant.js';
import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletILayerMixin } from '../../internal/leaflet/ilayer.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';


/* eslint-disable @typescript-eslint/no-namespace*/
declare module 'leaflet' {
  export type GoogleMutantType = 'roadmap' | 'satellite' | 'terrain' | 'hybrid';

  export interface GoogleMutantStyler {
    hue?: string | undefined;
    lightness?: number | undefined;
    saturation?: number | undefined;
    gamma?: number | undefined;
    invert_lightness?: boolean | undefined;
    visibility?: string | undefined;
    color?: string | undefined;
    weight?: number | undefined;
  }

  /**
   * Google's map style.
   *
   * https://developers.google.com/maps/documentation/javascript/style-reference
   */
  export interface GoogleMutantStyle {
    /**
     * https://developers.google.com/maps/documentation/javascript/style-reference#style-features
     */
    featureType?: string | undefined;

    /**
     * https://developers.google.com/maps/documentation/javascript/style-reference#style-elements
     */
    elementType?: string | undefined;

    /**
     * https://developers.google.com/maps/documentation/javascript/style-reference#stylers
     */
    stylers?: GoogleMutantStyler[] | undefined;
  }

  export interface GoogleMutantOptions extends GridLayerOptions {
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    maxNativeZoom?: number | undefined;
    tileSize?: number | Point | undefined;
    subdomains?: string | string[] | undefined;
    errorTileUrl?: string | undefined;

    /**
     * The mutant container will add its own attribution anyways.
     */
    attribution?: string | undefined;

    opacity?: number | undefined;
    continuousWorld?: boolean | undefined;
    noWrap?: boolean | undefined;

    /**
     * Google's map type. 'hybrid' is not really supported.
     */
    type?: GoogleMutantType | undefined;

    /**
     * Google's map styles.
     */
    styles?: GoogleMutantStyle[] | undefined;
  }

  namespace GridLayer {
    export interface GoogleMutant extends GridLayer {
      setElementSize: (e: HTMLElement, size: Point) => void;

      /**
       * Add additional Google Maps layer.
       *
       * https://developers.google.com/maps/documentation/javascript/trafficlayer
       *
       * @param googleLayerName such as BicyclingLayer, TrafficLayer, or TransitLayer.
       * @param options? constructor arguments to pass through to the google layer.
       * @returns Promise for the native Google Maps Layer instance.
       */
      addGoogleLayer: (googleLayerName: string, options?: object) => Promise<object>;

      /**
       * Removes Google Maps layer.
       *
       *  https://developers.google.com/maps/documentation/javascript/trafficlayer
       *
       * @param googleLayerName such as BicyclingLayer, TrafficLayer, or TransitLayer.
       */
      removeGoogleLayer: (googleLayerName: string) => void;
    }
  }

  namespace gridLayer {
    function googleMutant(options?: GoogleMutantOptions): GridLayer.GoogleMutant;
  }
}

/**
 * @summary Element which defines a tile layer for Google. The content of the `awc-map-tilelayer-google` is used as attribution. It inherits attributes and events from `awc-map-tilelayer`;
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-raster-layers-tilelayer-google--documentation
 * @status experimental
 * @since 1.0
 *
 *
 * @event awc-map - type : loading - Emitted when the tile layer loaded all visible tiles.
 * @event awc-map - type : load - Emitted when a tile is requested and starts loading.
 * @event awc-map - type : tileloadstart - Emitted when a tile is requested and starts loading.
 * @event awc-map - type : tileload - Emitted when a tile loads.
 * @event awc-map - type : tileunload - Emitted when a tile is removed (e.g. when you have unloadInvisibleTiles on).
 *
 * @slot - The default slot for attribution.
 */
export default class AWCMapTilelayerGoogle extends LeafletILayerMixin(AWCLeafletElement) {


  static readonly events = 'loading load tileloadstart tileload tileunload';

  layer: L.GridLayer.GoogleMutant;

  /**
   * Google's map type. 'hybrid' is not really supported.
   */
  @property({ type: String }) type: 'roadmap' | 'satellite' | 'terrain' | 'hybrid' = 'roadmap';

  /**
   * Google's map styles.
   */
  @property({ type: Array, attribute: 'map-styles' }) mapStyles?: L.GoogleMutantStyle[] | undefined = undefined;

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
   * The `continuous-world` attribute sets the wether tile coordinates won't be wrapped by world width (-180 to 180 longitude) or clamped to lie within world height (-90 to 90). Use this if you use Leaflet for maps that don't reflect the real world (e.g. game, indoor or photo maps).
   *
   */
  @property({ type: Boolean, attribute: 'continuous-world' }) continuousWorld = false;

  /**
   * The `nowrap` attribute sets wether the tiles just won't load outside the world width (-180 to 180 longitude) instead of repeating.
   */
  @property({ type: Boolean }) noWrap = false;

  /**
   * The `opacity` attribute sets the opacity of the tile layer.
   */
  @property({ type: Number }) opacity = 1.0;

  /**
   * The `z-index` attribute sets the explicit zIndex of the tile layer. Not set by default.
   *
   */
  @property({ type: Number, attribute: 'z-index' }) zIndex: number = 10;

  @watch('type', { waitUntilFirstUpdate: true })
  @watch('styles', { waitUntilFirstUpdate: true })
  containerChanged(): void {
    if (!this.container) return;

    if (this.layer) this.container.removeLayer(this.layer);

    this.layer = L.gridLayer.googleMutant({
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      maxNativeZoom: this.maxNativeZoom,
      tileSize: this.tileSize,
      subdomains: this.subdomains,
      errorTileUrl: this.errorTileUrl,
      zIndex: this.zIndex,
      attribution: this.innerHTML + this.attribution,
      opacity: this.opacity,
      continuousWorld: this.continuousWorld,
      noWrap: this.noWrap,
      type: this.type,
      styles: this.mapStyles
    });

    // forward events
    this.layer.on(AWCMapTilelayerGoogle.events, this.onLeafletEvent);

    this.layer.addTo(this.container);
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
