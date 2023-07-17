import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    position: relative;
    line-height: 0;
    overflow: hidden;
  }
`;
