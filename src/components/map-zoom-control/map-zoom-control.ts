import AWCMapZoomControl from './map-zoom-control.component.js';

export * from './map-zoom-control.component.js';
export default AWCMapZoomControl;

AWCMapZoomControl.define('awc-map-zoom-control');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-zoom-control': AWCMapZoomControl;
  }
}
