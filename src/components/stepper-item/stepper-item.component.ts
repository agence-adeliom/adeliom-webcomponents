import { classMap } from 'lit/directives/class-map.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import AWCElement from '../../internal/awc-element.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './stepper-item.styles.js';
import type { CSSResultGroup } from 'lit';
import type AWCStepper from '../stepper/stepper.js';

/**
 * @summary The stepper-item component can be used to show a numbered list of steps.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-stepper-item--documentation
 * @status experimental
 * @since 1.0
 *
 *
 * @slot - The default slot is used for step content.
 * @slot step - The step badge content.
 * @slot completed-icon - The icon to show when the step is completed.
 *
 * @csspart base - The component's base wrapper.
 * @csspart badge - The badge wrapper.
 * @csspart step - The badge's step wrapper.
 * @csspart completed - The badge's completed wrapper.
 * @csspart label - The step's label.
 *
 * @cssproperty [--gap=var(--awc-spacing-medium)] - The gap between step badge and label (Inherited from the parent stepper).
 * @cssproperty [--size=var(--awc-spacing-5xlarge)] - The size of the step badge (Inherited from the parent stepper).
 * @cssproperty [--font-size=var(--awc-font-size-medium)] - The font size of the step badge (Inherited from the parent stepper).
 * @cssproperty [--badge-radius=50%] - The radius of the step badge (Inherited from the parent stepper).
 * @cssproperty [--track-height=var(--awc-spacing-3xsmall)] - The height of the step track and the badge border (Inherited from the parent stepper).
 * @cssproperty [--track-gap=var(--awc-spacing-xsmall)] - The gap between the step track and the badge border (Inherited from the parent stepper).
 * @cssproperty [--color=var(--awc-color-neutral-400)] - The color of the step badge content (Inherited from the parent stepper).
 * @cssproperty [--badge-color=var(--awc-color-neutral-400)] - The color of the step badge (Inherited from the parent stepper).
 * @cssproperty [--backgound-color=var(--awc-color-neutral-0)] - The background color of the step badge (Inherited from the parent stepper).
 * @cssproperty [--active-color=var(--awc-color-primary-600)] - The color of the step badge when active content (Inherited from the parent stepper).
 * @cssproperty [--active-badge-color=var(--awc-color-primary-600)] - The color of the step badge when active (Inherited from the parent stepper).
 * @cssproperty [--active-backgound-color=var(--awc-color-neutral-0)] - The background color of the step badge when active (Inherited from the parent stepper).
 * @cssproperty [--completed-color=var(--awc-color-neutral-0)] - The color of the step badge when completed content (Inherited from the parent stepper).
 * @cssproperty [--completed-badge-color=var(--awc-color-primary-600)] - The color of the step badge when completed (Inherited from the parent stepper).
 * @cssproperty [--completed-backgound-color=var(--awc-color-primary-600)] - The background color of the step badge when completed (Inherited from the parent stepper).
 */
export default class AWCStepperItem extends AWCElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly hasSlotController = new HasSlotController(this, 'completed-icon', 'step');

  container?: AWCStepper = undefined;

  /** A accessibility label for the step item. */
  @property({ type: String }) label?: string = undefined;

  /** The step number. */
  @property({ type: Number, reflect: true }) step?: number = undefined;

  /** Mark the step as completed. */
  @property({ type: Boolean, reflect: true }) completed: boolean = false;

  /** Mark the step as active. */
  @property({ type: Boolean, reflect: true }) active: boolean = false;

  isFirst: boolean = false;
  isLast: boolean = false;

  render() {
    return html`<li
      part="base"
      aria-label="${this.label}"
      class="${classMap({
        'step-item': true,
        completed: this.completed,
        'has-completed-icon': this.hasSlotController.test('completed-icon'),
        active: this.active,
        first: this.isFirst,
        last: this.isLast,
        vertical: !!this.container?.vertical
      })}"
    >
      <span part="badge" class="badge">
        <span part="step" class="badge__step">
          <slot name="step"> ${this.step} </slot>
        </span>
        <span part="completed" class="badge__completed">
          <slot name="completed-icon"></slot>
        </span>
      </span>
      <span part="label" class="label"><slot></slot></span>
    </li> `;
  }
}
