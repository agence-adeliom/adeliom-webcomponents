import AWCMapGeojson from './map-geojson.component.js';

export * from './map-geojson.component.js';
export default AWCMapGeojson;

AWCMapGeojson.define('awc-map-geojson');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-geojson': AWCMapGeojson;
  }
}
