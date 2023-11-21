import AWCMapPolygon from './map-polygon.component.js';

export * from './map-polygon.component.js';
export default AWCMapPolygon;

AWCMapPolygon.define('awc-map-polygon');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-polygon': AWCMapPolygon;
  }
}
