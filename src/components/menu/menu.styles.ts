import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    background: var(--awc-panel-background-color);
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
    border-radius: var(--awc-border-radius-medium);
    padding: var(--awc-spacing-xsmall) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(awc-divider) {
    --spacing: var(--awc-spacing-xsmall);
  }
`;
