import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { LocalizeController } from '../../utilities/localize.js';
import { property } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import styles from './map-zoom-control.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-map-zoom-control--docs
 * @status experimental
 * @since 1.0
 */
export default class AWCMapZoomControl extends AWCLeafletElement {
  static styles: CSSResultGroup = styles;

  static _zoomInText: string = '<span aria-hidden="true"><awc-icon name="plus-lg"></awc-icon></span>';
  static _zoomOutText: string = '<span aria-hidden="true"><awc-icon name="dash-lg"></awc-icon></span>';

  // @ts-expect-error ambient property.
  container: L.Map;

  control: L.Control.Zoom;

  private readonly localize = new LocalizeController(this);

  /**
   * The position of the control (one of the map corners).
   * Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
   */
  @property({ type: String }) position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'topright';

  /** The text set on the 'zoom in' button.*/
  @property({ type: String }) zoomInText = AWCMapZoomControl._zoomInText;

  /** The title set on the 'zoom in' button.*/
  @property({ type: String }) zoomInTitle?: string = undefined;

  /** The text set on the 'zoom out' button.*/
  @property({ type: String }) zoomOutText = AWCMapZoomControl._zoomOutText;

  /** The title set on the 'zoom out' button. */
  @property({ type: String }) zoomOutTitle?: string = undefined;

  containerChanged(): void {
    if (!this.container) return;
    const { position, zoomInText, zoomOutText } = this;
    this.control = L.control.zoom({
      position,
      zoomInText,
      zoomInTitle: this.zoomInTitle ? this.zoomInTitle : this.localize.term('zoomIn'),
      zoomOutText,
      zoomOutTitle: this.zoomOutTitle ? this.zoomOutTitle : this.localize.term('zoomOut')
    });
    this.control.addTo(this.container);
  }

  disconnectedCallback(): void {
    if (this.container && this.control) this.container.removeControl(this.control);
  }

  @watch('position', { waitUntilFirstUpdate: true })
  updatePosition(): void {
    if (this.container && this.control) this.control.setPosition(this.position);
  }
}
