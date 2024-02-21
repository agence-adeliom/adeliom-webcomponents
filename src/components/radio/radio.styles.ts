import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--awc-input-font-family);
    font-size: var(--awc-input-font-size-medium);
    font-weight: var(--awc-input-font-weight);
    color: var(--awc-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--awc-toggle-size-small);
    font-size: var(--awc-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--awc-toggle-size-medium);
    font-size: var(--awc-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--awc-toggle-size-large);
    font-size: var(--awc-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--awc-input-border-width) var(--awc-input-border-color);
    border-radius: 50%;
    background-color: var(--awc-input-background-color);
    color: transparent;
    transition:
      var(--awc-transition-fast) border-color,
      var(--awc-transition-fast) background-color,
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--awc-input-border-color-hover);
    background-color: var(--awc-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-600);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--awc-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`;
