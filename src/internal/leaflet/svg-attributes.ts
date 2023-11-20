import { dedupeMixin } from '@open-wc/dedupe-mixin';
import { property } from 'lit/decorators.js';
import type { LitElement } from 'lit-element';

import type { LineCapShape, LineJoinShape } from 'leaflet';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = NonNullable<unknown>> = new (...args: any[]) => T;

export interface SVGAttributesMixinElement extends LitElement {
  /**
   * The attribute `stroke` sets whether to draw stroke along the path. Set it to false to disable borders on polygons or circles.
   */
  stroke: boolean;

  /**
   * The attribute `color` sets the stroke color.
   */
  color: string;

  /**
   * The attribute `weight` sets the stroke width in pixels.
   */
  weight: number;

  /**
   * The attribute `opacity` sets the stroke opacity.
   */
  opacity: number;

  /**
   * The attribute `fill` sets the whether to fill the path with color. Set it to false to disable filling on polygons or circles.
   */
  fill: boolean;

  /**
   * The attribute `fill-color` sets the fill color.
   */
  fillColor?: string;

  /**
   * The attribute `fill-opacity` sets the fill opacity.
   */
  fillOpacity: number;

  /**
   * The attribute `dash-array` sets a string that defines the stroke dash pattern. Doesn't work on canvas-powered layers (e.g. Android 2).
   */
  dashArray?: string;

  /**
   * The attribute `line-cap` defines the shape to be used at the end of the stroke.
   */
  lineCap?: LineCapShape;

  /**
   * The attribute `line-join` sets the string that defines shape to be used at the corners of the stroke.
   */
  lineJoin?: LineJoinShape;

  /**
   * The attribute `pointer-events` sets the pointer-events attribute on the path if SVG backend is used.
   */
  pointerEvents?: string;
}

export const SVGAttributesMixin = dedupeMixin(
  <T extends Constructor<LitElement>>(superClass: T): Constructor<SVGAttributesMixinElement> & T => {
    class LeafletSVGAttributesElement extends superClass {
      /**
       * The attribute `stroke` sets whether to draw stroke along the path. Set it to false to disable borders on polygons or circles.
       */
      @property({ type: Boolean }) stroke = true;

      /**
       * The attribute `color` sets the stroke color.
       */
      @property({ type: String }) color = '#03f';

      /**
       * The attribute `weight` sets the stroke width in pixels.
       */
      @property({ type: Number }) weight?: number | string = 5;

      /**
       * The attribute `opacity` sets the stroke opacity.
       */
      @property({ type: Number }) opacity?: number | string = 0.5;

      /**
       * The attribute `fill` sets the whether to fill the path with color. Set it to false to disable filling on polygons or circles.
       */
      @property({ type: Boolean }) fill = false;

      /**
       * The attribute `fill-color` sets the fill color.
       */
      @property({ type: String, attribute: 'fill-color' }) fillColor?: string = undefined;

      /**
       * The attribute `fill-opacity` sets the fill opacity.
       */
      @property({ type: Number, attribute: 'fill-opacity' }) fillOpacity?: number | string = 0.2;

      /**
       * The attribute `dash-array` sets a string that defines the stroke dash pattern. Doesn't work on canvas-powered layers (e.g. Android 2).
       */
      @property({ type: String, attribute: 'dash-array' }) dashArray?: string = undefined;

      /**
       * The attribute `line-cap` defines the shape to be used at the end of the stroke.
       */
      @property({ type: String, attribute: 'line-cap' }) lineCap = undefined;

      /**
       * The attribute `line-join` sets the string that defines shape to be used at the corners of the stroke.
       */
      @property({ type: String, attribute: 'line-join' }) lineJoin = undefined;

      /**
       * The attribute `pointer-events` sets the pointer-events attribute on the path if SVG backend is used.
       */
      @property({ type: String, attribute: 'pointer-events' }) pointerEvents = undefined;
    }

    return LeafletSVGAttributesElement as Constructor<SVGAttributesMixinElement> & T;
  }
);
