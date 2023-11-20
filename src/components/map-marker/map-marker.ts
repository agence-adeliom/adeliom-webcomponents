import AWCMapMarker from './map-marker.component.js';

export * from './map-marker.component.js';
export default AWCMapMarker;

AWCMapMarker.define('awc-map-marker');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-marker': AWCMapMarker;
  }
}
