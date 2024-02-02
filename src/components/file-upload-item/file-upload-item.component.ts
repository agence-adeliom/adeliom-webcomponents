import { animateTo, stopAnimations } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import AWCElement from '../../internal/awc-element.js';
import AWCFormatBytes from '../format-bytes/format-bytes.component.js';
import AWCIconButton from '../icon-button/icon-button.component.js';
import AWCProgressBar from '../progress-bar/progress-bar.component.js';
import styles from './file-upload-item.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary File items represent an uploaded file and provides information about file type, file size etc.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-file-upload-item--documentation
 * @status experimental
 * @since 1.0
 *
 * @dependency awc-format-bytes
 * @dependency awc-progress-bar
 * @dependency awc-icon-button
 *
 * @event awc-show - Emitted when the item is added.
 * @event awc-after-show - Emitted after the item is added and all animations are complete.
 * @event awc-hide - Emitted when the item is removed.
 * @event awc-after-hide - Emitted after the item is removed and all animations are complete.
 *
 * @slot - The default slot.
 * @slot image - The image or icon slot.
 * @slot error - The error slot.
 * @slot close-button - The close button slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart image - The icon wrapper.
 * @csspart label - The file name wrapper.
 * @csspart error - The error wrapper.
 * @csspart close-button - The close button, an `<awc-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 *
 * @animation file-upload-item.show - The animation to use when showing the file item.
 * @animation file-upload-item.hide - The animation to use when hiding the file item.
 */
export default class AWCFileUploadItem extends AWCElement {
  static styles: CSSResultGroup = styles;
  static dependencies = {
    'awc-format-bytes': AWCFormatBytes,
    'awc-progress-bar': AWCProgressBar,
    'awc-icon-button': AWCIconButton
  };
  private readonly hasSlotController = new HasSlotController(this, 'image', 'suffix');
  private readonly localize = new LocalizeController(this);

  @query('[part="base"]') base: HTMLElement;

  /** Draws the item in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** The current progress, 0 to 100. Only respects is loading prop is true. */
  @property({ type: Number, reflect: true }) progress: number;

  /** A custom label for the progress bar's aria label. Only respects if loading prop is true. */
  @property() label: string;

  /** The locale to render the component in. */
  @property() lang: string;

  /** Draws the item in a error state. */
  @property({ type: Boolean, reflect: true }) error = false;

  /** Makes the item closable. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @property() value = '';

  /** The size of the file in bytes as a read-only 64-bit integer. */
  @property({ type: Number, reflect: true }) size: number;

  /** Indicates whether or not the file list item is hidden. */
  @property({ type: Boolean, reflect: true }) hidden = false;

  firstUpdated() {
    this.base.hidden = this.hidden;
  }

  @watch('hidden', { waitUntilFirstUpdate: true })
  async handleHiddenChange() {
    if (!this.hidden) {
      // Show
      this.emit('awc-show');

      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, 'file-upload-item.show', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);

      this.emit('awc-after-show');
    } else {
      // Hide
      this.emit('awc-hide');

      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, 'file-upload-item.hide', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;

      this.emit('awc-after-hide');
    }
  }

  /** Shows the item. */
  async show() {
    if (!this.hidden) {
      return undefined;
    }

    this.hidden = false;
    return waitForEvent(this, 'awc-after-show');
  }

  /** Hides the item */
  async hide() {
    if (this.hidden) {
      return undefined;
    }

    this.hidden = true;
    return waitForEvent(this, 'awc-after-hide');
  }

  private handleCloseClick() {
    this.hide();
  }

  private handleTriggerKeyUp(event: KeyboardEvent) {
    // Prevent space from triggering a click event in Firefox
    if (event.key === '\xA0 ') {
      event.preventDefault();
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'file-upload-item': true,
          'file-upload-item--hidden': this.hidden,
          'file-upload-item--closable': this.closable,
          'file-upload-item--error': this.error,
          'file-upload-item--has-size': this.size,
          'file-upload-item--is-loading': this.loading,
          'file-upload-item--has-image': this.hasSlotController.test('image')
        })}
      >
        <span class="file-upload-item__content">
          <span part="image" class="file-upload-item__image">
            <slot name="image"></slot>
          </span>

          <span part="label" class="file-upload-item__label">
            <div class="file-upload-item__label__content">
              <slot></slot>
              ${this.size
                ? html`<awc-format-bytes value="${this.size}" class="file-upload-item__label__size"></awc-format-bytes>`
                : ''}
            </div>
            <div part="error" class="file-upload-item__label__error">
              <slot name="error"></slot>
            </div>
          </span>
        </span>

        ${this.loading || (ifDefined(this.progress) && this.progress === 100)
          ? html`
              <span class="file-upload-item__progress__container">
                ${!ifDefined(this.progress) || (ifDefined(this.progress) && this.progress !== 100)
                  ? html`<awc-progress-ring
                      class="file-upload-item__progress"
                      ?indeterminate=${this.progress === undefined}
                      value=${ifDefined(this.progress)}
                      label=${ifDefined(this.label)}
                    ></awc-progress-ring>`
                  : ''}
                ${ifDefined(this.progress) && this.progress === 100
                  ? html`<awc-icon class="file-upload-item__progress--completed" name="check-circle-fill"></awc-icon>`
                  : ''}
              </span>
            `
          : ''}
        ${this.closable && !(this.loading || (ifDefined(this.progress) && this.progress === 100))
          ? html`
              <span
                class="file-upload-item__close-button"
                @click=${this.handleCloseClick}
                @keyup=${this.handleTriggerKeyUp}
              >
                <slot name="close-button">
                  <awc-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    name="xmark"
                    library="system"
                  ></awc-icon-button>
                </slot>
              </span>
            `
          : ''}
      </div>
    `;
  }
}

setDefaultAnimation('file-upload-item.show', {
  keyframes: [
    { opacity: 0, transform: 'scale(0.8)' },
    { opacity: 1, transform: 'scale(1)' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('file-upload-item.hide', {
  keyframes: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.8)' }
  ],
  options: { duration: 250, easing: 'ease' }
});
