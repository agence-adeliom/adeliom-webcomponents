import { html } from 'lit';
import AWCElement from '../../internal/awc-element.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './visually-hidden.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-visually-hidden--documentation
 * @status stable
 * @since 1.0
 *
 * @slot - The content to be visually hidden.
 */
export default class AWCVisuallyHidden extends AWCElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  render() {
    return html` <slot></slot> `;
  }
}
