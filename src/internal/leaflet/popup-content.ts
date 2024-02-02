import { bound } from '../bound.js';
import { dedupeMixin } from '@open-wc/dedupe-mixin';
import type * as L from 'leaflet';
import type { AWCLeafletElement } from '../awc-leaflet.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = NonNullable<unknown>> = new (...args: any[]) => T;

export interface LeafletPopupContentMixinElement extends AWCLeafletElement {
  feature: L.Popup | L.Polygon | L.Polyline | L.Circle | L.Rectangle | L.Marker;
  popupMO: MutationObserver;
  updatePopupContent: () => void;
}

export const LeafletPopupContentMixin = dedupeMixin(
  <TBase extends Constructor<AWCLeafletElement>>(
    superclass: TBase
  ): TBase & Constructor<LeafletPopupContentMixinElement> => {
    class LeafletPopupContentElement extends superclass {
      feature: L.Popup | L.Polygon | L.Polyline | L.Circle | L.Rectangle | L.Marker;

      /** @private */
      popupMO: MutationObserver;

      connectedCallback() {
        super.connectedCallback();
        if (MutationObserver && !this.popupMO) {
          this.popupMO = new MutationObserver(this.updatePopupContent);
          this.popupMO.observe(this, {
            childList: true,
            characterData: true,
            attributes: true,
            subtree: true
          });
        }
      }

      @bound
      updatePopupContent() {
        if (!this.feature) return;

        this.feature.unbindPopup();

        // Hack, ignore <awc-map-point>-tag
        const content = this.innerHTML.replace(/<\/?awc-map-point[^>]*>/g, '').trim();

        if (content) this.feature.bindPopup(content);
      }

      disconnectedCallback() {
        super.disconnectedCallback();
        if (this.popupMO) this.popupMO.disconnect();
      }
    }

    return LeafletPopupContentElement;
  }
);
