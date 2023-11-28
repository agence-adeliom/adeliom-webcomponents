import * as L from 'leaflet';
import { AWCLeafletElement } from '../../internal/awc-leaflet.js';
import { property } from 'lit/decorators.js';
import styles from './map-divicon.styles.js';
import type { CSSResultGroup, PropertyValues } from 'lit';

/**
 * @summary Element which defines an divicon template for markers
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-map-icon-divicon--docs
 * @status experimental
 * @since 1.0
 *
 */
export default class AWCMapDivicon extends AWCLeafletElement {
  static styles: CSSResultGroup = styles;

  /**
   * The `icon-width` attribute sets the size of the icon image in pixels.
   */
  @property({ attribute: 'icon-width', type: Number }) iconWidth: number;

  /**
   * The `icon-height` attribute sets the size of the icon image in pixels.
   */
  @property({ attribute: 'icon-height', type: Number }) iconHeight: number;

  /**
   * The `icon-anchor-x` attribute sets the coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical location. Centered by default if size is specified, also can be set in CSS with negative margins.
   */
  @property({ attribute: 'icon-anchor-x', type: Number }) iconAnchorX: number;

  /**
   * The `icon-anchor-y` attribute sets the coordinates of the "tip" of the icon (relative to its top left corner). The icon will be aligned so that this point is at the marker's geographical location. Centered by default if size is specified, also can be set in CSS with negative margins.
   */
  @property({ attribute: 'icon-anchor-y', type: Number }) iconAnchorY: number;

  /**
   * The `class-name` attribute sets a custom class name to assign to both icon and shadow images. Empty by default.
   */
  @property({ attribute: 'class-name', type: String }) className = '';

  private icon: L.DivIcon | null;

  getIcon(): L.DivIcon {
    if (this.icon) return this.icon;

    const { className, iconWidth, iconHeight, iconAnchorX, iconAnchorY, innerHTML: html } = this;

    const iconSize = iconWidth && iconHeight ? L.point(iconWidth, iconHeight) : undefined;

    const iconAnchor = iconAnchorX && iconAnchorY ? L.point(iconAnchorX, iconAnchorY) : undefined;

    this.icon = L.divIcon({
      iconSize,
      iconAnchor,
      className,
      html
    });

    return this.icon;
  }

  updated(changed: PropertyValues): void {
    super.updated(changed);
    this.icon = null;
  }
}
