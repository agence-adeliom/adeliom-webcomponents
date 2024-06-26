import { css } from 'lit';

export default css`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-semibold);
    color: var(--awc-color-neutral-600);
    line-height: var(--awc-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--awc-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--awc-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--awc-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--awc-color-primary-800);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--awc-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--awc-spacing-xsmall);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--awc-spacing-xsmall);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--awc-spacing-xsmall);
    user-select: none;
    -webkit-user-select: none;
  }
`;
