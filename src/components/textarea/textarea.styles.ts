import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles.js';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--awc-input-font-family);
    font-weight: var(--awc-input-font-weight);
    line-height: var(--awc-line-height-normal);
    letter-spacing: var(--awc-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) border,
      var(--awc-transition-fast) box-shadow,
      var(--awc-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--awc-input-background-color);
    border: solid var(--awc-input-border-width) var(--awc-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--awc-input-background-color-hover);
    border-color: var(--awc-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--awc-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--awc-input-background-color-focus);
    border-color: var(--awc-input-border-color-focus);
    color: var(--awc-input-color-focus);
    box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--awc-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--awc-input-background-color-disabled);
    border-color: var(--awc-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--awc-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--awc-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--awc-input-filled-background-color);
    color: var(--awc-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--awc-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--awc-input-filled-background-color-focus);
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--awc-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--awc-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--awc-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--awc-input-border-radius-small);
    font-size: var(--awc-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--awc-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--awc-input-border-radius-medium);
    font-size: var(--awc-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--awc-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--awc-input-border-radius-large);
    font-size: var(--awc-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--awc-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;
