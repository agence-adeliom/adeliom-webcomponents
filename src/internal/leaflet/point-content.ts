import { bound } from '../bound.js';
import { dedupeMixin } from '@open-wc/dedupe-mixin';
import AWCMapPoint from '../../components/map-point/map-point.js';
import type { AWCLeafletElement } from '../awc-leaflet';

import type * as L from 'leaflet';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = NonNullable<unknown>> = new (...args: any[]) => T;

export interface LeafletPointContentMixinElement extends AWCLeafletElement {
  pointMO: MutationObserver;
  feature: L.Polygon | L.Polyline;
  updatePointContent: () => void;
}

export const LeafletPointContentMixin = dedupeMixin(
  <TBase extends Constructor<AWCLeafletElement>>(
    superClass: TBase
  ): TBase & Constructor<LeafletPointContentMixinElement> => {
    class LeafletPointContentElement extends superClass {
      protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this.attachShadow({ mode: 'open' });
      }
      /** @private */
      pointMO: MutationObserver;

      feature: L.Polygon | L.Polyline;

      connectedCallback() {
        if (MutationObserver && !this.pointMO) {
          this.pointMO = new MutationObserver(this.updatePointContent);
          this.pointMO.observe(this, {
            childList: true,
            characterData: true,
            attributes: true,
            subtree: true
          });
        }
      }

      @bound
      updatePointContent() {
        if (!this.feature) return;

        const latLngs = [...this.children].filter(AWCMapPoint.isLeafletPoint).map(x => x.latLng);
        this.feature.setLatLngs(latLngs);
      }

      disconnectedCallback() {
        if (this.pointMO) this.pointMO.disconnect();
      }
    }

    return LeafletPointContentElement;
  }
);
