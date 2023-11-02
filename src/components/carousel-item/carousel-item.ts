import AWCCarouselItem from './carousel-item.component.js';

export * from './carousel-item.component.js';
export default AWCCarouselItem;

AWCCarouselItem.define('awc-carousel-item');
AWCCarouselItem.define('swiper-slide');

declare global {
  interface HTMLElementTagNameMap {
    'awc-carousel-item': AWCCarouselItem;
    'swiper-slide': AWCCarouselItem;
  }
}
