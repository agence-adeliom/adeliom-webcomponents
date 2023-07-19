import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    --border-color: var(--awc-color-neutral-200);
    --border-radius: 0;
    --border-width: 1px;
    --padding: var(--awc-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius);
    height: 100%;
  }

  .card .card__wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  .card.card--is-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .card.card--is-inner .card__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .card.card--is-inner .card__body {
    position: relative;
  }

  @media (min-width: 768px) {
    .card.card--is-horizontal {
      flex-direction: row;
    }

    .card.card--is-horizontal .card__image {
      border-radius: 0;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
  }
  .card.card--has-border {
    border: solid var(--border-width) var(--border-color);
  }

  .card.card--has-shadow {
    box-shadow: var(--awc-shadow-x-small);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
    line-height: 0;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card.card--has-border.card--has-header .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
    height: inherit;
  }

  .card--has-footer .card__footer {
    display: block;
    padding: var(--padding);
  }

  .card.card--has-border.card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;
