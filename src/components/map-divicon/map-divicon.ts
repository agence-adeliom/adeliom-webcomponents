import AWCMapDivicon from './map-divicon.component.js';

export * from './map-divicon.component.js';
export default AWCMapDivicon;

AWCMapDivicon.define('awc-map-divicon');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-divicon': AWCMapDivicon;
  }
}
