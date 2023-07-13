import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './spinner.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://awc.a-dev.cloud/components/spinner
 * @status stable
 * @since 2.0
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-color - The color of the spinner's indicator.
 * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
 */
@customElement('awc-spinner')
export default class AWCSpinner extends AWCElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);

  render() {
    return html`
      <svg part="base" class="spinner" role="progressbar" aria-label="Spinner" aria-valuetext=${this.localize.term('loading')}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'awc-spinner': AWCSpinner;
  }
}
