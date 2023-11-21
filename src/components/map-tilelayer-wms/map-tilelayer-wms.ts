import AWCMapTilelayerWMS from './map-tilelayer-wms.component.js';

export * from './map-tilelayer-wms.component.js';
export default AWCMapTilelayerWMS;

AWCMapTilelayerWMS.define('awc-map-tilelayer-wms');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-tilelayer-wms': AWCMapTilelayerWMS;
  }
}
