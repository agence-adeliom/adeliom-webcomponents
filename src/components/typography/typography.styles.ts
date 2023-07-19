import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
    --font-family: var(--awc-font-sans);
    --color: current;
    --font-weight: var(--awc-font-weight-normal);
    --font-size: var(--awc-font-size-base);
  }

  .typography {
    font-family: var(--font-family);
    font-style: normal;
    font-weight: var(--font-weight);
    font-size: var(--font-size);
    line-height: var(--awc-line-height-dense);
    color: var(--color);
  }

  .typography--heading {
    --font-weight: var(--awc-font-weight-bold);
    font-family: var(--font-family);
    margin: var(--margin-heading, 1rem 0 0.5rem 0);
  }

  .typography--no-margin {
    margin: 0;
  }

  .typography--heading1 {
    --font-size: var(--awc-font-size-heading1);
  }
  .typography--heading2 {
    --font-size: var(--awc-font-size-heading2);
  }
  .typography--heading3 {
    --font-size: var(--awc-font-size-heading3);
  }
  .typography--heading4 {
    --font-size: var(--awc-font-size-heading4);
  }
  .typography--heading5 {
    --font-size: var(--awc-font-size-heading5);
  }
  .typography--heading6 {
    --font-size: var(--awc-font-size-heading6);
  }
`;
