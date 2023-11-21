import AWCMapCircle from './map-circle.component.js';

export * from './map-circle.component.js';
export default AWCMapCircle;

AWCMapCircle.define('awc-map-circle');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-circle': AWCMapCircle;
  }
}
