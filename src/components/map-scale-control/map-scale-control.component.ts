import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { property } from 'lit/decorators.js';
import styles from './map-scale-control.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-controls-scale--documentation
 * @status experimental
 * @since 1.0
 */
export default class AWCMapScaleControl extends AWCLeafletElement {
  static styles: CSSResultGroup = styles;

  // @ts-expect-error ambient property.
  container: L.Map;

  control: L.Control.Scale;

  /**
   * The `position` attribute sets the position of the control (one of the map corners). See control positions.
   */
  @property({ type: String }) position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'topright';

  /**
   * The `max-width` attribute sets the maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
   */
  @property({ type: Number, attribute: 'max-width' }) maxWidth = 100;

  /**
   * The `metric` attribute sets whether to show the metric scale line (m/km).
   */
  @property({ type: Boolean }) metric = false;

  /**
   * The `imperial` attribute sets whether to show the imperial scale line (mi/ft).
   */
  @property({ type: Boolean }) imperial = false;

  /**
   * The `update-when-idle` attribute sets whether the control is updated on moveend, otherwise it's always up-to-date (updated on move).
   */
  @property({ type: Boolean, attribute: 'update-when-idle' }) updateWhenIdle = false;

  containerChanged(): void {
    if (!this.container) return;
    this.control = L.control.scale({
      position: this.position,
      maxWidth: this.maxWidth,
      metric: this.metric || !this.imperial,
      imperial: this.imperial || !this.metric,
      updateWhenIdle: this.updateWhenIdle
    });
    this.control.addTo(this.container);
  }

  disconnectedCallback(): void {
    if (this.container && this.control) this.container.removeControl(this.control);
  }
}
