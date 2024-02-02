import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './stepper.styles.js';
import type { CSSResultGroup } from 'lit';
import type AWCStepperItem from '../stepper-item/stepper-item';

/**
 * @summary The stepper component can be used to show a numbered list of steps.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-stepper--documentation
 * @status experimental
 * @since 1.0
 *
 * @slot - The default slot who contain the steps items `<awc-stepper-item>`.
 * @slot completed-icon - An icon to show when the step is completed, it will be forwarded to the `<awc-stepper-item>`.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty [--gap=var(--awc-spacing-medium)] - The gap between step badge and label.
 * @cssproperty [--size=var(--awc-spacing-5x-large)] - The size of the step badge.
 * @cssproperty [--font-size=var(--awc-font-size-medium)] - The font size of the step badge.
 * @cssproperty [--badge-radius=50%] - The radius of the step badge.
 * @cssproperty [--track-height=var(--awc-spacing-3x-small)] - The height of the step track and the badge border.
 * @cssproperty [--track-gap=var(--awc-spacing-x-small)] - The gap between the step track and the badge border.
 * @cssproperty [--color=var(--awc-color-neutral-400)] - The color of the step badge content.
 * @cssproperty [--badge-color=var(--awc-color-neutral-400)] - The color of the step badge.
 * @cssproperty [--backgound-color=var(--awc-color-neutral-0)] - The background color of the step badge.
 * @cssproperty [--active-color=var(--awc-color-primary-600)] - The color of the step badge when active content.
 * @cssproperty [--active-badge-color=var(--awc-color-primary-600)] - The color of the step badge when active.
 * @cssproperty [--active-backgound-color=var(--awc-color-neutral-0)] - The background color of the step badge when active.
 * @cssproperty [--completed-color=var(--awc-color-neutral-0)] - The color of the step badge when completed content.
 * @cssproperty [--completed-badge-color=var(--awc-color-primary-600)] - The color of the step badge when completed.
 * @cssproperty [--completed-backgound-color=var(--awc-color-primary-600)] - The background color of the step badge when completed.
 */
export default class AWCStepper extends AWCElement {
  static styles: CSSResultGroup = styles;

  /** An example attribute. */
  @property({ type: Boolean }) vertical = false;

  @query('slot') private defaultSlot: HTMLSlotElement;
  @query('slot[name="completed-icon"]') private completedIconSlot: HTMLSlotElement;

  private getCompletedIcon() {
    const completedIcon = this.completedIconSlot.assignedElements({ flatten: true })[0] as HTMLElement;

    // Clone it, remove ids, and slot it
    const clone = completedIcon.cloneNode(true) as HTMLElement;
    [clone, ...clone.querySelectorAll('[id]')].forEach(el => el.removeAttribute('id'));
    clone.setAttribute('data-default', '');
    clone.slot = 'completed-icon';

    return clone;
  }

  private handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      item => item.tagName.toLowerCase() === 'awc-stepper-item'
    ) as AWCStepperItem[];

    items.forEach((item, index, all) => {
      item.container = this;
      if (!item.step) {
        item.step = index + 1;
      }

      item.isFirst = index === 0;
      item.isLast = index === all.length - 1;

      // Append completed icon to each item if they don't already have one
      const completedIcon = item.querySelector('[slot="completed-icon"]');
      if (completedIcon === null) {
        // No completed icon exists, add one
        item.append(this.getCompletedIcon());
      } else if (completedIcon.hasAttribute('data-default')) {
        // A default icon exists, replace it
        completedIcon.replaceWith(this.getCompletedIcon());
      } else {
        // The user provided a custom icon, leave it alone
      }
    });
  }

  render() {
    this.updateComplete.then(() => this.handleSlotChange());

    // eslint-disable-next-line lit-a11y/list
    return html`<ol class="${classMap({ stepper: true, vertical: this.vertical })}" part="base">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </ol>
      <span hidden aria-hidden="true">
        <slot name="completed-icon">
          <awc-icon name="check-lg"></awc-icon>
        </slot>
      </span>`;
  }
}
