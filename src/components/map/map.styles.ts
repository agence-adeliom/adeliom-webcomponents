import { css } from 'lit';


export default css`
  :host {
    display: block;
    --link-color: var(--awc-color-primary-600);

    --popup-tip-size: 1rem;
    --popup-text-color: var(--awc-text-paragraph-color);
    --popup-background-color: var(--awc-panel-background-color);
    --popup-border-radius: var(--awc-panel-border-radius);
    --popup-padding: var(--awc-spacing-large) var(--awc-spacing-large) var(--awc-spacing-medium);
    --popup-box-shadow: var(--awc-shadow-medium);

    --controls-background-color: var(--awc-panel-background-color);
    --controls-border-color: var(--awc-panel-border-color);
    --controls-border-width: var(--awc-panel-border-width);
    --controls-border-radius: var(--awc-panel-border-radius);
    --controls-text-color: var(--awc-color-neutral-900);
    --controls-box-shadow: var(--awc-shadow-medium);

    --controls-location-active-color: var(--awc-color-secondary-600);
    --controls-location-following-color: var(--awc-color-primary-600);

    --attribution-background-color: var(--awc-panel-background-color);
    --attribution-text-color: var(--awc-color-neutral-900);
    --attribution-opacity: 0.8;

    --cluster-opacity: 0.8;
    --cluster-ring-opacity: 0.6;
    --cluster-small-color: var(--awc-color-neutral-0);
    --cluster-small-background-color: var(--awc-color-primary-600);
    --cluster-medium-color: var(--awc-color-neutral-0);
    --cluster-medium-background-color: var(--awc-color-primary-600);
    --cluster-large-color: var(--awc-color-neutral-0);
    --cluster-large-background-color: var(--awc-color-primary-600);

    --legend-contents-background: rgba(0, 0, 0, 0.25);
  }

  #map {
    height: 100%;
    width: 100%;
    position: relative;

  }

  .leaflet-control-fullscreen-button span {
    width: 30px;
    height: 30px;
  }

  .leaflet-touch .leaflet-control-zoom-in,
  .leaflet-touch .leaflet-control-zoom-out,
  .leaflet-touch .leaflet-control-zoom-in span,
  .leaflet-touch .leaflet-control-zoom-out span,
  .leaflet-control-fullscreen-button span,
  .leaflet-control-locate a,
  .leaflet-control-locate a .leaflet-control-locate-location-arrow   {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /** Legend */
  .leaflet-legend-contents {
    background-color: var(--legend-contents-background);
  }

  .leaflet-legend-contents h3 {
    margin-top: 0;
  }

  .leaflet-legend-title {
    margin: 3px;
    padding-bottom: 5px;
  }

  .leaflet-legend-column {
    float: left;
    margin-left: 10px;
  }

  .leaflet-legend-item {
    display: table;
    margin: 2px 0;
  }

  .leaflet-legend-item span {
    vertical-align: middle;
    display: table-cell;
    word-break: keep-all;
    white-space: nowrap;
    background-color: transparent;
    text-align: left;
  }

  .leaflet-legend-item-clickable {
    cursor: pointer;
  }

  .leaflet-legend-item-inactive span {
    color: #cccccc;
  }

  .leaflet-legend-item-inactive i img,
  .leaflet-legend-item-inactive i canvas {
    opacity: 0.3;
  }

  .leaflet-legend-item i {
    display: inline-block;
    padding: 0px 3px 0px 4px;
    position: relative;
    vertical-align: middle;
  }

  .leaflet-legend-toggle {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5MDE0Mjk2NTEwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3Nzk4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05MzQuNCA0NzguNzJINzM3LjI4Yy0xNS44NzItMTEwLjA4LTExMS4xMDQtMTk0LjU2LTIyNS4yOC0xOTQuNTZTMzAyLjU5MiAzNjguNjQgMjg2LjcyIDQ3OC43Mkg4OS42djY2LjU2SDI4Ni43MmMxNS44NzIgMTEwLjA4IDExMS4xMDQgMTk0LjU2IDIyNS4yOCAxOTQuNTZzMjA5LjQwOC04NC40OCAyMjUuMjgtMTk0LjU2aDE5Ny4xMnYtNjYuNTZ6IiBmaWxsPSIjNzA3MDcwIiBwLWlkPSIxNzc5OSI+PC9wYXRoPjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    box-shadow: none;
    border-radius: 4px;
  }

  .leaflet-legend-contents {
    display: none;
  }

  .leaflet-legend-expanded .leaflet-legend-contents {
    display: block;
    padding: 6px 15px 6px 6px;
  }

  .leaflet-legend-contents img {
    position: absolute;
  }

  .leaflet-legend-contents:after {
    content: '';
    display: block;
    clear: both;
  }

  /** Custom */

  .leaflet-container {
    font-family: var(--awc-font-sans);
  }

  .leaflet-touch .leaflet-control-layers,
  .leaflet-touch .leaflet-bar,
  .leaflet-touch .leaflet-bar a {
    background: var(--controls-background-color);
    border-color: var(--controls-border-color);
    border-width: var(--controls-border-width);
    color: var(--controls-text-color);
    box-shadow: var(--controls-box-shadow);
  }

  .leaflet-bar a.leaflet-disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.4;
  }

  .leaflet-touch .leaflet-bar a:last-child {
    border-bottom-left-radius: var(--controls-border-radius);
    border-bottom-right-radius: var(--controls-border-radius);
  }
  .leaflet-touch .leaflet-bar a:first-child {
    border-top-left-radius: var(--controls-border-radius);
    border-top-right-radius: var(--controls-border-radius);
  }

  .leaflet-container .leaflet-control-attribution {
    background: var(--attribution-background-color);
    color: var(--attribution-text-color);
    opacity: var(--attribution-opacity);
  }

  .leaflet-container .leaflet-control-attribution .leaflet-attribution-flag {
    display: none !important;
  }import { babel } from '@rollup/plugin-babel';



  .leaflet-container a {
    color: var(--link-color);
  }

  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    background: var(--popup-background-color);
    box-shadow: var(--popup-box-shadow);
  }

  .leaflet-popup-content-wrapper {
    border-radius: var(--popup-border-radius);
    padding: var(--popup-padding);
  }

  .leaflet-popup-content {
    margin: 0;
    color: var(--popup-text-color);
  }

  .leaflet-popup-content p:last-child {
    margin-bottom: 0;
  }

  .leaflet-popup-tip-container {
    width: calc(var(--popup-tip-size) * 1.4142125);
    height: calc((var(--popup-tip-size) * 1.4142125) / 2);
    margin-left: calc(((var(--popup-tip-size) * 1.4142125) / 2) * -1);
  }

  .leaflet-container a.leaflet-popup-close-button {
    color: var(--popup-close-button-color, var(--awc-color-neutral-1000));
  }

  .leaflet-popup-tip {
    width: var(--popup-tip-size);
    height: var(--popup-tip-size);
    margin-top: calc((var(--popup-tip-size) / 2) * -1);
  }

  .leaflet-control-locate a .leaflet-control-locate-location-arrow {
    color: var(--controls-text-color);
    background: none;
    font-size: 1rem;
    width: auto;
    heigth: auto;
    margin: 0;
  }

  .leaflet-control-locate a .leaflet-control-locate-location-arrow awc-spinner {
    font-size: 1rem;
    display: none;
  }

  .leaflet-control-locate.active a .leaflet-control-locate-location-arrow {
    color: var(--controls-location-active-color);
    background: none;
  }

  .leaflet-control-locate.following a .leaflet-control-locate-location-arrow {
    color: var(--controls-location-following-color);
    background: none;
  }


  .leaflet-control-locate a .leaflet-control-locate-spinner {
    animation: none;
    background: none;
    width: auto;
    height: auto;
    margin: 0;
    font-size: 1rem;
    display: inline-flex;
  }

  .leaflet-control-locate a .leaflet-control-locate-spinner awc-icon {
    display: none;
  }

  .leaflet-control-locate a .leaflet-control-locate-spinner awc-spinner {
    display: inline-flex;
  }

  .marker-cluster {
    position: relative;
    background-clip: padding-box;
    border-radius: 20px;
    overflow: hidden;
  }

  .marker-cluster div {
    position: absolute;
    inset: 5px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-align: center;
    border-radius: 15px;
    font: 12px var(--awc-font-sans);
  }

  .marker-cluster span {
    position: relative;
    line-height: 30px;
  }

  .marker-cluster::before,
  .marker-cluster div::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: var(--cluster-ring-opacity);
  }

  .marker-cluster div::before {
    opacity: var(--cluster-opacity);
  }

  .marker-cluster-small {
    color: var(--cluster-small-color);
  }
  .marker-cluster-small::before,
  .marker-cluster-small div::before {
    background-color: var(--cluster-small-background-color);
  }

  .marker-cluster-medium {
    color: var(--cluster-medium-color);
  }
  .marker-cluster-medium::before,
  .marker-cluster-medium div::before {
    background-color: var(--cluster-medium-background-color);
  }

  .marker-cluster-large {
    color: var(--cluster-large-color);
  }
  .marker-cluster-large::before,
  .marker-cluster-large div::before {
    background-color: var(--cluster-large-background-color);
  }

`;
