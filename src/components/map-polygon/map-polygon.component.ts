import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletPopupContentMixin } from '../../internal/leaflet/popup-content.js';
import { property } from 'lit/decorators.js';
import AWCMapPoint from '../map-point/map-point.component.js';
import styles from './map-polygon.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Element for putting a polygon on the map
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-vector-layers-polygon--docs
 * @status experimental
 * @since 1.0
 *
 *
 * @slot - The default slot.
 */
export default class AWCMapPolygon extends LeafletPopupContentMixin(AWCLeafletElement) {
  static styles: CSSResultGroup = styles;

  static readonly events = 'click dblclick mousedown mouseover mouseout contextmenu add remove popupopen popupclose';

  /**
   * A Leaflet [Polygon](http://leafletjs.com/reference.html#polygon) object
   */
  @property({ attribute: false }) feature: L.Polygon;

  /**
   * The attribute `stroke` sets whether to draw stroke along the path. Set it to false to disable borders on polygons or circles.
   */
  @property({ type: Boolean }) stroke = true;

  /**
   * The attribute `color` sets the stroke color.
   */
  @property({ type: String }) color = '#03f';

  /**
   * The attribute `weight` sets the stroke width in pixels.
   */
  @property({ type: Number }) weight?: number | string = 5;

  /**
   * The attribute `opacity` sets the stroke opacity.
   */
  @property({ type: Number }) opacity?: number | string = 0.5;

  /**
   * The attribute `fill` sets the whether to fill the path with color. Set it to false to disable filling on polygons or circles.
   */
  @property({ type: Boolean }) fill = false;

  /**
   * The attribute `fill-color` sets the fill color.
   */
  @property({ type: String, attribute: 'fill-color' }) fillColor?: string = undefined;

  /**
   * The attribute `fill-opacity` sets the fill opacity.
   */
  @property({ type: Number, attribute: 'fill-opacity' }) fillOpacity?: number | string = 0.2;

  /**
   * The attribute `dash-array` sets a string that defines the stroke dash pattern. Doesn't work on canvas-powered layers (e.g. Android 2).
   */
  @property({ type: String, attribute: 'dash-array' }) dashArray?: string = undefined;

  /**
   * The attribute `line-cap` defines the shape to be used at the end of the stroke.
   */
  @property({ type: String, attribute: 'line-cap' }) lineCap = undefined;

  /**
   * The attribute `line-join` sets the string that defines shape to be used at the corners of the stroke.
   */
  @property({ type: String, attribute: 'line-join' }) lineJoin = undefined;

  /**
   * The attribute `pointer-events` sets the pointer-events attribute on the path if SVG backend is used.
   */
  @property({ type: String, attribute: 'pointer-events' }) pointerEvents = undefined;

  /**
   * The attribute `clickable` sets whether the vector will emit mouse events or will act as a part of the underlying map.
   */
  @property({ type: Boolean }) clickable = false;

  /**
   * The attribute `class-name` sets the custom class name set on an element.
   */
  @property({ type: String, attribute: 'class-name' }) className = '';

  getPathOptions(): L.PathOptions {
    return {
      stroke: this.stroke,
      color: this.color,
      weight: this.weight as number,
      opacity: this.opacity as number,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity as number,
      dashArray: this.dashArray,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      className: this.className
    };
  }

  containerChanged(): void {
    const opt = this.getPathOptions();

    this.feature = L.polygon([], opt);
    this.feature.addTo(this.container);

    const latLngs = [...this.children].filter(AWCMapPoint.isLeafletPoint).map(x => x.latLng);
    this.feature.setLatLngs(latLngs);

    this.updatePopupContent();

    // forward events
    this.feature.on(AWCMapPolygon.events, this.onLeafletEvent);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.container && this.feature) this.container.removeLayer(this.feature);
  }
}
