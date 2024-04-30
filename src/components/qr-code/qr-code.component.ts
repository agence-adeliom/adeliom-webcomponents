import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import QrCreator from 'qr-creator';
import AWCElement from '../../internal/awc-element.js';
import styles from './qr-code.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-qr-code--documentation
 * @status stable
 * @since 1.0
 *
 * @csspart base - The component's base wrapper.
 */
export default class AWCQrCode extends AWCElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  @query('canvas') canvas: HTMLElement;

  /** The QR code's value. */
  @property() value = '';

  /** The label for assistive devices to announce. If unspecified, the value will be used instead. */
  @property() label = '';

  /** The size of the QR code, in pixels. */
  @property({ type: Number }) size = 128;

  /** The fill color. This can be any valid CSS color, but not a CSS custom property. */
  @property() fill = 'black';

  /** The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. */
  @property() background = 'white';

  /** The edge radius of each module. Must be between 0 and 0.5. */
  @property({ type: Number }) radius = 0;

  /** The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) */
  @property({ attribute: 'error-correction' }) errorCorrection: 'L' | 'M' | 'Q' | 'H' = 'H';

  firstUpdated() {
    this.generate();
  }

  @watch(['background', 'errorCorrection', 'fill', 'radius', 'size', 'value'])
  generate() {
    if (!this.hasUpdated) {
      return;
    }

    // For some reason, when changing to "NodeNext", it has the wrong type for QrCreator.
    (QrCreator as unknown as typeof QrCreator.default).render(
      {
        text: this.value,
        radius: this.radius,
        ecLevel: this.errorCorrection,
        fill: this.fill,
        background: this.background,
        // We draw the canvas larger and scale its container down to avoid blurring on high-density displays
        size: this.size * 2
      },
      this.canvas
    );
  }

  render() {
    return html`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length > 0 ? this.label : this.value}
        style=${styleMap({
          width: `${this.size}px`,
          height: `${this.size}px`
        })}
      ></canvas>
    `;
  }
}
