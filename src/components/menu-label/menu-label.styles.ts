import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

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
    padding: var(--awc-spacing-2x-small) var(--awc-spacing-x-large);
    user-select: none;
  }
`;
