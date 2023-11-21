import AWCMapVideoOverlay from './map-video-overlay.component.js';

export * from './map-video-overlay.component.js';
export default AWCMapVideoOverlay;

AWCMapVideoOverlay.define('awc-map-video-overlay');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-video-overlay': AWCMapVideoOverlay;
  }
}
