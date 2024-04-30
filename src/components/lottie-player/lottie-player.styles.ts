import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --toolbar-height: 2.5rem;
    display: block;
  }

  .animation-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .animation {
    width: 100%;
    height: 100%;
    display: flex;
  }

  [data-controls='true'] .animation {
    height: calc(100% - var(--toolbar-height));
  }

  .lottie-controls.toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: var(--toolbar-height);
    padding: 0 var(--awc-spacing-xsmall);
    background: var(--awc-color-neutral-0);
    color: var(--awc-color-neutral-1000);
    border-radius: var(--awc-panel-border-radius);
    border: var(--awc-panel-border-width) solid var(--awc-panel-border-color);
  }

  .lottie-controls.toolbar.has-error {
    display: none;
  }

  .lottie-controls.toolbar .progress-container {
    flex: 1;
    padding: 0 var(--awc-spacing-xsmall);
  }

  .lottie-controls.toolbar .progress-container .seeker {
    --track-color-active: var(--awc-color-primary-600);
    --thumb-size: 0.75rem;
    --track-height: 0.25rem;
  }

  .lottie-controls.toolbar awc-icon-button[data-active='true'] {
    color: var(--awc-color-primary-600);
  }

  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    margin: auto;
    gap: 0.5rem;
    color: var(--awc-color-danger-600);
    padding: var(--awc-spacing-xlarge);
  }

  .error awc-icon {
    font-size: 1.5rem;
  }
`;
