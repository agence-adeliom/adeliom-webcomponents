import AWCCarouselItem from './carousel-item.component.js';

export * from './carousel-item.component.js';
export default AWCCarouselItem;

AWCCarouselItem.define('awc-carousel-item');

declare global {
  interface HTMLElementTagNameMap {
    'awc-carousel-item': AWCCarouselItem;
  }
}
