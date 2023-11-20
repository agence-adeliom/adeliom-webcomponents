import AWCMapScaleControl from './map-scale-control.component.js';

export * from './map-scale-control.component.js';
export default AWCMapScaleControl;

AWCMapScaleControl.define('awc-map-scale-control');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-scale-control': AWCMapScaleControl;
  }
}
