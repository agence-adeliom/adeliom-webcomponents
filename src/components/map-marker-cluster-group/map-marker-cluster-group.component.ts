import 'leaflet.markercluster';
import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { bound } from '../../internal/bound.js';
import { property } from 'lit/decorators.js';
import type AWCMapMarker from '../map-marker/map-marker';

/**
 * @summary Element which represents a marker cluster group
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-other-layers-markerclustergroup--documentation
 * @status experimental
 * @since 1.0
 */
export default class AWCMapMarkerClusterGroup extends AWCLeafletElement {
  feature: L.MarkerClusterGroup;

  /** @private */
  readonly children: HTMLCollectionOf<AWCMapMarker>;

  private mutationObserver: MutationObserver;

  /**
   * When you mouse over a cluster it shows the bounds of its markers.
   */
  @property({ type: Boolean, attribute: 'show-coverage-on-hover' }) showCoverageOnHover: boolean = false;

  /**
   * When you click a cluster we zoom to its bounds.
   */
  @property({ type: Boolean, attribute: 'zoom-to-bounds-on-click' }) zoomToBoundsOnClick: boolean = true;

  /**
   * When you click a cluster at the bottom zoom level we spiderfy it so you can see all of its markers. (Note: the spiderfy occurs at the current zoom level if all items within the cluster are still clustered at the maximum zoom level or at zoom specified by `disableClusteringAtZoom` option)
   */
  @property({ type: Boolean, attribute: 'spiderfy-on-max-zoom' }) spiderfyOnMaxZoom: boolean = true;

  /**
   * Clusters and markers too far from the viewport are removed from the map for performance.
   */
  @property({ type: Boolean, attribute: 'remove-outside-visible-bounds' }) removeOutsideVisibleBounds: boolean = true;

  /**
   * Clusters and markers too far from the viewport are removed from the map for performance.
   */
  @property({ type: Object, attribute: 'spider-leg-polyline-options' }) spiderLegPolylineOptions: L.PolylineOptions = {
    weight: 1.5,
    color: '#222',
    opacity: 0.5
  };

  /**
   * Boolean to split the addLayers processing in to small intervals so that the page does not freeze.
   */
  @property({ type: Boolean, attribute: 'chunked-loading' }) chunkedLoading: boolean = true;

  /**
   * If set, at this zoom level and below, markers will not be clustered. This defaults to disabled.
   */
  //@property({ type: Number, attribute: 'disable-clustering-at-zoom' }) disableClusteringAtZoom?: number = undefined;

  firstUpdated(): void {
    this.mutationObserver = new MutationObserver(this.registerContainerOnChildren);
    this.mutationObserver.observe(this, { childList: true });
  }

  containerChanged(): void {
    if (!this.container) return;
    this.feature = L.markerClusterGroup({
      showCoverageOnHover: this.showCoverageOnHover,
      zoomToBoundsOnClick: this.zoomToBoundsOnClick,
      spiderfyOnMaxZoom: this.spiderfyOnMaxZoom,
      removeOutsideVisibleBounds: this.removeOutsideVisibleBounds,
      spiderLegPolylineOptions: this.spiderLegPolylineOptions
    });
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
