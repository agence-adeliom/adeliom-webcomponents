import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    line-height: var(--awc-line-height-normal);
    letter-spacing: var(--awc-letter-spacing-normal);
    color: var(--awc-color-neutral-700);
    padding: var(--awc-spacing-x-small) var(--awc-spacing-medium) var(--awc-spacing-x-small) var(--awc-spacing-x-small);
    transition: var(--awc-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--awc-line-height-normal);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--awc-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--awc-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--awc-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;
