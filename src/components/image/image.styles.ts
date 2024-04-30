import { css } from 'lit';

export default css`
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
