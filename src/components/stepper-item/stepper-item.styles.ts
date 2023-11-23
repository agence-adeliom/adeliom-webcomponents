import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: block;
    width: 100%;

    --gap: inherit;
    --size: inherit;
    --font-size: inherit;
    --badge-radius: inherit;
    --track-height: inherit;
    --track-gap: inherit;

    --color: inherit;
    --badge-color: inherit;
    --backgound-color: inherit;

    --active-color: inherit;
    --active-badge-color: inherit;
    --active-backgound-color: inherit;

    --completed-color: inherit;
    --completed-badge-color: inherit;
    --completed-backgound-color: inherit;
  }

  .step-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    text-align: center;
    gap: var(--gap);
  }

  .step-item.vertical {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }

  .step-item::after {
    content: '';
    position: absolute;
    height: var(--track-height);
    width: calc(100% - var(--size) - (var(--track-gap) * 2));
    background-color: var(--badge-color);
    top: calc(var(--size) / 2);
    left: calc(50% + (var(--size) / 2) + var(--track-gap));
    z-index: -1;
  }

  .step-item.vertical::after {
    width: var(--track-height);
    height: calc(100% - var(--size) - (var(--track-gap) * 2));
    top: calc(var(--size) + var(--track-gap));
    left: calc(var(--size) / 2);
  }

  .step-item .badge {
    position: relative;
    z-index: 5;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    border-radius: var(--badge-radius);
    border: solid var(--track-height) var(--badge-color);
    font-size: var(--font-size);
    color: var(--color);
    background-color: var(--backgound-color);
    user-select: none;
  }

  .step-item .badge .badge__step {
    display: inline-flex;
  }

  .step-item.has-completed-icon .badge .badge__completed {
    display: none;
  }

  .step-item.completed.has-completed-icon .badge .badge__completed {
    display: inline-flex;
  }

  .step-item.completed.has-completed-icon .badge .badge__step {
    display: none;
  }

  .step-item.vertical {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }

  .step-item.completed .badge {
    background-color: var(--completed-backgound-color);
    border-color: var(--completed-badge-color);
    color: var(--completed-color);
  }

  .step-item.completed::after {
    background-color: var(--completed-backgound-color);
  }

  .step-item.active .badge {
    background-color: var(--active-backgound-color);
    border-color: var(--active-badge-color);
    color: var(--active-color);
  }

  .step-item.last::after {
    content: none;
  }
`;
