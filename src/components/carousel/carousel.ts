import AWCCarousel from './carousel.component.js';

export * from './carousel.component.js';
export default AWCCarousel;

AWCCarousel.define('awc-carousel');

declare global {
  interface HTMLElementTagNameMap {
    'awc-carousel': AWCCarousel;
  }
}
