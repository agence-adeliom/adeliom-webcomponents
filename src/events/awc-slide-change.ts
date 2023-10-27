import type AWCCarouselItem from '../components/carousel-item/carousel-item';

export type AWCSlideChangeEvent = CustomEvent<{ index: number; slide: AWCCarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-slide-change': AWCSlideChangeEvent;
  }
}
