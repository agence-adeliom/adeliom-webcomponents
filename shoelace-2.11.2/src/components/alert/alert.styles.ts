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
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
    border-top-width: calc(var(--awc-panel-border-width) * 3);
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
    border-top-color: var(--awc-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--awc-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--awc-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--awc-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--awc-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--awc-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--awc-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--awc-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--awc-color-danger-600);
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
