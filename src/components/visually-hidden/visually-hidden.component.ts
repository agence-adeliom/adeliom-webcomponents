import { html } from 'lit';
import AWCElement from '../../internal/awc-element.js';
import styles from './visually-hidden.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-visually-hidden--docs
 * @status stable
 * @since 1.0
 *
 * @slot - The content to be visually hidden.
 */
export default class AWCVisuallyHidden extends AWCElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}
