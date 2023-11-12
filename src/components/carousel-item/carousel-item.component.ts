import { html } from 'lit';
import AWCElement from '../../internal/awc-element.js';
import styles from './carousel-item.styles.js';
import { property } from 'lit/decorators.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A carousel item represent a slide within a [carousel](?path=/docs/components-carousel--docs).
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-carousel-item--docs
 * @since 1.0
 * @status experimental
 *
 * @slot - The carousel item's content.
 * @slot lazy-preloader - Optional lazy preloader element.
 *
 * @csspart preloader - The carousel item's lazy preloader wrapper.
 *
 * @cssproperty --aspect-ratio - The slide's aspect ratio. Inherited from the carousel by default.
 *
 */
export default class AWCCarouselItem extends AWCElement {
  static styles: CSSResultGroup = styles;

  /**
   * If you use lazy loading images, it requires the lazy preloader element to be added to the slide.
   * `awc-carousel-item` component can do this automatically by adding `lazy="true"` attribute:
   **/
  @property({ type: Boolean, reflect: true }) lazy = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
    this.classList.add('carousel__slide');
  }

  render() {
    return html`
      <slot></slot>
      ${this.lazy ? html`<div part="preloader" class="carousel__lazy-preloader" ><slot name="lazy-preloader"></slot></div>` : ''}
    `;
  }
}
