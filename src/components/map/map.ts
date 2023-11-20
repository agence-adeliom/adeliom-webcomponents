import AWCMap from './map.component.js';

export * from './map.component.js';
export default AWCMap;

AWCMap.define('awc-map');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map': AWCMap;
  }
}
