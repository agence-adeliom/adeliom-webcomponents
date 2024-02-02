import { classMap } from 'lit/directives/class-map.js';
import { defaultValue } from '../../internal/default-value.js';
import { FormControlController } from '../../internal/form.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { property, query, state } from 'lit/decorators.js';
import { watch } from '../../internal/watch.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './switch.styles.js';
import type { AWCFormControl } from '../../internal/awc-element.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Switches allow the user to toggle an option on or off.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-switch--documentation
 * @status stable
 * @since 1.0
 *
 * @slot - The switch's label.
 *
 * @event awc-blur - Emitted when the control loses focus.
 * @event awc-change - Emitted when the control's checked state changes.
 * @event awc-input - Emitted when the control receives input.
 * @event awc-focus - Emitted when the control gains focus.
 * @event awc-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The control that houses the switch's thumb.
 * @csspart thumb - The switch's thumb.
 * @csspart label - The switch's label.
 *
 * @cssproperty --width - The width of the switch.
 * @cssproperty --height - The height of the switch.
 * @cssproperty --thumb-size - The size of the thumb.
 */
export default class AWCSwitch extends AWCElement implements AWCFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    value: (control: AWCSwitch) => (control.checked ? control.value || 'on' : undefined),
    defaultValue: (control: AWCSwitch) => control.defaultChecked,
    setValue: (control: AWCSwitch, checked: boolean) => (control.checked = checked)
  });

  @query('input[type="checkbox"]') input: HTMLInputElement;

  @state() private hasFocus = false;
  @property() title = ''; // make reactive to pass through

  /** The name of the switch, submitted as a name/value pair with form data. */
  @property() name = '';

  /** The current value of the switch, submitted as a name/value pair with form data. */
  @property() value: string;

  /** The switch's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the switch. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the switch in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue('checked') defaultChecked = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = '';

  /** Makes the switch a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('awc-blur');
  }

  private handleInput() {
    this.emit('awc-input');
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleClick() {
    this.checked = !this.checked;
    this.emit('awc-change');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('awc-focus');
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.checked = false;
      this.emit('awc-change');
      this.emit('awc-input');
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.checked = true;
      this.emit('awc-change');
      this.emit('awc-input');
    }
  }

  @watch('checked', { waitUntilFirstUpdate: true })
  handleCheckedChange() {
    this.input.checked = this.checked; // force a sync update
    this.formControlController.updateValidity();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(true);
  }

  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }

  /** Sets focus on the switch. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          switch: true,
          'switch--checked': this.checked,
          'switch--disabled': this.disabled,
          'switch--focused': this.hasFocus,
          'switch--small': this.size === 'small',
          'switch--medium': this.size === 'medium',
          'switch--large': this.size === 'large'
        })}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
          name=${this.name}
          value=${ifDefined(this.value)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked ? 'true' : 'false'}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `;
  }
}
