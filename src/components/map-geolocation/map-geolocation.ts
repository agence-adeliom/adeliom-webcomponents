import AWCMapGeolocation from './map-geolocation.component.js';

export * from './map-geolocation.component.js';
export default AWCMapGeolocation;

AWCMapGeolocation.define('awc-map-geolocation');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-geolocation': AWCMapGeolocation;
  }
}
