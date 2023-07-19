import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    line-height: 0;
    overflow: hidden;
  }

  img {
    line-height: 0;
  }
`;
