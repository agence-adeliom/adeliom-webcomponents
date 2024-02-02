import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --border-radius: var(--awc-border-radius-medium);
    --border-width: var(--awc-input-border-width);
    --border-style: solid;
    --list-border-style: solid;
    display: block;
  }

  .file-upload__label {
    background-color: var(--awc-background-color);
    padding: var(--awc-spacing-3x-large);
    border-width: var(--border-width);
    border-style: var(--border-style);
    border-color: var(--awc-color-neutral-300);
    border-radius: var(--border-radius);
    color: var(--awc-text-paragraph-color);
    line-height: var(--awc-line-height-dense);
    text-align: center;
  }

  .file-upload__label.file-upload__label--has-file {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  .file-upload__label__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--awc-spacing-medium);
  }

  .file-upload--dragged:not(.file-upload--disabled) .file-upload__label {
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-200);
  }

  .file-upload__label__container__image {
    font-size: 2rem;
    color: var(--awc-color-primary-600);
  }

  .file-upload--disabled .file-upload__label,
  .file-upload--no-drag .file-upload__label {
    cursor: no-drop;
  }

  .file-upload--disabled .file-upload__label {
    color: var(--awc-color-neutral-500);
  }

  .file-upload--disabled .file-upload__label__container__image {
    color: var(--awc-color-neutral-300);
  }

  .file-upload__file-items {
    display: flex;
    flex-direction: column;
    background-color: var(--awc-background-color);
    gap: var(--awc-spacing-small);
    margin-top: calc(var(--border-width) * -1);
    padding: var(--awc-spacing-large);
    border-width: var(--border-width);
    border-style: var(--list-border-style);
    border-color: var(--awc-color-neutral-300);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }

  .file-upload--button-only .file-upload__file-items,
  .file-upload--custom-content .file-upload__file-items {
    margin-top: var(--awc-spacing-medium);
    padding: 0;
    border: 0;
  }

  /*
  .file-upload__file-items {
    display: flex;
    flex-direction: column;
    gap: var(--awc-spacing-small);
    margin-top: var(--awc-spacing-medium);
  }
   */

  .file-upload__file-items .file-upload__file-items__header {
    font-size: var(--awc-font-size-small);
    line-height: var(--awc-line-height-dense);
    color: var(--awc-text-title-color);
  }

  .file-upload--error .file-upload__label {
    border-color: var(--awc-color-danger-600);
    color: var(--awc-color-danger-600);
  }

  .file-upload--error .file-upload__label__container__image {
    color: var(--awc-color-danger-600);
  }

  /* Help text */
  .file-upload .file-upload__help-text {
    display: none;
  }

  .file-upload--has-help-text .file-upload__help-text {
    display: block;
    color: var(--awc-color-neutral-600);
    margin-top: var(--awc-spacing-x-small);
    font-size: var(--awc-font-size-small);
  }

  .file-upload--button-only.file-upload--has-help-text .file-upload__help-text {
    margin-top: var(--awc-spacing-x-small);
  }
`;
