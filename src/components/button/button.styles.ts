import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-radius: var(--awc-button-border-radius);
    border-width: var(--awc-input-border-width);
    font-family: var(--awc-input-font-family);
    font-weight: var(--awc-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--awc-transition-medium) background-color,
      var(--awc-transition-medium) color,
      var(--awc-transition-medium) border,
      var(--awc-transition-medium) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(awc-icon) {
    vertical-align: -2px;
  }

  /*
   * Colored buttons
   */

  /* Default */
  .button--colored.button--default {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-700);
  }

  .button--colored.button--default:hover:not(.button--disabled) {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--default:active:not(.button--disabled) {
    background-color: var(--awc-color-primary-800);
    border-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Primary */
  .button--colored.button--primary {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--primary:hover:not(.button--disabled) {
    background-color: var(--awc-color-primary-800);
    border-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--primary:active:not(.button--disabled) {
    background-color: var(--awc-color-primary-950);
    border-color: var(--awc-color-primary-950);
    color: var(--awc-color-neutral-0);
  }

  /* Secondary */
  .button--colored.button--secondary {
    background-color: var(--awc-color-secondary-600);
    border-color: var(--awc-color-secondary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--secondary:hover:not(.button--disabled) {
    background-color: var(--awc-color-secondary-800);
    border-color: var(--awc-color-secondary-800);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--secondary:active:not(.button--disabled) {
    background-color: var(--awc-color-secondary-950);
    border-color: var(--awc-color-secondary-950);
    color: var(--awc-color-neutral-0);
  }

  /* Tertiary */
  .button--colored.button--tertiary {
    background-color: var(--awc-color-tertiary-600);
    border-color: var(--awc-color-tertiary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--tertiary:hover:not(.button--disabled) {
    background-color: var(--awc-color-tertiary-800);
    border-color: var(--awc-color-tertiary-800);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--tertiary:active:not(.button--disabled) {
    background-color: var(--awc-color-tertiary-950);
    border-color: var(--awc-color-tertiary-950);
    color: var(--awc-color-neutral-0);
  }

  /*
   * Colored buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--awc-color-primary-800);
    border-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--awc-button-primary-background-color-default, var(--awc-color-primary-600));
    border-color: var(
      --awc-button-primary-stroke-default,
      var(--awc-button-primary-background-color-default, var(--awc-color-primary-600))
    );
    color: var(--awc-button-primary-color-default, var(--awc-color-neutral-0));
  }

  .button--standard.button--primary:hover:not(.button--disabled),
  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--awc-button-primary-background-color-hover, var(--awc-color-primary-800));
    border-color: var(
      --awc-button-primary-stroke-hover,
      var(--awc-button-primary-background-color-hover, var(--awc-color-primary-800))
    );
    color: var(--awc-button-primary-color-hover, var(--awc-color-neutral-0));
  }

  /* Secondary */
  .button--standard.button--secondary {
    background-color: var(--awc-button-secondary-background-color-default, var(--awc-color-secondary-600));
    border-color: var(
      --awc-button-secondary-stroke-default,
      var(--awc-button-secondary-background-color-default, var(--awc-color-secondary-600))
    );
    color: var(--awc-button-secondary-color-default, var(--awc-color-neutral-0));
  }

  .button--standard.button--secondary:hover:not(.button--disabled),
  .button--standard.button--secondary:active:not(.button--disabled) {
    background-color: var(--awc-button-secondary-background-color-hover, var(--awc-color-secondary-800));
    border-color: var(
      --awc-button-secondary-stroke-hover,
      var(--awc-button-secondary-background-color-hover, var(--awc-color-secondary-800))
    );
    color: var(--awc-button-secondary-color-hover, var(--awc-color-neutral-0));
  }

  /* Tertiary */
  .button--standard.button--tertiary {
    background-color: var(--awc-button-tertiary-background-color-default, var(--awc-color-tertiary-600));
    border-color: var(
      --awc-button-tertiary-stroke-default,
      var(--awc-button-tertiary-background-color-default, var(--awc-color-tertiary-600))
    );
    color: var(--awc-button-tertiary-color-default, var(--awc-color-neutral-0));
  }

  .button--standard.button--tertiary:hover:not(.button--disabled),
  .button--standard.button--tertiary:active:not(.button--disabled) {
    background-color: var(--awc-button-tertiary-background-color-hover, var(--awc-color-tertiary-800));
    border-color: var(
      --awc-button-tertiary-stroke-hover,
      var(--awc-button-tertiary-background-color-hover, var(--awc-color-tertiary-800))
    );
    color: var(--awc-button-tertiary-color-hover, var(--awc-color-neutral-0));
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--awc-color-success-600);
    border-color: var(--awc-color-success-600);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--awc-color-success-800);
    border-color: var(--awc-color-success-800);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--awc-color-success-950);
    border-color: var(--awc-color-success-950);
    color: var(--awc-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--awc-color-neutral-600);
    border-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--awc-color-neutral-800);
    border-color: var(--awc-color-neutral-800);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--awc-color-neutral-950);
    border-color: var(--awc-color-neutral-950);
    color: var(--awc-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--awc-color-warning-600);
    border-color: var(--awc-color-warning-600);
    color: var(--awc-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--awc-color-warning-800);
    border-color: var(--awc-color-warning-800);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--awc-color-warning-950);
    border-color: var(--awc-color-warning-950);
    color: var(--awc-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--awc-color-danger-600);
    border-color: var(--awc-color-danger-600);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--awc-color-danger-800);
    border-color: var(--awc-color-danger-800);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--awc-color-danger-950);
    border-color: var(--awc-color-danger-950);
    color: var(--awc-color-neutral-0);
  }

  /* Default */
  .button--standard.button--ghost {
    background-color: transparent;
    border-color: transparent;
    color: currentColor;
  }

  .button--standard.button--ghost:hover:not(.button--disabled) {
    background-color: var(--awc-color-neutral-50);
    border-color: var(--awc-color-neutral-50);
    color: var(--awc-color-neutral-700);
  }

  .button--standard.button--ghost:active:not(.button--disabled) {
    background-color: var(--awc-color-neutral-100);
    border-color: var(--awc-color-neutral-100);
    color: var(--awc-color-neutral-700);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--awc-color-neutral-300);
    color: currentColor;
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--awc-color-primary-800);
    background-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--awc-color-primary-600);
    color: var(--awc-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-primary-800);
    color: var(--awc-color-primary-800);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--awc-color-primary-800);
    background-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Secondary */
  .button--outline.button--secondary {
    border-color: var(--awc-color-secondary-600);
    color: var(--awc-color-secondary-600);
  }

  .button--outline.button--secondary:hover:not(.button--disabled),
  .button--outline.button--secondary.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-secondary-800);
    color: var(--awc-color-secondary-800);
  }

  .button--outline.button--secondary:active:not(.button--disabled) {
    border-color: var(--awc-color-secondary-800);
    background-color: var(--awc-color-secondary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Tertiary */
  .button--outline.button--tertiary {
    border-color: var(--awc-color-tertiary-600);
    color: var(--awc-color-tertiary-600);
  }

  .button--outline.button--tertiary:hover:not(.button--disabled),
  .button--outline.button--tertiary.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-tertiary-800);
    color: var(--awc-color-tertiary-800);
  }

  .button--outline.button--tertiary:active:not(.button--disabled) {
    border-color: var(--awc-color-tertiary-800);
    background-color: var(--awc-color-tertiary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--awc-color-success-600);
    color: var(--awc-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-success-800);
    color: var(--awc-color-success-800);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--awc-color-success-800);
    background-color: var(--awc-color-success-800);
    color: var(--awc-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-neutral-800);
    color: var(--awc-color-neutral-800);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--awc-color-neutral-800);
    background-color: var(--awc-color-neutral-800);
    color: var(--awc-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--awc-color-warning-600);
    color: var(--awc-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-warning-800);
    color: var(--awc-color-warning-800);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--awc-color-warning-800);
    background-color: var(--awc-color-warning-800);
    color: var(--awc-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--awc-color-danger-600);
    color: var(--awc-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-danger-800);
    color: var(--awc-color-danger-800);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--awc-color-danger-800);
    background-color: var(--awc-color-danger-800);
    color: var(--awc-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-text-paragraph-color, var(--awc-color-neutral-800));
  }

  .button--text.button--has-label .button__suffix {
    color: var(--awc-button-text-only-icon-default, var(--awc-color-primary-600));
  }

  .button--text:hover:not(.button--disabled, .button--has-suffix, .button--has-prefix) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-600);
  }

  .button--text:focus-visible:not(.button--disabled, .button--has-suffix, .button--has-prefix) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-600);
  }

  .button--text:active:not(.button--disabled, .button--has-suffix, .button--has-prefix) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-800);
  }

  .button--text.button--has-label:active:not(.button--disabled) .button__suffix,
  .button--text.button--has-label:focus-visible:not(.button--disabled) .button__suffix,
  .button--text.button--has-label:hover:not(.button--disabled) .button__suffix {
    color: var(--awc-button-text-only-icon-hover, var(--awc-color-primary-800));
  }

  /*
   * Link buttons
   */

  .button--link {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-text-paragraph-color, var(--awc-color-neutral-800));
  }

  .button--link:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-600);
  }

  .button--link:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-600);
  }

  .button--link:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-800);
  }

  .button--outline.button--disabled {
    color: var(--awc-color-neutral-300);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--awc-input-height-small);
    font-size: var(--awc-button-font-size-small);
    line-height: calc(var(--awc-input-height-small) - var(--awc-input-border-width) * 2);
  }

  .button--medium {
    height: auto;
    min-height: var(--awc-input-height-medium);
    font-size: var(--awc-button-font-size-medium);
    line-height: calc(var(--awc-input-height-medium) - var(--awc-input-border-width) * 2);
  }

  .button--large {
    height: auto;
    min-height: var(--awc-input-height-large);
    font-size: var(--awc-button-font-size-large);
    line-height: calc(var(--awc-input-height-large) - var(--awc-input-border-width) * 2);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--awc-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--awc-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--awc-input-height-large);
  }

  /*
   * Icon modifier
   */

  .button--icon {
    padding-left: 0;
    padding-right: 0;
  }

  .button--icon.button--small {
    width: var(--awc-input-height-small);
  }

  .button--icon.button--medium {
    width: var(--awc-input-height-medium);
  }

  .button--icon.button--large {
    width: var(--awc-input-height-large);
  }

  .button--icon .button__prefix,
  .button--icon .button__suffix,
  .button--icon .button__caret {
    display: none;
  }

  .button--icon.button--circle {
    border-radius: 50%;
  }

  .button--icon.button--default {
    border-color: var(--awc-button-only-icon-stroke-default, var(--awc-color-neutral-300));
    background-color: var(--awc-button-only-icon-background-color-default, var(--awc-color-neutral-0));
    color: var(--awc-button-only-icon-color-default, currentColor);
  }

  .button--icon.button--default:hover:not(.button--disabled),
  .button--icon.button--default.button--checked:not(.button--disabled) {
    border-color: var(--awc-button-only-icon-stroke-hover, var(--awc-color-primary-600));
    background-color: var(--awc-button-only-icon-background-color-hover, var(--awc-color-primary-600));
    color: var(--awc-button-only-icon-color-hover, var(--awc-color-neutral-0));
  }

  .button--icon.button--default:active:not(.button--disabled) {
    border-color: var(--awc-button-only-icon-stroke-hover, var(--awc-color-primary-800));
    background-color: var(--awc-button-only-icon-background-color-hover, var(--awc-color-primary-800));
    color: var(--awc-button-only-icon-color-hover, var(--awc-color-neutral-0));
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading awc-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(awc-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(awc-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--awc-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--awc-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--awc-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--awc-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--awc-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--awc-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--awc-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-label.button--link .button__label {
    padding: 0;
  }

  .button--has-label.button--small.button--link.button--has-suffix .button__label {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-label.button--medium.button--link.button--has-suffix .button__label {
    padding-inline-end: var(--awc-spacing-medium);
  }

  .button--has-label.button--large.button--link.button--has-suffix .button__label {
    padding-inline-end: var(--awc-spacing-large);
  }

  .button--has-label.button--small.button--link.button--has-prefix .button__label {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-label.button--medium.button--link.button--has-prefix .button__label {
    padding-inline-start: var(--awc-spacing-medium);
  }

  .button--has-label.button--large.button--link.button--has-prefix .button__label {
    padding-inline-start: var(--awc-spacing-large);
  }

  /**
   * Disabled buttons
   * 
   */

  .button--disabled {
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button--colored.button--disabled {
    background-color: var(--awc-color-neutral-300);
    border-color: var(--awc-color-neutral-300);
    color: var(--awc-color-neutral-0);
  }

  .button--outline.button--disabled {
    border-color: var(--awc-color-neutral-300);
    color: var(--awc-color-neutral-300);
  }

  .button--text.button--disabled,
  .button--link.button--disabled,
  .button--text.button--disabled .button__suffix,
  .button--link.button--disabled .button__suffix {
    color: var(--awc-color-neutral-300);
  }

  .button--standard.button--disabled:not(.button--text, .button--link) {
    background-color: var(--awc-color-neutral-300);
    border-color: var(--awc-color-neutral-300);
    color: var(--awc-color-neutral-0);
  }

  /* Primary */
  .button--standard.button--primary.button--disabled {
    background-color: var(--awc-button-primary-background-color-disabled, var(--awc-color-neutral-300));
    border-color: var(
      --awc-button-primary-stroke-disabled,
      var(--awc-button-primary-background-color-disabled, var(--awc-color-neutral-300))
    );
    color: var(--awc-button-primary-color-disabled, var(--awc-color-neutral-0));
  }

  /* Secondary */
  .button--standard.button--secondary.button--disabled {
    background-color: var(--awc-button-secondary-background-color-disabled, var(--awc-color-neutral-300));
    border-color: var(
      --awc-button-secondary-stroke-disabled,
      var(--awc-button-secondary-background-color-disabled, var(--awc-color-neutral-300))
    );
    color: var(--awc-button-secondary-color-disabled, var(--awc-color-neutral-0));
  }

  /* Tertiary */
  .button--standard.button--tertiary.button--disabled {
    background-color: var(--awc-button-tertiary-background-color-disabled, var(--awc-color-neutral-300));
    border-color: var(
      --awc-button-tertiary-stroke-disabled,
      var(--awc-button-tertiary-background-color-disabled, var(--awc-color-neutral-300))
    );
    color: var(--awc-button-tertiary-color-disabled, var(--awc-color-neutral-0));
  }

  /* Default icon button */
  .button--disabled.button--icon.button--default {
    border-color: var(--awc-button-only-icon-stroke-disabled, var(--awc-color-primary-800));
    background-color: var(--awc-button-only-icon-background-color-disabled, var(--awc-color-primary-800));
    color: var(--awc-button-only-icon-color-disabled, var(--awc-color-neutral-0));
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.awc-button-group__button--first:not(.awc-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.awc-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.awc-button-group__button--last:not(.awc-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.awc-button-group__button:not(.awc-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--awc-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .awc-button-group__button:not(
          .awc-button-group__button--first,
          .awc-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.awc-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.awc-button-group__button--focus),
  :host(.awc-button-group__button[checked]) {
    z-index: 2;
  }
`;
