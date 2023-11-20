import AWCMapMarkerClusterGroup from './map-marker-cluster-group.component.js';

export * from './map-marker-cluster-group.component.js';
export default AWCMapMarkerClusterGroup;

AWCMapMarkerClusterGroup.define('awc-map-marker-cluster-group');

declare global {
  interface HTMLElementTagNameMap {
    'awc-map-marker-cluster-group': AWCMapMarkerClusterGroup;
  }
}
