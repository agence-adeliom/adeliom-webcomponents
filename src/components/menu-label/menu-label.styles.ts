import { css } from 'lit';
export default css`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-semibold);
    line-height: var(--awc-line-height-normal);
    letter-spacing: var(--awc-letter-spacing-normal);
    color: var(--awc-color-neutral-500);
    padding: var(--awc-spacing-2xsmall) var(--awc-spacing-xlarge);
    user-select: none;
    -webkit-user-select: none;
  }
`;
