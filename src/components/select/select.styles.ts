import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--awc-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--awc-input-font-family);
    font-weight: var(--awc-input-font-weight);
    letter-spacing: var(--awc-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) border,
      var(--awc-transition-fast) box-shadow,
      var(--awc-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--awc-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--awc-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--awc-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--awc-spacing-2xsmall);
  }

  .select__tags::slotted(awc-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(awc-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--awc-input-background-color-default);
    border: solid var(--awc-input-border-width) var(--awc-input-border-color-default);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--awc-input-background-color-disabled);
    border-color: var(--awc-input-border-color-disabled);
    color: var(--awc-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--awc-input-background-color-focus);
    border-color: var(--awc-input-border-color-focus);
    box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--awc-input-filled-background-color);
    color: var(--awc-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--awc-input-filled-background-color);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--awc-input-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--awc-input-filled-background-color);
    outline: var(--awc-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--awc-input-border-radius-small);
    font-size: var(--awc-input-font-size-small);
    min-height: var(--awc-input-height-small);
    padding-block: 0;
    padding-inline: var(--awc-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--awc-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--awc-input-border-radius-medium);
    font-size: var(--awc-input-font-size-medium);
    min-height: var(--awc-input-height-medium);
    padding-block: 0;
    padding-inline: var(--awc-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--awc-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--awc-input-border-radius-large);
    font-size: var(--awc-input-font-size-large);
    min-height: var(--awc-input-height-large);
    padding-block: 0;
    padding-inline: var(--awc-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--awc-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--awc-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--awc-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--awc-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--awc-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--awc-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--awc-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--awc-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--awc-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--awc-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    box-shadow: var(--awc-shadow-large);
    background: var(--awc-panel-background-color);
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
    border-radius: var(--awc-border-radius-medium);
    padding-block: var(--awc-spacing-xsmall);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(awc-divider) {
    --spacing: var(--awc-spacing-xsmall);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-semibold);
    color: var(--awc-color-neutral-500);
    padding-block: var(--awc-spacing-xsmall);
    padding-inline: var(--awc-spacing-xlarge);
  }
`;
