import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LeafletILayerMixin } from '../../internal/leaflet/ilayer.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';

import type { CSSResultGroup } from 'lit';
import type { GeoJsonObject } from 'geojson';

/**
 * @summary An element which represents a geojson layer on the map
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-other-layers-geojson--documentation
 * @status experimental
 * @since 1.0
 */
export default class AWCMapGeoJSON extends LeafletILayerMixin(AWCLeafletElement) {

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

  feature: L.GeoJSON;

  private _data: GeoJsonObject;

  /**
   * data as geojson object
   */
  @property({ attribute: false })
  get data(): GeoJsonObject | undefined {
    if (this._data) return this._data;

    try {
      const data = this.querySelector('script[type="application/json"]')?.innerHTML;
      if (data) {
        return JSON.parse(data) as GeoJsonObject;
      }
    } catch (e) {
      console.error(e);
    }

    return undefined;
  }

  set data(v: GeoJsonObject) {
    const old = this.data;
    this._data = v;
    this.requestUpdate('data', old);
  }

  @watch('data', { waitUntilFirstUpdate: true })
  containerChanged(): void {
    if (!this.container || !this.data) return;

    if (this.feature) this.container.removeLayer(this.feature);

    this.feature = L.geoJSON(this.data);

    this.feature.addTo(this.container).setStyle(this.getPathOptions());
  }

  disconnectedCallback(): void {
    super.disconnectedCallback?.();
    if (this.container && this.feature) this.container.removeLayer(this.feature);
  }
}
