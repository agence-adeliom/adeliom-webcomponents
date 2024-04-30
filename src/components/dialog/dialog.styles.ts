import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --width: 31rem;
    --header-spacing: var(--awc-spacing-large);
    --body-spacing: var(--awc-spacing-large);
    --footer-spacing: var(--awc-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--awc-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--awc-spacing-2xlarge));
    max-height: calc(100% - var(--awc-spacing-2xlarge));
    background-color: var(--awc-panel-background-color);
    border-radius: var(--awc-border-radius-medium);
    box-shadow: var(--awc-shadow-xlarge);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--awc-font-size-large);
    line-height: var(--awc-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--awc-spacing-2xsmall);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions awc-icon-button,
  .dialog__header-actions ::slotted(awc-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(awc-button:not(:first-of-type)) {
    margin-inline-start: var(--awc-spacing-xsmall);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--awc-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--awc-color-neutral-0);
    }
  }
`;
