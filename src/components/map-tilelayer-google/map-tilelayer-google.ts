import AWCMapTilelayerGoogle from './map-tilelayer-google.component.js';

export * from './map-tilelayer-google.component.js';
export default AWCMapTilelayerGoogle;

AWCMapTilelayerGoogle.define('awc-map-tilelayer-google');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-tilelayer-google': AWCMapTilelayerGoogle;
  }
}
