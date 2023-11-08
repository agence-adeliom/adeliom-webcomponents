import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;

    --awc-pagination-gap: 1rem;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--awc-pagination-gap);
  }

  .pagination__items{
    list-style: none;
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 0;
    padding: 0;
  }
`;
