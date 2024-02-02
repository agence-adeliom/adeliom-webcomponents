import * as L from 'leaflet';
import { bound } from './bound.js';
import AWCElement from './awc-element.js';

import type AWCMap from '../components/map/map.js';

type LeafletFeature =
  | null
  | L.Circle
  | L.GeoJSON
  | L.Marker
  | L.LayerGroup
  | L.Polyline
  | L.Rectangle
  | L.Polygon
  | L.Popup
  | L.Point;

export class AWCLeafletElement extends AWCElement {
  static is: string;

  feature: LeafletFeature;

  protected mo?: MutationObserver;

  private _container: L.Map | L.LayerGroup;

  get container(): L.Map | L.LayerGroup {
    return this._container;
  }

  set container(container: L.Map | L.LayerGroup) {
    this._container = container;
    this.containerChanged?.(container);
  }

  get mapElement(): AWCMap | null {
    return !(this.container instanceof L.Map)
      ? null
      : ((this.container.getContainer().getRootNode() as ShadowRoot).host as AWCMap);
  }

  @bound
  onLeafletEvent(e: L.LeafletEvent): void {
    this.emit("awc-map", { detail: e });
  }

  containerChanged?(container?: L.Map | L.LayerGroup): void;
}
