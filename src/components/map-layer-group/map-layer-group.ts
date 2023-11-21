import AWCMapLayerGroup from './map-layer-group.component.js';

export * from './map-layer-group.component.js';
export default AWCMapLayerGroup;

AWCMapLayerGroup.define('awc-map-layer-group');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-layer-group': AWCMapLayerGroup;
  }
}
