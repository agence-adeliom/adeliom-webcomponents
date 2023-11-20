import AWCMapIcon from './map-icon.component.js';

export * from './map-icon.component.js';
export default AWCMapIcon;

AWCMapIcon.define('awc-map-icon');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-icon': AWCMapIcon;
  }
}
