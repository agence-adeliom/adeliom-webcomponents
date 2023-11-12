import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    /* For better Developer Experience, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .file-upload-item {
    position: relative;
    display: flex;
    background-color: var(--awc-panel-background-color);
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
    border-radius: var(--awc-border-radius-medium);
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    line-height: var(--awc-line-height-normal);
    color: var(--awc-color-neutral-700);
    margin: inherit;
  }

  .file-upload-item__content {
    position: relative;
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .file-upload-item:not(.file-upload-item--has-image) .file-upload-item__image,
  .file-upload-item:not(.file-upload-item--closable) .file-upload-item__close-button {
    display: none;
  }

  .file-upload-item--is-loading .file-upload-item__image,
  .file-upload-item--is-loading .file-upload-item__label {
    //visibility: hidden;
  }

  .file-upload-item__image {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-2x-large);
    padding-left: var(--awc-spacing-large);
    color: var(--awc-color-primary-600);
  }

  .file-upload-item__progress__container {
    display: flex;
    padding-right: var(--awc-spacing-medium);
    align-items: center;
    color: var(--awc-color-primary-600);
    font-size: var(--awc-font-size-2x-large);
  }

  .file-upload-item__progress {
    flex: 1;
    --size: 1.75rem
  }

  .file-upload-item__label {
    flex: 1 1 auto;
    padding: var(--awc-spacing-medium);
    gap: var(--awc-spacing-3x-small);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .file-upload-item__label .file-upload-item__label__content {
    flex: 1 1 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .file-upload-item__label__size {
    font-size: var(--awc-font-size-small);
    line-height: var(--awc-line-height-dense);
  }

  .file-upload-item__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-large);
    padding-right: var(--awc-spacing-medium);
  }

  .file-upload-item .file-upload-item__label__error{
    display: none;
    font-size: var(--awc-font-size-small);
  }

  .file-upload-item--error {
    border-color: var(--awc-color-danger-600);
  }

  .file-upload-item--error .file-upload-item__label__error {
    display: block;
  }

  .file-upload-item--error .file-upload-item__label__content {
    color: var(--awc-text-paragraph-color);
  }

  .file-upload-item--error,
  .file-upload-item--error .file-upload-item__image {
    color: var(--awc-color-danger-600);
  }
`;
