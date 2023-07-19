import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot.js';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './card.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Cards can be used to group related subjects in a container.
 * @documentation https://awc.a-dev.cloud/components/card
 * @status stable
 * @since 1.0
 *
 * @slot - The card's main content.
 * @slot header - An optional header for the card.
 * @slot footer - An optional footer for the card.
 * @slot image - An optional image to render at the start of the card.
 *
 * @csspart base - The component's base wrapper.
 * @csspart image - The container that wraps the card's image.
 * @csspart header - The container that wraps the card's header.
 * @csspart body - The container that wraps the card's main content.
 * @csspart footer - The container that wraps the card's footer.
 *
 * @cssproperty --border-color - The card's border color, including borders that occur inside the card.
 * @cssproperty --border-radius - The border radius for the card's edges.
 * @cssproperty --border-width - The width of the card's borders.
 * @cssproperty --padding - The padding to use for the card's sections.
 */
@customElement('awc-card')
export default class AWCCard extends AWCElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, 'footer', 'header', 'image');

  /** Indicates if card has border. */
  @property({ type: Boolean, reflect: true }) bordered?: boolean = false;

  /** Indicates if card has shadow. */
  @property({ type: Boolean, reflect: true }) shadow?: boolean = false;

  /** Indicates if card is horizontal. */
  @property({ type: Boolean, reflect: true }) horizontal?: boolean = false;

  /** Indicates if card is inner. */
  @property({ type: Boolean, reflect: true }) inner?: boolean = false;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href = '';

  /** Tells the browser where to open the link. Only used when `href` is present. */
  @property() target: '_blank' | '_parent' | '_self' | '_top';

  /**
   * When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
   * default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
   * specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
   * setting the attribute to an empty string or a value of your choice, respectively.
   */
  @property() rel = 'noreferrer noopener';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  @property() download?: string;

  private isLink() {
    return this.href ? true : false;
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`div`;

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part="base"
        class=${classMap({
          card: true,
          'card--is-horizontal': !!ifDefined(this.horizontal),
          'card--is-inner': !!ifDefined(this.inner),
          'card--has-border': !!ifDefined(this.bordered),
          'card--has-shadow': !!ifDefined(this.shadow),
          'card--has-footer': this.hasSlotController.test('footer'),
          'card--has-image': this.hasSlotController.test('image'),
          'card--has-header': this.hasSlotController.test('header')
        })}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink ? this.rel : undefined)}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <div class="card__wrapper">
          <slot name="header" part="header" class="card__header"></slot>
          <slot part="body" class="card__body"></slot>
          <slot name="footer" part="footer" class="card__footer"></slot>
        </div>
      </${tag}>
    `;
    /* eslint-enable lit/no-invalid-html */
    /* eslint-enable lit/binding-positions */
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'awc-card': AWCCard;
  }
}
