import AWCMapRectangle from './map-rectangle.component.js';

export * from './map-rectangle.component.js';
export default AWCMapRectangle;

AWCMapRectangle.define('awc-map-rectangle');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-rectangle': AWCMapRectangle;
  }
}
