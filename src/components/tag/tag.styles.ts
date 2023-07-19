import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--awc-color-primary-50);
    border-color: var(--awc-color-primary-200);
    color: var(--awc-color-primary-800);
  }

  .tag--primary:active > awc-icon-button {
    color: var(--awc-color-primary-600);
  }

  .tag--secondary {
    background-color: var(--awc-color-secondary-50);
    border-color: var(--awc-color-secondary-200);
    color: var(--awc-color-secondary-800);
  }

  .tag--secondary:active > awc-icon-button {
    color: var(--awc-color-secondary-600);
  }

  .tag--tertiary {
    background-color: var(--awc-color-tertiary-50);
    border-color: var(--awc-color-tertiary-200);
    color: var(--awc-color-tertiary-800);
  }

  .tag--tertiary:active > awc-icon-button {
    color: var(--awc-color-tertiary-600);
  }

  .tag--success {
    background-color: var(--awc-color-success-50);
    border-color: var(--awc-color-success-200);
    color: var(--awc-color-success-800);
  }

  .tag--success:active > awc-icon-button {
    color: var(--awc-color-success-600);
  }

  .tag--neutral {
    background-color: var(--awc-color-neutral-50);
    border-color: var(--awc-color-neutral-200);
    color: var(--awc-color-neutral-800);
  }

  .tag--neutral:active > awc-icon-button {
    color: var(--awc-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--awc-color-warning-50);
    border-color: var(--awc-color-warning-200);
    color: var(--awc-color-warning-800);
  }

  .tag--warning:active > awc-icon-button {
    color: var(--awc-color-warning-600);
  }

  .tag--danger {
    background-color: var(--awc-color-danger-50);
    border-color: var(--awc-color-danger-200);
    color: var(--awc-color-danger-800);
  }

  .tag--danger:active > awc-icon-button {
    color: var(--awc-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--awc-button-font-size-small);
    height: calc(var(--awc-input-height-small) * 0.8);
    line-height: calc(var(--awc-input-height-small) - var(--awc-input-border-width) * 2);
    border-radius: var(--awc-input-border-radius-small);
    padding: 0 var(--awc-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--awc-button-font-size-medium);
    height: calc(var(--awc-input-height-medium) * 0.8);
    line-height: calc(var(--awc-input-height-medium) - var(--awc-input-border-width) * 2);
    border-radius: var(--awc-input-border-radius-medium);
    padding: 0 var(--awc-spacing-small);
  }

  .tag--large {
    font-size: var(--awc-button-font-size-large);
    height: calc(var(--awc-input-height-large) * 0.8);
    line-height: calc(var(--awc-input-height-large) - var(--awc-input-border-width) * 2);
    border-radius: var(--awc-input-border-radius-large);
    padding: 0 var(--awc-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--awc-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--awc-border-radius-pill);
  }
`;
