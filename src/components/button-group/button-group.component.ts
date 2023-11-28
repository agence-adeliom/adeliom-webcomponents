import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './button-group.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Button groups can be used to group related buttons into sections.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-button-group--docs
 * @status stable
 * @since 1.0
 *
 * @slot - One or more `<awc-button>` elements to display in the button group.
 *
 * @csspart base - The component's base wrapper.
 */
export default class AWCButtonGroup extends AWCElement {
  static styles: CSSResultGroup = styles;

  @query('slot') defaultSlot: HTMLSlotElement;

  @state() disableRole = false;

  /**
   * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
   * devices when interacting with the control and is strongly recommended.
   */
  @property() label = '';

  private handleFocus(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.add('awc-button-group__button--focus');
  }

  private handleBlur(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.remove('awc-button-group__button--focus');
  }

  private handleMouseOver(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.add('awc-button-group__button--hover');
  }

  private handleMouseOut(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.remove('awc-button-group__button--hover');
  }

  private handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })] as HTMLElement[];

    slottedElements.forEach(el => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);

      if (button) {
        button.classList.add('awc-button-group__button');
        button.classList.toggle('awc-button-group__button--first', index === 0);
        button.classList.toggle('awc-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
        button.classList.toggle('awc-button-group__button--last', index === slottedElements.length - 1);
        button.classList.toggle('awc-button-group__button--radio', button.tagName.toLowerCase() === 'awc-radio-button');
      }
    });
  }

  render() {
    // eslint-disable-next-line lit-a11y/mouse-events-have-key-events
    return html`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? 'presentation' : 'group'}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

function findButton(el: HTMLElement) {
  const selector = 'awc-button, awc-radio-button';

  // The button could be the target element or a child of it (e.g. a dropdown or tooltip anchor)
  return el.closest(selector) ?? el.querySelector(selector);
}
