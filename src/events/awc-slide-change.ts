import type AWCCarouselItem from '../components/carousel-item/carousel-item.js';

export type AWCSlideChangeEvent = CustomEvent<{ index: number; slide: AWCCarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-slide-change': AWCSlideChangeEvent;
  }
}
