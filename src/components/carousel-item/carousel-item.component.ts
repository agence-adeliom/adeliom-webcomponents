import { html } from 'lit';
import AWCElement from '../../internal/awc-element.js';
import styles from './carousel-item.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A carousel item represent a slide within a [carousel](?path=/docs/components-carousel--docs).
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-carousel-item--docs
 * @since 1.0
 * @status experimental
 *
 * @slot - The carousel item's content..
 *
 * @cssproperty --aspect-ratio - The slide's aspect ratio. Inherited from the carousel by default.
 *
 */
export default class AWCCarouselItem extends AWCElement {
  static styles: CSSResultGroup = styles;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
  }

  render() {
    return html` <slot></slot> `;
  }
}
