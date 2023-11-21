import AWCMapTilelayer from './map-tilelayer.component.js';

export * from './map-tilelayer.component.js';
export default AWCMapTilelayer;

AWCMapTilelayer.define('awc-map-tilelayer');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-tilelayer': AWCMapTilelayer;
  }
}
