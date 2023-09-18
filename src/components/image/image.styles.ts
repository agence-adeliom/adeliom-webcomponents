import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    line-height: 0;
    overflow: hidden;
    border-radius: var(--awc-image-border-radius);
  }

  img {
    line-height: 0;
  }
`;
