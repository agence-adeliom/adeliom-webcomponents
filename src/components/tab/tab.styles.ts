import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-semibold);
    border-radius: var(--awc-border-radius-medium);
    color: currentColor;
    padding: var(--awc-spacing-medium) var(--awc-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--awc-color-primary-800);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--awc-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: calc(-1 * var(--awc-focus-ring-width) - var(--awc-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--awc-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--awc-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--awc-font-size-small);
    margin-inline-start: var(--awc-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--awc-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
