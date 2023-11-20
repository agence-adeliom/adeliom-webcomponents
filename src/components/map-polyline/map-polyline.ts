import AWCMapPolyline from './map-polyline.component.js';

export * from './map-polyline.component.js';
export default AWCMapPolyline;

AWCMapPolyline.define('awc-map-polyline');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-polyline': AWCMapPolyline;
  }
}
