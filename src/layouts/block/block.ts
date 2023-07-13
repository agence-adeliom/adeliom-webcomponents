import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './block.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the layout's intended use.
 * @documentation https://awc.a-dev.cloud/layout/block
 * @status experimental
 * @since 2.0
 *
 * @dependency awc-example
 *
 * @event awc-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The layout's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('awc-block')
export default class AWCBlock extends AWCElement {
  static styles: CSSResultGroup = styles;

  /** An example attribute. */
  @property() attr = 'example';

  @watch('example')
  handleExampleChange() {
    // do something
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'awc-block': AWCBlock;
  }
}
