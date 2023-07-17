import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import AWCElement from '../../internal/awc-element.js';
import styles from './visually-hidden.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation https://awc.a-dev.cloud/components/visually-hidden
 * @status stable
 * @since 1.0
 *
 * @slot - The content to be visually hidden.
 */
@customElement('awc-visually-hidden')
export default class AWCVisuallyHidden extends AWCElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'awc-visually-hidden': AWCVisuallyHidden;
  }
}
