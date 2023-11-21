import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { property } from 'lit/decorators.js';
import styles from './map-point.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Element for adding a point to a polyline or polygon on the map
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-map-vector-layers-point--docs
 * @status experimental
 * @since 1.0
 */
export default class AWCMapPoint extends AWCLeafletElement {
  static styles: CSSResultGroup = styles;

  static isLeafletPoint(node: Node): node is AWCMapPoint {
    return node instanceof AWCMapPoint;
  }

  @property({ type: Number, reflect: true }) latitude = 0;

  @property({ type: Number, reflect: true }) longitude = 0;

  get latLng(): L.LatLng {
    return L.latLng(this.latitude, this.longitude);
  }
}
