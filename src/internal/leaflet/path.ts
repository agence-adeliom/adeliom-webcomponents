import { dedupeMixin } from '@open-wc/dedupe-mixin';
import { property } from 'lit/decorators.js';
import { SVGAttributesMixin } from './svg-attributes.js';
import type { AWCLeafletElement } from '../awc-leaflet.js';

import type * as L from 'leaflet';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = NonNullable<unknown>> = new (...args: any[]) => T;

export interface LeafletPathMixinElement extends AWCLeafletElement {
  /**
   * The attribute `clickable` sets whether the vector will emit mouse events or will act as a part of the underlying map.
   */
  clickable: boolean;
  /**
    The attribute `class-name` sets the custom class name set on an element.
    */
  className: string;
  getPathOptions: () => L.PathOptions;
}

/**
 * Fired when the user clicks (or taps) the object.
 *
 * @fires click
 * @type MouseEvent
 * @param {LatLng} latlng The geographical point where the mouse event occured.
 * @param {Point} layerPoint Pixel coordinates of the point where the mouse event occured relative to the map layer.
 * @param {Point} containerPoint Pixel coordinates of the point where the mouse event occured relative to the map сontainer.
 * @param {DOMMouseEvent} originalEvent The original DOM mouse event fired by the browser.

 * Fired when the user double-clicks (or double-taps) the object.
 *
 * @fires dblclick
 * @type MouseEvent
 * @param {LatLng} latlng The geographical point where the mouse event occured.
 * @param {Point} layerPoint Pixel coordinates of the point where the mouse event occured relative to the map layer.
 * @param {Point} containerPoint Pixel coordinates of the point where the mouse event occured relative to the map сontainer.
 * @param {DOMMouseEvent} originalEvent The original DOM mouse event fired by the browser.

 * @fires mousedown
 * @type MouseEvent
 * @param {LatLng} latlng The geographical point where the mouse event occured.
 * @param {Point} layerPoint Pixel coordinates of the point where the mouse event occured relative to the map layer.
 * @param {Point} containerPoint Pixel coordinates of the point where the mouse event occured relative to the map сontainer.
 * @param {DOMMouseEvent} originalEvent The original DOM mouse event fired by the browser.

 * @fires mouseover
 * @type MouseEvent
 * @param {LatLng} latlng The geographical point where the mouse event occured.
 * @param {Point} layerPoint Pixel coordinates of the point where the mouse event occured relative to the map layer.
 * @param {Point} containerPoint Pixel coordinates of the point where the mouse event occured relative to the map сontainer.
 * @param {DOMMouseEvent} originalEvent The original DOM mouse event fired by the browser.

 * @fires mouseout
 * @type MouseEvent
 * @param {LatLng} latlng The geographical point where the mouse event occured.
 * @param {Point} layerPoint Pixel coordinates of the point where the mouse event occured relative to the map layer.
 * @param {Point} containerPoint Pixel coordinates of the point where the mouse event occured relative to the map сontainer.
 * @param {DOMMouseEvent} originalEvent The original DOM mouse event fired by the browser.

 * @fires contextmenu
 * @type MouseEvent

 * @fires add
 * @type

 * @fires remove

 * @fires popupopen
 * @type PopupEvent
 * @param {Popup} popup The popup that was opened or closed.

 * @fires popupclose
 * @type PopupEvent
 * @param {Popup} popup The popup that was opened or closed.

 *
 * @mixin
 * @blurb element which defines am abstract leaflet path. Do not use directly. Most options are supported as attributes.
 * @demo https://leaflet-extras.github.io/leaflet-map/demo.html
 * @homepage https://leaflet-extras.github.io/leaflet-map/
 */
export const LeafletPathMixin = dedupeMixin(
  <T extends Constructor<AWCLeafletElement>>(superClass: T): Constructor<LeafletPathMixinElement> & T => {
    class LeafletPathElement extends SVGAttributesMixin(superClass) {
      /**
       * The attribute `clickable` sets whether the vector will emit mouse events or will act as a part of the underlying map.
       */
      @property({ type: Boolean }) clickable = false;

      /**
       * The attribute `class-name` sets the custom class name set on an element.
       */
      @property({ type: String, attribute: 'class-name' }) className = '';

      getPathOptions(): L.PathOptions {
        return {
          stroke: this.stroke,
          color: this.color,
          weight: this.weight,
          opacity: this.opacity,
          fill: this.fill,
          fillColor: this.fillColor,
          fillOpacity: this.fillOpacity,
          dashArray: this.dashArray,
          lineCap: this.lineCap,
          lineJoin: this.lineJoin,
          className: this.className
        };
      }
    }

    return LeafletPathElement;
  }
);
