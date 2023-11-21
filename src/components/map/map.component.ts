import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { bound } from '../../internal/bound.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import AWCMapZoomControl from '../map-zoom-control/map-zoom-control.js';
import styles from './map.styles.js';
import type { CSSResultGroup, TemplateResult } from 'lit';

interface FeatureElement extends AWCLeafletElement {
  feature: L.LayerGroup | L.Polyline | L.Polygon | L.Marker;
  layer: L.LayerGroup | L.Layer;
}

type Feature = FeatureElement['feature'] | FeatureElement['layer'];

interface LayerElement extends AWCLeafletElement {
  isLayer?: () => boolean;
}

const NODE_MODULES_LEAFLET_IMAGE_PATH = 'https://cdn.jsdelivr.net/npm/leaflet/dist/images/';

const DEFAULT_TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const DEFAULT_TILE_LAYER_ATTRIBUTION =
  'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>';

const DEFAULT_TILE_LAYER_MAX_ZOOM = 18;

function isLeafletElement(x: Node): x is AWCLeafletElement {
  return x instanceof HTMLElement && x.tagName.toLowerCase().startsWith('awc-map-');
}

function isFeatureElement(x: Node): x is FeatureElement {
  if (!isLeafletElement(x)) return false;
  const tag = x.tagName.toLowerCase();
  return !!tag.match(/(circle|geojson|layer-group|marker|polygon|polyline)$/);
}

function isZoomControl(x: Node) {
  if (!isLeafletElement(x)) return false;
  const tag = x.tagName.toLowerCase();
  return !!tag.match(/(zoom-control)$/);
}

function isLayer(x: LayerElement): x is FeatureElement {
  return !!x.isLayer?.();
}

function isMarker(x: L.Layer): x is L.Marker {
  return (
    !!x &&
    typeof x === 'object' &&
    // @ts-expect-error: disambiguating type
    typeof x.getLatLng === 'function' &&
    // @ts-expect-error: disambiguating type
    typeof x.getIcon === 'function'
  );
}

/**
 * @summary Element which defines a Leaflet map.
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-map--docs
 * @status experimental
 * @since 1.0
 *
 * @event {LeafletMouseEvent} click - Emitted when the user clicks (or taps) the marker.
 * @event {LeafletMouseEvent} dblclick - Emitted when the user double-clicks (or double-taps) the marker.
 * @event {LeafletMouseEvent} mousedown - Emitted when the user pushes the mouse button on the marker.
 * @event {LeafletMouseEvent} mouseover - Emitted when the mouse enters the marker.
 * @event {LeafletMouseEvent} mouseout - Emitted when the mouse leaves the marker.
 * @event {LeafletMouseEvent} contextmenu - Emitted when the user right-clicks on the marker.
 * @event {LeafletMouseEvent} preclick - Fired before mouse click on the map (sometimes useful when you want something to happen on click before any existing click handlers start running).
 * @event focus - Emitted when the user focuses the map either by tabbing to it or clicking/panning.
 * @event blur - Emitted when the map looses focus.
 * @event load - Emitted when the map is initialized (when its center and zoom are set for the first time).
 * @event unload - Emitted when the map is destroyed with remove method.
 * @event viewreset - Emitted when the map needs to redraw its content (this usually happens on map zoom or load). Very useful for creating custom overlays.
 * @event movestart - Emitted when the view of the map starts changing (e.g. user starts dragging the map).
 * @event move - Fired on any movement of the map view.
 * @event moveend - Emitted when the view of the map ends changed (e.g. user stopped dragging the map).
 * @event dragstart - Emitted when the user starts dragging the marker.
 * @event drag - Fired repeatedly while the user drags the marker.
 * @event autopanstart - Emitted when the map starts autopanning when opening a popup.
 * @event zoomstart - Emitted when the map zoom is about to change (e.g. before zoom animation).
 * @event zoomend - Emitted when the map zoom changes.
 * @event zoomlevelschange - Emitted when the number of zoomlevels on the map is changed due to adding or removing a layer.
 * @event {LeafletDragEndEvent} dragend - Emitted when the user stops dragging the marker.
 * @event {LeafletResizeEvent} resize - Emitted when the map is resized.
 * @event {LeafletLayerEvent} layeradd - Emitted when a new layer is added to the map.
 * @event {LeafletLayerEvent} layerremove - Emitted when some layer is removed from the map.
 * @event {LeafletLayerEvent} baselayerchange - Emitted when the base layer is changed through the layer control.
 * @event {LeafletLayerEvent} overlayadd - Emitted when an overlay is selected through the layer control.
 * @event {LeafletLayerEvent} overlayremove - Emitted when an overlay is deselected through the layer control.
 * @event {LeafletLocationEvent} locationfound - Emitted when geolocation (using the locate method) went successfully.
 * @event {ErrorEvent} locationerror - Emitted when geolocation (using the locate method) failed.
 * @event {LeafletPopupEvent} popupopen - Emitted when a popup bound to the marker is open.
 * @event {LeafletPopupEvent} popupclose - Emitted when a popup bound to the marker is closed.
 *
 * @cssproperty [--link-color=var(--awc-color-primary-600)] --link-color - The color of the links.
 * @cssproperty [--popup-tip-size=1rem] --popup-tip-size - The size of the popup tip.
 * @cssproperty [--popup-text-color=var(--awc-text-paragraph-color)] --popup-text-color - The color of the popup text.
 * @cssproperty [--popup-background-color=var(--awc-panel-background-color)] --popup-background-color - The background color of the popup.
 * @cssproperty [--popup-border-radius=var(--awc-panel-border-radius)] --popup-border-radius - The border radius of the popup.
 * @cssproperty [--popup-padding=var(--awc-spacing-large) var(--awc-spacing-large) var(--awc-spacing-medium)] --popup-padding - The padding of the popup.
 * @cssproperty [--popup-box-shadow=var(--awc-shadow-medium)] --popup-box-shadow - The box shadow of the popup.
 *
 * @cssproperty [--controls-background-color=var(--awc-panel-background-color)] --controls-background-color - The background color of the controls.
 * @cssproperty [--controls-border-color=var(--awc-panel-border-color)] --controls-border-color - The border color of the controls.
 * @cssproperty [--controls-border-width=var(--awc-panel-border-width)] --controls-border-width - The border width of the controls.
 * @cssproperty [--controls-border-radius=var(--awc-panel-border-radius)] --controls-border-radius - The border radius of the controls.
 * @cssproperty [--controls-text-color=var(--awc-color-neutral-900)] --controls-text-color - The text color of the controls.
 * @cssproperty [--controls-box-shadow=var(--awc-shadow-medium)] --controls-box-shadow - The box shadow of the controls.
 *
 * @cssproperty [--controls-location-active-color=var(--awc-color-secondary-600)] --controls-location-active-color - The active color of the location control.
 * @cssproperty [--controls-location-following-color=var(--awc-color-primary-600)] --controls-location-following-color - The following color of the location control.
 *
 * @cssproperty [--attribution-background-color=var(--awc-panel-background-color)] --attribution-background-color - The background color of the attribution.
 * @cssproperty [--attribution-text-color=var(--awc-color-neutral-900)] --attribution-text-color - The text color of the attribution.
 * @cssproperty [--attribution-opacity=0.8] --attribution-opacity - The opacity of the attribution.
 *
 * @cssproperty [--cluster-opacity=0.8] --cluster-opacity - The opacity of the cluster.
 * @cssproperty [--cluster-ring-opacity=0.6] --cluster-ring-opacity - The opacity of the cluster ring.
 * @cssproperty [--cluster-small-color=var(--awc-color-neutral-0)] --cluster-small-color - The color of the small cluster.
 * @cssproperty [--cluster-small-background-color=var(--awc-color-primary-600)] --cluster-small-background-color - The background color of the small cluster.
 * @cssproperty [--cluster-medium-color=var(--awc-color-neutral-0)] --cluster-medium-color - The color of the medium cluster.
 * @cssproperty [--cluster-medium-background-color=var(--awc-color-primary-600)] --cluster-medium-background-color - The background color of the medium cluster.
 * @cssproperty [--cluster-large-color=var(--awc-color-neutral-0)] --cluster-large-color - The color of the large cluster.
 * @cssproperty [--cluster-large-background-color=var(--awc-color-primary-600)] --cluster-large-background-color - The background color of the large cluster.
 *
 * @cssproperty [--legend-contents-background=rgba(0, 0, 0, 0.25)] --legend-contents-background - The background color of the legend contents.
 *
 */
export default class AWCMap extends AWCLeafletElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  static readonly events = [
    'click',
    'dblclick',
    'mousedown',
    'mouseup',
    'mouseover',
    'mouseout',
    'mousemove',
    'contextmenu',
    'focus',
    'blur',
    'preclick',
    'load',
    'unload',
    'viewreset',
    'movestart',
    'move',
    'moveend',
    'dragstart',
    'drag',
    'dragend',
    'zoomstart',
    'zoomend',
    'zoomlevelschange',
    'resize',
    'autopanstart',
    'layeradd',
    'layerremove',
    'baselayerchange',
    'overlayadd',
    'overlayremove',
    'locationfound',
    'locationerror',
    'popupopen',
    'popupclose'
  ].join(' ');

  /**
   * reference to the leaflet map
   */
  @property({ attribute: false }) map: L.Map;

  /**
   * The `latitude` attribute sets the map center.
   */
  @property({ type: Number, reflect: true }) latitude = 51;

  /**
   * The `longitude` attribute sets the map center.
   */
  @property({ type: Number, reflect: true }) longitude = 0;

  /**
   * Whether the map should display a fullscreen control
   */
  @property({ type: Boolean, reflect: true, attribute: 'fullscreen-control' }) fullscreenControl = false;

  /**
   * The `zoom` attribute sets the map zoom.
   */
  @property({ type: Number, reflect: true }) zoom = -1;

  /**
   * The `min-zoom` attribute sets the minimum zoom level of the map. Overrides any minZoom set on map layers.
   */
  @property({ type: Number, attribute: 'min-zoom' }) minZoom = 0;

  /**
   * The `maxZoom` attribute sets the maximum zoom level of the map. This overrides any maxZoom set on map layers.
   */
  @property({ type: Number, attribute: 'max-zoom' }) maxZoom = DEFAULT_TILE_LAYER_MAX_ZOOM;

  /**
   * The `no-dragging` attribute disables whether the map is draggable with mouse/touch or not.
   */
  @property({ type: Boolean, attribute: 'no-dragging' }) noDragging = false;

  /**
   * The `no-touch-zoom` attribute disables whether the map can be zoomed by touch-dragging with two fingers.
   */
  @property({ type: Boolean, attribute: 'no-touch-zoom' }) noTouchZoom = false;

  /**
   * The `no-scroll-wheel-zoom` attribute disables whether the map can be zoomed by using the mouse wheel. If passed 'center', it will zoom to the center of the view regardless of where the mouse was.
   */
  @property({ type: Boolean, attribute: 'no-scroll-wheel-zoom' }) noScrollWheelZoom = false;

  /**
   * The `no-double-click-zoom` attribute disables the whether the map can be zoomed in by double clicking on it and zoomed out by double clicking while holding shift. If passed 'center', double-click zoom will zoom to the center of the view regardless of where the mouse was.
   */
  @property({ type: Boolean, attribute: 'no-double-click-zoom' }) noDoubleClickZoom = false;

  /**
   * The `no-box-zoom` attribute disable the whether the map can be zoomed to a rectangular area specified by dragging the mouse while pressing shift.
   */
  @property({ type: Boolean, attribute: 'no-box-zoom' }) noBoxZoom = false;

  /**
   * The `no-tap` attribute disables mobile hacks for supporting instant taps (fixing 200ms click delay on iOS/Android) and touch holds (fired as contextmenu events).
   */
  @property({ type: Boolean, attribute: 'no-tap' }) noTap = false;

  /**
   * The `tap-tolerance` attribute sets the max number of pixels a user can shift his finger during touch for it to be considered a valid tap.
   */
  @property({ type: Number, attribute: 'tap-tolerance' }) tapTolerance = 15;

  /**
   * The `no-track-resize` attribute disables whether the map automatically handles browser window resize to update itself.
   */
  @property({ type: Boolean, attribute: 'no-track-resize' }) noTrackResize = false;

  /**
   * The `world-copy-jump` attribute sets whether the map tracks when you pan to another "copy" of the world and seamlessly jumps to the original one so that all overlays like markers and vector layers are still visible.
   */
  @property({ type: Boolean, attribute: 'world-copy-jump' }) worldCopyJump = false;

  /**
   * The `no-close-popup-on-click` attribute disables whether popups are closed when user clicks the map.
   */
  @property({ type: Boolean, attribute: 'no-close-popup-on-click' }) noClosePopupOnClick = false;

  /**
   * The `no-bounce-at-zoom-limits` attribute disables whether the map to zoom beyond min/max zoom and then bounce back when pinch-zooming.
   */
  @property({ type: Boolean, attribute: 'no-bounce-at-zoom-limits' }) noBounceAtZoomLimits = false;

  /**
   * The `no-keyboard` attribute disables whether the map is focusable and allows users to navigate the map with keyboard arrows and +/- keys.
   */
  @property({ type: Boolean, attribute: 'no-keyboard' }) noKeyboard = false;

  /**
   * The `no-inertia` attribute disables panning of the map will have an inertia effect where the map builds momentum while dragging and continues moving in the same direction for some time. Feels especially nice on touch devices.
   */
  @property({ type: Boolean, attribute: 'no-inertia' }) noInertia = false;

  /**
   * The `inertia-deceleration` attribute sets the rate with which the inertial movement slows down, in pixels/second2.
   */
  @property({ type: Number, attribute: 'inertia-deceleration' }) inertiaDeceleration = 3000;

  /**
   * The `inertia-max-speed` attribute sets the max speed of the inertial movement, in pixels/second.
   */
  @property({ type: Number, attribute: 'inertia-max-speed' }) inertiaMaxSpeed = 1500;

  /**
   * The `no-zoom-control` attribute disables the zoom control is added to the map by default.
   */
  @property({ type: Boolean, attribute: 'no-zoom-control' }) noZoomControl = false;

  /**
   * The `no-attribution-control` attribute disable the attribution control is added to the map by default.
   */
  @property({ type: Boolean, attribute: 'no-attribution-control' }) noAttributionControl = false;

  /**
   * The `zoom-animation-threshold` attribute sets the maximum number of zoom level differences that still use animation
   */
  @property({ type: Number, attribute: 'zoom-animation-threshold' }) zoomAnimationThreshold = 4;

  /**
   * `L.Icon.Default.imagePath` url. When unset, the element will attempt to guess using `import.meta.url`.
   */
  @property({ reflect: true, attribute: 'image-path' })
  get imagePath(): string {
    return (
      // Let user override the assets path per-element
      this.__imagePath ||
      // Let user override the assets path globally
      L.Icon.Default.imagePath ||
      // fallback to default assets path,
      // assumes that `leaflet-element` is a sibling of `leaflet`, i.e. in `/node_modules`.
      NODE_MODULES_LEAFLET_IMAGE_PATH
    );
  }

  set imagePath(path: string) {
    this.__imagePath = path;
  }

  private __imagePath: string;

  /**
   * If set, the map is zoomed such that all elements in it are visible
   */
  @property({ type: Boolean, attribute: 'fit-to-markers' }) fitToMarkers = false;

  @state() private mapReady = false;

  @query('#map') private mapContainer: HTMLDivElement;

  private features?: { feature: L.LayerGroup | L.Polyline | L.Marker }[];

  /** @private */
  readonly children: HTMLCollectionOf<AWCLeafletElement & Partial<FeatureElement> & { isLayer?: () => boolean }>;

  /**
   * External CSS stylesheet
   */
  @property({ type: String }) stylesheet?: string = undefined;

  get latLng(): L.LatLng {
    return L.latLng(this.latitude, this.longitude);
  }

  private get elements(): AWCLeafletElement[] {
    return [...this.children]
      .flatMap(child => (child instanceof HTMLSlotElement ? child.assignedElements() : [child]))
      .filter(isLeafletElement);
  }

  private _ignoreViewChange: boolean;

  private mutationObserver: MutationObserver;
  private intersectionObserver: IntersectionObserver;
  private resizeObserver: ResizeObserver;

  connectedCallback() {
    super.connectedCallback();

    L.Icon.Default.imagePath = this.imagePath;

    this.updateComplete.then(() => {
      this.intersectionObserver = new IntersectionObserver(this.onIntersection, { rootMargin: '50%' });
      this.mutationObserver = new MutationObserver(this.onMutation);
      this.resizeObserver = new ResizeObserver(this.onResize);

      this.startObserver();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopObserver();
  }

  private startObserver() {
    try {
      this.mutationObserver.observe(this, { childList: true });
      this.resizeObserver.observe(this);
      this.intersectionObserver.observe(this);
    } catch {
      /* empty */
    }
  }

  private stopObserver() {
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
    this.intersectionObserver.disconnect();
  }

  render(): TemplateResult {
    const customStyles = this.querySelector('style')?.innerHTML;
    return html`
      ${this.stylesheet ? html`<link rel="stylesheet" href="${this.stylesheet}" />` : null}
      ${customStyles
        ? html`<style>
            ${customStyles}
          </style>`
        : null}
      <div id="map"></div>
      <slot id="markers"></slot>
    `;
  }

  initMap(): void {
    if (this.map) this.map.remove();

    const map = L.map(this.mapContainer, {
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      dragging: !this.noDragging,
      touchZoom: !this.noTouchZoom,
      scrollWheelZoom: !this.noScrollWheelZoom,
      doubleClickZoom: !this.noDoubleClickZoom,
      boxZoom: !this.noBoxZoom,
      tap: !this.noTap,
      tapTolerance: this.tapTolerance,
      trackResize: !this.noTrackResize,
      worldCopyJump: this.worldCopyJump,
      closePopupOnClick: !this.noClosePopupOnClick,
      bounceAtZoomLimits: !this.noBounceAtZoomLimits,
      keyboard: !this.noKeyboard,
      inertia: !this.noInertia,
      inertiaDeceleration: this.inertiaDeceleration,
      inertiaMaxSpeed: this.inertiaMaxSpeed,
      zoomControl: false,
      attributionControl: !this.noAttributionControl,
      zoomAnimationThreshold: this.zoomAnimationThreshold
    });

    this.map = map;

    if (!this.noZoomControl && !this.elements.filter(isZoomControl).length) {
      L.control
        .zoom({
          position: 'topright',
          zoomInText: AWCMapZoomControl._zoomInText,
          zoomInTitle: this.localize.term('zoomIn'),
          zoomOutText: AWCMapZoomControl._zoomOutText,
          zoomOutTitle: this.localize.term('zoomOut')
        })
        .addTo(map);
    }

    // forward all leaflet events to DOM
    map.on(AWCMap.events, this.onLeafletEvent);

    map.whenReady(this.onLoad);
    map.on('moveend', this.onMoveend);
    map.on('zoomend', this.onZoomend);

    // set map view after registering events so viewreset and load events can be caught
    map.setView([this.latitude, this.longitude], this.zoom);

    // add a default layer if there are no layers defined
    if (!Array.from(this.children).some(isLayer)) this.initDefaultLayer();

    for (const child of this.elements) child.container = this.map;

    if (this.fitToMarkers) this.fitBoundsToMarkers();
    else if (this.zoom === -1) map.fitWorld();
  }

  /**
   * Returns a GeoJSON including all the features of the map
   */
  public toGeoJSON(): { type: 'FeatureCollection'; features: unknown } {
    const features = this.features?.map?.(f => f.feature.toGeoJSON()) ?? [];

    const type = 'FeatureCollection';

    return { type, features };
  }

  public async fitBoundsToMarkers(): Promise<void> {
    const featureElements = this.elements.filter(isFeatureElement);

    if (!featureElements.length) return;

    // Get the Leaflet feature from each feature-element child
    const features = (await Promise.all(featureElements.map(this.getFeatureFromElement))).filter(Boolean);

    // short-circuit if there are no relevant features
    if (features.length < 1) return;

    if (features.length === 1 && features.every(isMarker)) this.panToMarker(features[0]);
    else this.map.fitBounds(L.featureGroup(features).getBounds());
  }

  panToMarker(marker: L.Marker): void {
    this.map.setZoom(this.map.getMaxZoom());
    this.map.panTo(marker.getLatLng());
  }

  /**
   * Get the element's feature or layer,
   * first ensuring that the element is defined and registered on the map.
   */
  @bound
  private async getFeatureFromElement(element: FeatureElement): Promise<Feature> {
    await customElements.whenDefined(element.tagName.toLowerCase());
    if (!element.feature) element.container = this.map;
    await element.updateComplete;
    return element.feature ?? element.layer;
  }

  private invalidateSize(): void {
    if (!this.map) return;
    this.map.invalidateSize();
  }

  @watch('fit-to-markers', { waitUntilFirstUpdate: true })
  fitToMarkersChanged() {
    if (!this.mapReady && this.fitToMarkers) return;
    this.fitBoundsToMarkers();
    this.invalidateSize();
  }

  @watch('latitude', { waitUntilFirstUpdate: true })
  @watch('longitude', { waitUntilFirstUpdate: true })
  @watch('zoom', { waitUntilFirstUpdate: true })
  viewChanged() {
    if (!this.mapReady || this._ignoreViewChange) return;
    setTimeout(() => {
      this.map.setView(this.latLng, this.zoom);
    }, 1);
  }

  private initDefaultLayer(): void {
    const attribution = DEFAULT_TILE_LAYER_ATTRIBUTION;

    const maxZoom = DEFAULT_TILE_LAYER_MAX_ZOOM;

    L.tileLayer(DEFAULT_TILE_LAYER_URL, { attribution, maxZoom }).addTo(this.map);
  }

  @bound
  private onLoad(): void {
    // fire an event for when this.map is defined and ready.
    // (needed for components that talk to this.map directly)
    this.mapReady = true;
    this.emit('awc-map-ready');
  }

  @bound
  private async onMoveend() {
    this._ignoreViewChange = true;
    this.longitude = this.map.getCenter().lng;
    this.latitude = this.map.getCenter().lat;
    await this.updateComplete;
    this._ignoreViewChange = false;
  }

  @bound
  private onZoomend() {
    this.zoom = this.map.getZoom();
  }

  @bound
  private async onIntersection(records: IntersectionObserverEntry[]) {
    if (this.mapReady) return;
    if (
      records.some(
        (x: IntersectionObserverEntry) =>
          x.isIntersecting && (x.boundingClientRect.height > 0 || x.boundingClientRect.width > 0)
      )
    ) {
      await this.updateComplete;
      this.initMap();
      this.intersectionObserver.disconnect();
    }
  }

  @bound
  private onResize(): void {
    this.invalidateSize();
    if (this.fitToMarkers && this.mapReady) this.fitBoundsToMarkers();
  }

  @bound
  private onMutation(records: MutationRecord[]): void {
    if (!this.map) return;
    records.forEach(({ addedNodes, removedNodes }) => {
      [...removedNodes].filter(isLayer).forEach(l => this.map.removeLayer(l.feature));
      [...(addedNodes as NodeListOf<LayerElement>)].forEach(x => {
        x.container = this.map;
      });
    });
  }
}
