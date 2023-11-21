import { dedupeMixin } from '@open-wc/dedupe-mixin';
import type { AWCLeafletElement } from '../awc-leaflet';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = NonNullable<unknown>> = new (...args: any[]) => T;

export interface LeafletILayerMixinElement extends AWCLeafletElement {
  isLayer: () => boolean;
}

/**
 * Abstract element representing [ILayer](http://leafletjs.com/reference.html#ilayer).
 */
export const LeafletILayerMixin = dedupeMixin(
  <TBase extends Constructor<AWCLeafletElement>>(superClass: TBase): TBase & Constructor<LeafletILayerMixinElement> => {
    return class LeafletILayerElement extends superClass {
      isLayer(): boolean {
        return true;
      }
    };
  }
);
