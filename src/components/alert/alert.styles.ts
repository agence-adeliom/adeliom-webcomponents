import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--awc-panel-background-color);
    border-radius: var(--awc-border-radius-medium);
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-normal);
    line-height: 1.6;
    color: var(--awc-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-large);
    padding-inline-start: var(--awc-spacing-large);
  }

  .alert--primary {
    background-color: var(--awc-color-primary-200);
  }

  .alert--primary .alert__icon {
    color: var(--awc-color-primary-600);
  }

  .alert--secondary {
    background-color: var(--awc-color-secondary-200);
  }

  .alert--secondary .alert__icon {
    color: var(--awc-color-secondary-600);
  }

  .alert--tertiary {
    background-color: var(--awc-color-tertiary-200);
  }

  .alert--tertiary .alert__icon {
    color: var(--awc-color-tertiary-600);
  }

  .alert--success {
    background-color: var(--awc-color-success-200);
  }

  .alert--success .alert__icon {
    color: var(--awc-color-success-600);
  }

  .alert--neutral {
    background-color: var(--awc-color-neutral-200);
  }

  .alert--neutral .alert__icon {
    color: var(--awc-color-neutral-600);
  }

  .alert--warning {
    background-color: var(--awc-color-warning-200);
  }

  .alert--warning .alert__icon {
    color: var(--awc-color-warning-600);
  }

  .alert--danger {
    background-color: var(--awc-color-danger-200);
  }

  .alert--danger .alert__icon {
    color: var(--awc-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--awc-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-medium);
    padding-inline-end: var(--awc-spacing-medium);
  }
`;
