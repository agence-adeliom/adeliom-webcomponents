import AWCMapFullscreenControl from './map-fullscreen-control.component.js';

export * from './map-fullscreen-control.component.js';
export default AWCMapFullscreenControl;

AWCMapFullscreenControl.define('awc-map-fullscreen-control');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-fullscreen-control': AWCMapFullscreenControl;
  }
}
