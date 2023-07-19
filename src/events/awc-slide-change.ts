import type AWCCarouselItem from '../components/carousel-item/carousel-item';

type AWCSlideChange = CustomEvent<{ index: number; slide: AWCCarouselItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-slide-change': AWCSlideChange;
  }
}

export default AWCSlideChange;
