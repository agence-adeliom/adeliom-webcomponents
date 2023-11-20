import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { bound } from '../../internal/bound.js';
import type AWCMapMarker from '../map-marker/map-marker';

/**
 * @summary Element which represents a layer group
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-map-other-layers-layergroup--docs
 * @status experimental
 * @since 1.0
 */
export default class AWCMapLayerGroup extends AWCLeafletElement {
  feature: L.LayerGroup;

  /** @private */
  readonly children: HTMLCollectionOf<AWCMapMarker>;

  private mutationObserver: MutationObserver;

  firstUpdated(): void {
    this.mutationObserver = new MutationObserver(this.registerContainerOnChildren);
    this.mutationObserver.observe(this, { childList: true });
  }

  containerChanged(): void {
    if (!this.container) return;
    this.feature = L.layerGroup();
    this.feature.addTo(this.container);
    this.registerContainerOnChildren();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.container && this.feature) this.container.removeLayer(this.feature);

    this.mutationObserver.disconnect();
  }

  @bound
  registerContainerOnChildren(): void {
    for (const child of this.children) child.container = this.feature;
  }
}
