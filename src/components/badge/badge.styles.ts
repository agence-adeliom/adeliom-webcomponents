import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--awc-font-weight-semibold);
    letter-spacing: var(--awc-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--awc-border-radius-small);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--secondary {
    background-color: var(--awc-color-secondary-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--tertiary {
    background-color: var(--awc-color-tertiary-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--success {
    background-color: var(--awc-color-success-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--awc-color-warning-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--awc-color-danger-600);
    color: var(--awc-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--awc-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--awc-color-primary-600);
  }

  .badge--pulse.badge--secondary {
    --pulse-color: var(--awc-color-secondary-600);
  }

  .badge--pulse.badge--tertiary {
    --pulse-color: var(--awc-color-tertiary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--awc-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--awc-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--awc-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--awc-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;
