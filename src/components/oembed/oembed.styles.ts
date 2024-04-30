import { css } from 'lit';

export default css`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    border: 0;
    padding: 0;
    line-height: 0;
    display: block;
    overflow: hidden;
  }

  .oembed {
    position: relative;
  }

  .oembed__thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .oembed__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--awc-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--awc-transition-fast) opacity;
  }

  .oembed__thumbnail[aria-hidden='true'] {
    display: none;
  }
`;
