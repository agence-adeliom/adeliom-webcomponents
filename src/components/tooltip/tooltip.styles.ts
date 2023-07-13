import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--awc-tooltip-arrow-size);
    --arrow-color: var(--awc-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--awc-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--awc-tooltip-border-radius);
    background-color: var(--awc-tooltip-background-color);
    font-family: var(--awc-tooltip-font-family);
    font-size: var(--awc-tooltip-font-size);
    font-weight: var(--awc-tooltip-font-weight);
    line-height: var(--awc-tooltip-line-height);
    color: var(--awc-tooltip-color);
    padding: var(--awc-tooltip-padding);
    pointer-events: none;
  }
`;
