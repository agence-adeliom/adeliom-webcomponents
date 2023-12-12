import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

const core = css`
  :host {
    --aspect-ratio: 16 / 9;

    --preloader-color: var(--awc-color-primary-600);

    --navigation-top-offset: 50%;
    --navigation-size: 40px;
    --navigation-background: var(--awc-color-neutral-0);
    --navigation-color: var(--awc-color-primary-600);
    --navigation-disabled-opacity: 0.35;
    --navigation-sides-offset: 10px;

    --pagination-top: auto;
    --pagination-left: auto;
    --pagination-bottom: 8px;
    --pagination-right: 8px;
    --pagination-bullet-size: 10px;
    --pagination-bullet-border-radius: 50%;
    --pagination-bullet-opacity: 1;
    --pagination-color: var(--awc-color-primary-600);
    --pagination-bullet-inactive-opacity: 0.5;
    --pagination-bullet-inactive-color: var(--awc-color-neutral-200);
    --pagination-bullet-horizontal-gap: 4px;
    --pagination-bullet-vertical-gap: 6px;
    --pagination-fraction-color: inherit;
    --pagination-progressbar-bg-color: var(--awc-color-neutral-200);
    --pagination-progressbar-size: 4px;

    --centered-offset-before: 0;
    --centered-offset-after: 0;

    --wrapper-transition-timing-function: ease;
    
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }

  .carousel {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
    display: block;
  }

  .carousel--vertical > .carousel__wrapper {
    flex-direction: column;
  }

  .carousel__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--wrapper-transition-timing-function);
    box-sizing: content-box;
  }

  .carousel--android ::slotted(.carousel__slide),
  .carousel--ios ::slotted(.carousel__slide),
  .carousel__wrapper {
    transform: translate3d(0px, 0, 0);
  }

  .carousel--horizontal {
    touch-action: pan-y;
  }

  .carousel--vertical {
    touch-action: pan-x;
  }

  ::slotted(.carousel__slide) {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }

  .swiper-slide-invisible-blank {
    visibility: hidden;
  }

  /* Auto Height */
  .carousel--autoheight,
  .carousel--autoheight ::slotted(.carousel__slide) {
    height: auto;
  }

  .carousel--autoheight .carousel__wrapper {
    align-items: flex-start;
    transition-property: transform, height;
  }

  .carousel--backface-hidden ::slotted(.carousel__slide) {
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* 3D Effects */
  .carousel--3d.carousel--css-mode .carousel__wrapper {
    perspective: 1200px;
  }

  .carousel--3d .carousel__wrapper {
    transform-style: preserve-3d;
  }

  .carousel--3d {
    perspective: 1200px;
  }
  .carousel--3d ::slotted(.carousel__slide),
  .carousel--3d .carousel-cube-shadow {
    transform-style: preserve-3d;
  }

  /* CSS Mode */
  .carousel--css-mode > .carousel__wrapper {
    overflow: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
  }
  .carousel--css-mode > .carousel__wrapper::-webkit-scrollbar {
    display: none;
  }
  .carousel--css-mode > .carousel__wrapper > ::slotted(.carousel__slide) {
    scroll-snap-align: start start;
  }
  .carousel--css-mode.carousel--horizontal > .carousel__wrapper {
    scroll-snap-type: x mandatory;
  }
  .carousel--css-mode.carousel--vertical > .carousel__wrapper {
    scroll-snap-type: y mandatory;
  }
  .carousel--css-mode.carousel--free-mode > .carousel__wrapper {
    scroll-snap-type: none;
  }
  .carousel--css-mode.carousel--free-mode > .carousel__wrapper > ::slotted(.carousel__slide) {
    scroll-snap-align: none;
  }
  .carousel--css-mode.carousel--centered > .carousel__wrapper::before {
    content: '';
    flex-shrink: 0;
    order: 9999;
  }
  .carousel--css-mode.carousel--centered > .carousel__wrapper > ::slotted(.carousel__slide) {
    scroll-snap-align: center center;
    scroll-snap-stop: always;
  }
  .carousel--css-mode.carousel--centered.carousel--horizontal
    > .carousel__wrapper
    > ::slotted(.carousel__slide):first-child {
    margin-inline-start: var(--centered-offset-before);
  }
  .carousel--css-mode.carousel--centered.carousel--horizontal > .carousel__wrapper::before {
    height: 100%;
    min-height: 1px;
    width: var(--centered-offset-after);
  }
  .carousel--css-mode.carousel--centered.carousel--vertical
    > .carousel__wrapper
    > ::slotted(.carousel__slide):first-child {
    margin-block-start: var(--centered-offset-before);
  }
  .carousel--css-mode.carousel--centered.carousel--vertical > .carousel__wrapper::before {
    width: 100%;
    min-width: 1px;
    height: var(--centered-offset-after);
  }

  /* Slide styles start */
  /* 3D Shadows */
  .carousel--3d .carousel__slide-shadow,
  .carousel--3d .carousel__slide-shadow-left,
  .carousel--3d .carousel__slide-shadow-right,
  .carousel--3d .carousel__slide-shadow-top,
  .carousel--3d .carousel__slide-shadow-bottom,
  .carousel--3d .carousel__slide-shadow,
  .carousel--3d .carousel__slide-shadow-left,
  .carousel--3d .carousel__slide-shadow-right,
  .carousel--3d .carousel__slide-shadow-top,
  .carousel--3d .carousel__slide-shadow-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  }
  .carousel--3d .carousel__slide-shadow {
    background: rgba(0, 0, 0, 0.15);
  }
  .carousel--3d .carousel__slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .carousel--3d .carousel__slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .carousel--3d .carousel__slide-shadow-top {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .carousel--3d .carousel__slide-shadow-bottom {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  .carousel__lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    transform-origin: 50%;
    box-sizing: border-box;
    border: 4px solid var(--preloader-color);
    border-radius: 50%;
    border-top-color: transparent;
  }

  .carousel:not(.carousel--watch-progress) .carousel__lazy-preloader,
  .carousel--watch-progress .carousel__slide-visible .carousel__lazy-preloader {
    animation: slide-preloader-spin 1s infinite linear;
  }

  .carousel__lazy-preloader-white {
    --preloader-color: #fff;
  }

  .carousel__lazy-preloader-black {
    --preloader-color: #000;
  }

  @keyframes slide-preloader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* Slide styles end */
`;
const navigation = css`
  .navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--navigation-background);
    border: 1px solid var(--navigation-color);
    border-radius: var(--awc-border-radius-none);
    color: var(--navigation-color);

    font-size: inherit;
    padding: var(--awc-spacing-x-small);
    cursor: pointer;
    transition: var(--awc-transition-medium) color;
    appearance: none;

    position: absolute;
    top: var(--navigation-top-offset);
    width: var(--navigation-size);
    height: var(--navigation-size);
    transform: translate3d(0, -50%, 0);
    z-index: 10;
  }

  .navigation-button--previous.navigation-button--disabled,
  .navigation-button--next.navigation-button--disabled {
    opacity: var(--navigation-disabled-opacity);
    cursor: auto;
    pointer-events: none;
  }
  .navigation-button--previous.navigation-button--hidden,
  .navigation-button--next.navigation-button--hidden {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }
  .navigation--disabled .navigation-button--previous,
  .navigation--disabled .navigation-button--next {
    display: none !important;
  }
  .navigation-button--previous svg,
  .navigation-button--next svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform-origin: center;
  }
  .carousel--rtl .navigation-button--previous svg,
  .carousel--rtl .navigation-button--next svg {
    transform: rotate(180deg);
  }

  .navigation-button--previous,
  .carousel--rtl .navigation-button--next {
    left: var(--navigation-sides-offset);
    right: auto;
  }

  .navigation-button--next,
  .carousel--rtl .navigation-button--previous {
    right: var(--navigation-sides-offset);
    left: auto;
  }

  .navigation-button--lock {
    display: none;
  }

  /* Navigation font start */
  .navigation-button--previous:after,
  .navigation-button--next:after {
    font-size: var(--navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
  }

  .navigation-button--next,
  .carousel--rtl .navigation-button--previous {
    right: var(--navigation-sides-offset);
    left: auto;
  }

  /* Navigation font end */
`;
const pagination = css`
  .carousel__pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .carousel__pagination.carousel__pagination--hidden {
    opacity: 0;
  }
  .carousel__pagination--disabled > .carousel__pagination,
  .carousel__pagination.carousel__pagination--disabled {
    display: none !important;
  }

  /* Common Styles */
  .carousel__pagination-fraction,
  .carousel__pagination-custom,
  .carousel__pagination--horizontal > .carousel__pagination-bullets,
  .carousel__pagination-bullets.carousel__pagination--horizontal {
    bottom: var(--pagination-bottom);
    top: var(--pagination-top);
    left: 0;
    width: 100%;
  }

  /* Bullets */
  .carousel__pagination--bullets-dynamic {
    overflow: hidden;
    font-size: 0;
  }
  .carousel__pagination--bullets-dynamic .pagination-item {
    transform: scale(0.33);
    position: relative;
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active {
    transform: scale(1);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-main {
    transform: scale(1);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-prev {
    transform: scale(0.66);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-prev-prev {
    transform: scale(0.33);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-next {
    transform: scale(0.66);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-next-next {
    transform: scale(0.33);
  }

  .pagination-item {
    width: var(--pagination-bullet-width, var(--pagination-bullet-size));
    height: var(--pagination-bullet-height, var(--pagination-bullet-size));
    display: inline-block;
    border-radius: var(--pagination-bullet-border-radius);
    background: var(--pagination-bullet-inactive-color);
    opacity: var(--pagination-bullet-inactive-opacity);
  }
  button.pagination-item {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    appearance: none;
  }

  .carousel__pagination-clickable .pagination-item {
    cursor: pointer;
  }
  .pagination-item:only-child {
    display: none !important;
  }


  .pagination-item--active {
    opacity: var(--pagination-bullet-opacity);
    background: var(--pagination-color);
  }

  .carousel__pagination--vertical {
    position: absolute;
  }
  .carousel--vertical > .carousel__pagination-bullets,
  .carousel__pagination--vertical.carousel__pagination-bullets {
    right: var(--pagination-right);
    left: var(--pagination-left);
    top: 50%;
    transform: translate3d(0px, -50%, 0);
  }
  .carousel--vertical > .carousel__pagination-bullets .pagination-item,
  .carousel__pagination--vertical.carousel__pagination-bullets .pagination-item {
    margin: var(--pagination-bullet-vertical-gap) 0;
    display: block;
  }
  .carousel--vertical > .carousel__pagination-bullets.carousel__pagination-bullets-dynamic,
  .carousel__pagination--vertical.carousel__pagination-bullets.carousel__pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
  }
  .carousel--vertical > .carousel__pagination-bullets.carousel__pagination-bullets-dynamic .pagination-item,
  .carousel__pagination--vertical.carousel__pagination-bullets.carousel__pagination-bullets-dynamic .pagination-item {
    display: inline-block;
    transition:
      200ms transform,
      200ms top;
  }

  .carousel__pagination--horizontal > .carousel__pagination-bullets .pagination-item,
  .carousel__pagination--horizontal.carousel__pagination-bullets .pagination-item {
    margin: 0 var(--pagination-bullet-horizontal-gap);
  }
  .carousel__pagination--horizontal > .carousel__pagination-bullets.carousel__pagination-bullets-dynamic,
  .carousel__pagination--horizontal.carousel__pagination-bullets.carousel__pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .carousel__pagination--horizontal
    > .carousel__pagination-bullets.carousel__pagination-bullets-dynamic
    .pagination-item,
  .carousel__pagination--horizontal.carousel__pagination-bullets.carousel__pagination-bullets-dynamic .pagination-item {
    transition:
      200ms transform,
      200ms left;
  }

  .carousel__pagination--horizontal.carousel--rtl > .carousel__pagination-bullets-dynamic .pagination-item {
    transition:
      200ms transform,
      200ms right;
  }

  /* Fraction */
  .carousel__pagination-fraction {
    color: var(--pagination-fraction-color);
  }

  /* Progress */
  .carousel__pagination-progressbar {
    background: var(--pagination-progressbar-bg-color);
    position: absolute;
  }
  .carousel__pagination-progressbar .carousel__progressbar--fill {
    background: var(--pagination-color);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
  }
  .carousel--rtl + .carousel__pagination-progressbar .carousel__progressbar--fill {
    transform-origin: right top;
  }
  .carousel--horizontal + .carousel__pagination-progressbar,
  .carousel__pagination-progressbar.carousel__pagination--horizontal,
  .carousel--vertical + .carousel__pagination-progressbar.carousel__progressbar--opposite,
  .carousel__pagination-progressbar.carousel__pagination--vertical.carousel__progressbar--opposite {
    width: 100%;
    height: var(--pagination-progressbar-size);
    left: 0;
    top: 0;
  }
  .carousel--vertical + .carousel__pagination-progressbar,
  .carousel__pagination-progressbar.carousel__pagination--vertical,
  .carousel__pagination--horizontal > .carousel__pagination-progressbar.carousel__progressbar--opposite,
  .carousel__pagination-progressbar.carousel__pagination--horizontal.carousel__progressbar--opposite {
    width: var(--pagination-progressbar-size);
    height: 100%;
    left: 0;
    top: 0;
  }

  .carousel__pagination--lock {
    display: none;
  }
`;
export default css`
  ${componentStyles}
  ${core}
  ${navigation}
  ${pagination}

  .carousel--free-mode > .carousel__wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
`;
