/* eslint-disable lit/binding-positions, lit/no-invalid-html */
import { classMap } from 'lit/directives/class-map.js';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './typography.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Allow to render content in différent type and tag.
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-typography--docs
 * @status stable
 * @since 1.0
 *
 * @slot - The typography's content.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty [--font-family=var(--awc-font-sans)] - The font family.
 * @cssproperty [--font-weight=var(--awc-font-weight-normal)] - The font weight.
 * @cssproperty [--font-size=var(--awc-font-size-base)] - The font size.
 * @cssproperty [--color=current] - The text colors.
 *
 */
export default class AWCTypography extends AWCElement {
  static styles: CSSResultGroup = styles;

  /** The typography's render type. */
  @property() type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'content' = 'content';

  /** The typography's render tag. */
  @property() renderAs: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span' | string | undefined = undefined;

  /** The set root margin to `0`. */
  @property({ type: Boolean, reflect: true, attribute: 'no-margin' }) noMargin?: boolean;

  /** The typography's transform. */
  @property() transform:
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'full-width'
    | 'full-size-kana'
    | undefined = undefined;

  render() {
    const renderAs =
      this.renderAs ?? (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(this.type) ? this.type : 'p') ?? 'p';

    return html`<${unsafeStatic(renderAs)}
      part="base"
      style=${styleMap({
        textTransform: this.transform
      })}
      class=${classMap({
        typography: true,
        'typography--no-margin': !!this.noMargin,
        'typography--heading': ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(this.type),
        'typography--heading1': this.type === 'h1',
        'typography--heading2': this.type === 'h2',
        'typography--heading3': this.type === 'h3',
        'typography--heading4': this.type === 'h4',
        'typography--heading5': this.type === 'h5',
        'typography--heading6': this.type === 'h6',
        'typography--subtitle': this.type === 'subtitle',
        'typography--content': this.type === 'content'
      })}
    >
      <slot></slot>
    </${unsafeStatic(renderAs)}>`;
  }
}
