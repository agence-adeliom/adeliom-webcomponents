import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize.js';
import { styleMap } from 'lit/directives/style-map.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './progress-bar.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Progress bars are used to show the status of an ongoing operation.
 * @documentation https://awc.a-dev.cloud/components/progress-bar
 * @status stable
 * @since 1.0
 *
 * @slot - A label to show inside the progress indicator.
 *
 * @csspart base - The component's base wrapper.
 * @csspart indicator - The progress bar's indicator.
 * @csspart label - The progress bar's label.
 *
 * @cssproperty [--height=1rem] - The progress bar's height.
 * @cssproperty [--border-radius=var(--awc-border-radius-none)] - The progress bar's border radius.
 * @cssproperty [--track-color=var(--awc-color-neutral-200)] - The color of the track.
 * @cssproperty [--indicator-color=var(--awc-color-primary-600)] - The color of the indicator.
 * @cssproperty [--label-color=var(--awc-color-neutral-0)] - The color of the label.
 *
 */
@customElement('awc-progress-bar')
export default class AWCProgressBar extends AWCElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  /** The current progress as a percentage, 0 to 100. */
  @property({ type: Number, reflect: true }) value = 0;

  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  @property({ type: Boolean, reflect: true }) indeterminate = false;

  /** A custom label for assistive devices. */
  @property() label = '';

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'progress-bar': true,
          'progress-bar--indeterminate': this.indeterminate,
          'progress-bar--rtl': this.localize.dir() === 'rtl'
        })}
        role="progressbar"
        title=${ifDefined(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term('progress')}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${styleMap({ width: `${this.value}%` })}>
          ${!this.indeterminate ? html` <slot part="label" class="progress-bar__label"></slot> ` : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'awc-progress-bar': AWCProgressBar;
  }
}
