import AWCMapPoint from './map-point.component.js';

export * from './map-point.component.js';
export default AWCMapPoint;

AWCMapPoint.define('awc-map-point');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-point': AWCMapPoint;
  }
}
