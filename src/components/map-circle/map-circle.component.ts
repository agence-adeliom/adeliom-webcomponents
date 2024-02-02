import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletPopupContentMixin } from '../../internal/leaflet/popup-content.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import styles from './map-circle.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Element for putting a circle on the map
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-circle--documentation
 * @status experimental
 * @since 1.0
 *
 * @slot - The default slot for popup content.
 */
export default class AWCMapCircle extends LeafletPopupContentMixin(AWCLeafletElement) {
  static styles: CSSResultGroup = styles;

  static isLeafletCircle(node: Node): node is AWCMapCircle {
    return node instanceof AWCMapCircle;
  }

  static readonly events = 'click dblclick mousedown mouseover mouseout contextmenu add remove popupopen popupclose';

  /**
   * A Leaflet circle object
   */
  feature: L.Circle;

  /**
   * The circle's longitude coordinate
   */
  @property({ type: Number }) longitude?: number | string;

  /**
   * The circle's latitude coordinate
   */
  @property({ type: Number }) latitude?: number | string;

  /**
   * The circle's radius is metres
   */
  @property({ type: Number }) radius?: number | string = 100;

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
    if (!(this.latitude && this.longitude && this.container)) return;

    this.feature = L.circle([this.latitude as number, this.longitude as number], this.radius as number, this.getPathOptions());
    this.feature.on(AWCMapCircle.events, this.onLeafletEvent);
    this.updatePopupContent();

    this.feature.addTo(this.container);
  }

  @watch('latitude', { waitUntilFirstUpdate: true })
  @watch('longitude', { waitUntilFirstUpdate: true })
  updatePosition(): void {
    if (this.feature && this.latitude && this.longitude){
      this.feature.setLatLng(L.latLng(this.latitude as number, this.longitude as number));
    }
  }

  @watch('radius', { waitUntilFirstUpdate: true })
  updateRadius(): void {
    if (this.feature && this.radius !== null) this.feature.setRadius(this.radius as number);
  }
}
