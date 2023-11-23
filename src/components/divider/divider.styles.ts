import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --color: var(--awc-color-gray-200);
    --width: 1px;
    --style: solid;
    --spacing: var(--awc-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: var(--style) var(--width) var(--color) !important;
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: var(--style) var(--width) var(--color) !important;
    margin: 0 var(--spacing);
  }
`;
