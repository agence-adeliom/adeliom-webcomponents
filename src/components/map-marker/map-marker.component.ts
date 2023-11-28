import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletPopupContentMixin } from '../../internal/leaflet/popup-content.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import AWCMapDivicon from '../map-divicon/map-divicon.js';
import AWCMapIcon from '../map-icon/map-icon.js';
import styles from './map-marker.styles.js';
import type { CSSResultGroup } from 'lit';

function isRealNumber(x: unknown): x is number {
  return typeof x === 'number' && !Number.isNaN(x);
}

/**
 * @summary Element which defines a [marker](http://leafletjs.com/reference.html#marker). The content is used as popup window, unless it is empty.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-ui-layers-marker--docs
 * @status experimental
 * @since 1.0
 *
 * @slot - The default slot for popup content.
 *
 * @event move	-	Fired when the marker is moved via setLatLng or by dragging. Old and new coordinates are included in event arguments as oldLatLng, latlng.
 * @event dragstart	-	Fired when the user starts dragging the marker.
 * @event movestart	-	Fired when the marker starts moving (because of dragging).
 * @event drag	-	Fired repeatedly while the user drags the marker.
 * @event dragend	-	Fired when the user stops dragging the marker.
 * @event moveend	-	Fired when the marker stops moving (because of dragging).
 * @event click	-	Fired when the user clicks (or taps) the layer.
 * @event dblclick	-	Fired when the user double-clicks (or double-taps) the layer.
 * @event mousedown	-	Fired when the user pushes the mouse button on the layer.
 * @event mouseup	-	Fired when the user releases the mouse button pushed on the layer.
 * @event mouseover	-	Fired when the mouse enters the layer.
 * @event mouseout	-	Fired when the mouse leaves the layer.
 * @event contextmenu	-	Fired when the user right-clicks on the layer, prevents default browser context menu from showing if there are listeners on this event. Also fired on mobile when the user holds a single touch for a second (also called long press).
 * @event popupopen	-	Fired when a popup bound to this layer is opened
 * @event popupclose	-	Fired when a popup bound to this layer is closed
 * @event add	-	Fired after the layer is added to a map
 * @event remove	-	Fired after the layer is removed from a map
 */
export default class AWCMapMarker extends LeafletPopupContentMixin(AWCLeafletElement) {
  static styles: CSSResultGroup = styles;

  static readonly events = [
    'click',
    'dblclick',
    'mousedown',
    'mouseover',
    'mouseout',
    'contextmenu',
    'dragstart',
    'drag',
    'dragend',
    'move',
    'add',
    'remove',
    'popupopen',
    'popupclose'
  ].join(' ');

  static isLeafletMarker(node: Node): node is AWCMapMarker {
    return node instanceof AWCMapMarker;
  }

  feature: L.Marker;

  /**
   * The `latitude` attribute sets the positions of the marker.
   */
  @property({ type: Number, reflect: true }) latitude: number;

  /**
   * The `longitude` attribute sets the positions of the marker.
   */
  @property({ type: Number, reflect: true }) longitude: number;

  /**
   * The `icon` attribute sets the Icon class to use for rendering the marker.
   * This attribute may be refer to an id-attribute of an leaflet-icon-element,
   * contain json syntax or it be assigned an instance of L.icon.
   * See Icon documentation for details on how to customize the marker icon. Set to new L.Icon.Default() by default.
   */
  @property({ type: String }) icon: string | L.Icon;

  /**
   * The `draggable` attribute sets the whether the marker is draggable with mouse/touch or not.
   */
  @property({ type: Boolean }) draggable = false;

  /**
   * The `no-keyboard` attribute disables whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
   */
  @property({ type: Boolean }) keyboard = false;

  /**
   * The `title` attribute sets the text for the browser tooltip that appear on marker hover (no tooltip by default).
   */
  @property() title = '';

  /**
   * The `alt` attribute sets the text for the alt attribute of the icon image (useful for accessibility).
   */
  @property() alt = '';

  /**
   * The `z-index-offset` attribute sets the zIndexOffset. By default, marker images zIndex is set automatically based on its latitude
   */
  @property({ type: Number, attribute: 'z-index-offset' }) zIndexOffset = 0;

  /**
   * The `opacity` attribute sets the opacity of the marker.
   */
  @property({ type: Number }) opacity = 1.0;

  /**
   * The `rise-on-hover` attribute sets the whether the marker will get on top of others when you hover the mouse over it.
   */
  @property({ type: Boolean, attribute: 'rise-on-hover' }) riseOnHover = false;

  /**
   * The `rise-offset` attribute sets the z-index offset used for the riseOnHover feature.
   */
  @property({ type: Number, attribute: 'rise-offset' }) riseOffset = 250;

  get latLng(): L.LatLng {
    return this.feature?.getLatLng?.() ?? null;
  }

  containerChanged(): void {
    if (!this.container) return;

    this.feature = L.marker([this.latitude, this.longitude], {
      draggable: this.draggable,
      keyboard: this.keyboard,
      title: this.title,
      alt: this.alt,
      zIndexOffset: this.zIndexOffset,
      opacity: this.opacity,
      riseOnHover: this.riseOnHover,
      riseOffset: this.riseOffset
    });

    this.iconChanged();

    // forward events
    this.feature.on(AWCMapMarker.events, this.onLeafletEvent);
    this.feature.on('move', this.onMove);

    this.updatePopupContent();

    this.feature.addTo(this.container);
  }

  @watch('draggable', { waitUntilFirstUpdate: true })
  draggableChanged(): void {
    if (!this.feature) return;
    this.feature.off(AWCMapMarker.events);
    if (this.container instanceof L.Map) this.feature.removeFrom(this.container);
    this.containerChanged();
  }

  @watch('icon', { waitUntilFirstUpdate: true })
  iconChanged(): void {
    let icon: L.Icon | L.DivIcon;

    if (typeof this.icon === 'string') icon = this.walkDOMForIcon(this.icon);
    else if (this.icon?.options) ({ icon } = this);
    else if (this.icon) icon = L.icon(this.icon as unknown as L.IconOptions);
    else icon = new L.Icon.Default();

    if (this.feature) this.feature.setIcon(icon);
  }

  private walkDOMForIcon(icon: string): L.Icon | L.DivIcon {
    let iconElement = (
      this.shadowRoot?.getElementById(icon) ||
      // edge case: <awc-map> is wrapped by another element, and slots in this marker
      this.mapElement
        ? (this.mapElement?.getRootNode() as ShadowRoot).getElementById(icon)
        : null
    ) as AWCMapIcon | AWCMapDivicon;

    let root = this.getRootNode();

    // permitting a complex loop body here because it's better than building up a collection
    while (!iconElement) {
      if (root instanceof ShadowRoot) {
        iconElement = root.getElementById(icon) as AWCMapIcon | AWCMapDivicon;
        root = root.host.getRootNode();
      } else if (root instanceof Document) {
        iconElement = root.getElementById(icon) as AWCMapIcon | AWCMapDivicon;
        break;
      }
    }

    if (iconElement instanceof AWCMapIcon || iconElement instanceof AWCMapDivicon) return iconElement.getIcon();
    else {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return L.icon(JSON.parse(icon));
      } catch (e) {
        return new L.Icon.Default();
      }
    }
  }

  onMove(event: L.LeafletEvent): void {
    const marker: L.Marker = event.target as L.Marker;
    const position = marker.getLatLng();
    this.latitude = position.lat;
    this.longitude = position.lng;
  }

  @watch('latitude', { waitUntilFirstUpdate: true })
  @watch('longitude', { waitUntilFirstUpdate: true })
  positionChanged(): void {
    if (!isRealNumber(this.latitude) || !isRealNumber(this.longitude)) return;
    const position = L.latLng(this.latitude, this.longitude);
    if (this.feature && !this.latLng?.equals?.(position)) this.feature.setLatLng(position);
  }

  @watch('z-index-offset', { waitUntilFirstUpdate: true })
  zIndexOffsetChanged(): void {
    if (this.feature) this.feature.setZIndexOffset(this.zIndexOffset);
  }

  @watch('opacity', { waitUntilFirstUpdate: true })
  opacityChanged(): void {
    if (this.feature) this.feature.setOpacity(this.opacity);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.container && this.feature) this.container.removeLayer(this.feature);
  }
}
