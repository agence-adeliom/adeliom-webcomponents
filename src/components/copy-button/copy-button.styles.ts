import { css } from 'lit';

export default css`
  :host {
    --error-color: var(--awc-color-danger-600);
    --success-color: var(--awc-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--awc-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--awc-spacing-xsmall);
    cursor: pointer;
    transition: var(--awc-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;
