import { css } from 'lit';

export default css`
  :host {
    display: block;
    --padding: var(--awc-spacing-medium);
    --border-width: 1px;
    --border-color: var(--awc-color-neutral-200);
    --border-radius: var(--awc-card-border-radius);
    --background-color: transparent;
  }

  .details {
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    overflow-anchor: none;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--padding);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: calc(1px + var(--awc-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
    pointer-events: none;
  }

  .details--disabled .details__header .details__summary,
  .details--disabled .details__header .details__summary-icon {
    color: var(--awc-color-neutral-500);
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    font-weight: var(--awc-font-weight-medium);
    color: var(--awc-text-title-color);
    transition: var(--awc-transition-medium) color ease;
  }

  .details__summary:hover {
    color: var(--awc-color-primary-600);
  }

  .details__summary:active,
  .details--open .details__summary,
  .details--open .details__summary-icon {
    color: var(--awc-color-primary-800);
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--awc-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: -180deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: 180deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--padding);
  }
`;
