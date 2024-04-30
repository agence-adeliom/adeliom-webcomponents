import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query } from 'lit/decorators.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import AWCElement from '../../internal/awc-element.js';
import AWCIcon from '../icon/icon.component.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './details.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Details show a brief summary and expand to show additional content.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-details--documentation
 * @status stable
 * @since 1.0
 *
 * @dependency awc-icon
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<awc-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<awc-icon>`.
 *
 * @event awc-show - Emitted when the details opens.
 * @event awc-after-show - Emitted after the details opens and all animations are complete.
 * @event awc-hide - Emitted when the details closes.
 * @event awc-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart body - The details content wrapper.
 * @csspart content - The details content.
 *
 * @cssproperty [--padding=var(--awc-spacing-medium)] - The details's padding.
 * @cssproperty [--border-width=1px] - The details's border width.
 * @cssproperty [--border-radius=var(--awc-card-border-radius)] - The details's border radius.
 * @cssproperty [--border-color=var(--awc-color-neutral-200)] - The details's border color.
 * @cssproperty [--background-color=transparent] - The details's background color.
 *
 * @animation details.show - The animation to use when showing details. You can use `height: auto` with this animation.
 * @animation details.hide - The animation to use when hiding details. You can use `height: auto` with this animation.
 */
export default class AWCDetails extends AWCElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  static dependencies = {
    'awc-icon': AWCIcon
  };

  private readonly localize = new LocalizeController(this);

  @query('.details') details: HTMLDetailsElement;
  @query('.details__header') header: HTMLElement;
  @query('.details__body') body: HTMLElement;
  @query('.details__expand-icon-slot') expandIconSlot: HTMLSlotElement;

  detailsObserver: MutationObserver;

  /**
   * Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  @property() summary: string;

  /** Disables the details so it can't be toggled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  firstUpdated() {
    this.body.style.height = this.open ? 'auto' : '0';
    if (this.open) {
      this.details.open = true;
    }

    this.detailsObserver = new MutationObserver(changes => {
      for (const change of changes) {
        if (change.type === 'attributes' && change.attributeName === 'open') {
          if (this.details.open) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    });
    this.detailsObserver.observe(this.details, { attributes: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.detailsObserver.disconnect();
  }

  private handleSummaryClick(event: MouseEvent) {
    event.preventDefault();

    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }

  private handleSummaryKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      this.details.open = true;
      // Show
      const slShow = this.emit('awc-show', { cancelable: true });
      if (slShow.defaultPrevented) {
        this.open = false;
        this.details.open = false;
        return;
      }

      await stopAnimations(this.body);

      const { keyframes, options } = getAnimation(this, 'details.show', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      this.emit('awc-after-show');
    } else {
      // Hide
      const awcHide = this.emit('awc-hide', { cancelable: true });
      if (awcHide.defaultPrevented) {
        this.details.open = true;
        this.open = true;
        return;
      }

      await stopAnimations(this.body);

      const { keyframes, options } = getAnimation(this, 'details.hide', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      this.details.open = false;
      this.emit('awc-after-hide');
    }
  }

  /** Shows the details. */
  async show() {
    if (this.open || this.disabled) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'awc-after-show');
  }

  /** Hides the details */
  async hide() {
    if (!this.open || this.disabled) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'awc-after-hide');
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <details
        part="base"
        class=${classMap({
          details: true,
          'details--open': this.open,
          'details--disabled': this.disabled,
          'details--rtl': isRtl
        })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="content"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <awc-icon library="system" name="chevron-down"></awc-icon>
            </slot>
            <slot name="collapse-icon">
              <awc-icon library="system" name="chevron-down"></awc-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" part="body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
  }
}

setDefaultAnimation('details.show', {
  keyframes: [
    { height: '0', opacity: '0' },
    { height: 'auto', opacity: '1' }
  ],
  options: { duration: 250, easing: 'linear' }
});

setDefaultAnimation('details.hide', {
  keyframes: [
    { height: 'auto', opacity: '1' },
    { height: '0', opacity: '0' }
  ],
  options: { duration: 250, easing: 'linear' }
});
