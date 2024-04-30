import { css } from 'lit';

export default css`
  :host {
    display: block;

    --gap: var(--awc-spacing-medium);
    --size: var(--awc-spacing-5xlarge);
    --font-size: var(--awc-font-size-medium);
    --badge-radius: 50%;
    --track-height: var(--awc-spacing-3xsmall);
    --track-gap: var(--awc-spacing-xsmall);

    --color: var(--awc-color-neutral-400);
    --badge-color: var(--awc-color-neutral-400);
    --backgound-color: var(--awc-color-neutral-0);

    --active-color: var(--awc-color-primary-600);
    --active-badge-color: var(--awc-color-primary-600);
    --active-backgound-color: var(--awc-color-neutral-0);

    --completed-color: var(--awc-color-neutral-0);
    --completed-badge-color: var(--awc-color-primary-600);
    --completed-backgound-color: var(--awc-color-primary-600);
  }

  ol,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .stepper {
    z-index: 0;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .stepper.vertical {
    flex-direction: column;
  }
`;
