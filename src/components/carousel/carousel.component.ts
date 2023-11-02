import '../../internal/scrollend-polyfill.js';

import { AutoplayController } from './autoplay-controller.js';
import { clamp } from '../../internal/math.js';
import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { map } from 'lit/directives/map.js';
import { prefersReducedMotion } from '../../internal/animate.js';
import { property, query, state } from 'lit/decorators.js';
import { range } from 'lit/directives/range.js';
import { ScrollController } from './scroll-controller.js';
import { watch } from '../../internal/watch.js';
import AWCElement from '../../internal/awc-element.js';
import AWCIcon from '../icon/icon.component.js';
import styles from './carousel.styles.js';
import type { CSSResultGroup, PropertyValueMap } from 'lit';
import type AWCCarouselItem from '../carousel-item/carousel-item.component.js';
import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay, Manipulation, Keyboard, Thumbs, FreeMode } from 'swiper/modules';
/**
 * @summary Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
 * @documentation https://awc.a-dev.cloud/?path=/docs/components-carousel--docs
 * @since 1.0
 * @status experimental
 *
 * @dependency awc-icon
 *
 * @event {{ index: number, slide: AWCCarouselItem }} awc-slide-change - Emitted when the active slide changes.
 *
 * @slot - The carousel's main content, one or more `<awc-carousel-item>` elements.
 * @slot next-icon - Optional next icon to use instead of the default. Works best with `<awc-icon>`.
 * @slot previous-icon - Optional previous icon to use instead of the default. Works best with `<awc-icon>`.
 *
 * @csspart base - The carousel's internal wrapper.
 * @csspart scroll-container - The scroll container that wraps the slides.
 * @csspart pagination - The pagination indicators wrapper.
 * @csspart pagination-item - The pagination indicator.
 * @csspart pagination-item--active - Applied when the item is active.
 * @csspart navigation - The navigation wrapper.
 * @csspart navigation-button - The navigation button.
 * @csspart navigation-button--previous - Applied to the previous button.
 * @csspart navigation-button--next - Applied to the next button.
 *
 * @cssproperty --slide-gap - The space between each slide.
 * @cssproperty [--aspect-ratio=16/9] - The aspect ratio of each slide.
 * @cssproperty --scroll-hint - The amount of padding to apply to the scroll area, allowing adjacent slides to become
 *  partially visible as a scroll hint.
 */
export default class AWCCarousel extends AWCElement {
  static styles: CSSResultGroup = styles;
  static dependencies = { 'awc-icon': AWCIcon };

  /** When set, allows the user to navigate the carousel in the same direction indefinitely. */
  @property({ type: Boolean, reflect: true }) loop = false;

  /** When set, show the carousel's navigation. */
  @property({ type: Boolean, reflect: true }) navigation = false;

  /** When set, show the carousel's pagination indicators. */
  @property({ reflect: true }) pagination: boolean | 'progressbar' | 'bullets' | 'fraction' | 'custom' = false;

  /** When set, show the carousel's scrollbar indicators. */
  @property({ type: Boolean, reflect: true }) scrollbar = false;

  /** When set, the slides will scroll automatically when the user is not interacting with them.  */
  @property({ reflect: true }) autoplay : boolean | number | object = false;

  /** Set to `true` and slider wrapper will adapt its height to the height of the currently active slide */
  @property({ type: Boolean, reflect: true, attribute: 'auto-height' }) autoHeight = false;

  /** Specifies how many slides should be shown at a given time.  */
  @property({ attribute: 'slides-per-view' }) slidesPerView: number | 'auto' = 1;

  @property({ type: Number, reflect: true }) speed = 300;

  @property({ type: Number, reflect: true }) threshold = 5;

  @property({ reflect: true, attribute: 'space-between' }) spaceBetween : string | number = 0;

  @property({ type: Boolean,  reflect: true, attribute: 'free-mode' }) freeMode = false;
  @property({ type: Boolean,  reflect: true, attribute: 'grab-cursor' }) grabCursor = false;

  @property({ type: String,  reflect: true }) effect : 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' = 'slide';

  @property({ type: Boolean,  reflect: true, attribute: 'centered-slides' }) centeredSlides = false;

  @property({ reflect: true }) breakpoints: object | undefined = undefined;

  /**
   * Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`
   * greater than one. It can't be higher than `slides-per-page`.
   */
  @property({ type: Number, attribute: 'slides-per-group' }) slidesPerGroup = 1;

  /** Specifies the orientation in which the carousel will lay out.  */
  @property() direction: 'horizontal' | 'vertical' = 'horizontal';

  @property() thumbnails: string | object | undefined = undefined;


  /** When set, it is possible to scroll through the slides by dragging them with the mouse. */
  @property({ type: Boolean, reflect: true, attribute: 'mouse-dragging' }) mouseDragging = true;

  @query('.carousel') container: HTMLElement;
  @query('.carousel__wrapper') scrollContainer: HTMLElement;
  @query('.carousel__pagination') paginationContainer: HTMLElement;
  @query('.navigation-button--previous') previousButton: HTMLElement;
  @query('.navigation-button--next') nextButton: HTMLElement;

  // The index of the active slide
  @state() activeSlide = 0;

  slider?: Swiper
  slideSlots: number = 0

  // A map containing the state of all the slides
  private readonly localize = new LocalizeController(this);

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'region');
    this.setAttribute('aria-label', this.localize.term('carousel'));
  }


  protected firstUpdated(): void {
    this.initializeSlides();
  }

  @watch('mouseDragging')
  handleMouseDraggingChange() {
    if(this.slider) {
      this.slider.destroy();
    }

    this.initializeSlides()
  }



  /** @internal Gets all carousel items. */
  private getSlides({ excludeClones = true }: { excludeClones?: boolean } = {}) {
    return [...this.children].filter(
      (el: HTMLElement) => this.isCarouselItem(el) && (!excludeClones || !el.hasAttribute('data-clone'))
    ) as AWCCarouselItem[];
  }

  private isCarouselItem(node: Node): node is AWCCarouselItem {
    return node instanceof Element && node.tagName.toLowerCase() === 'awc-carousel-item';
  }




  render() {
    const isLtr = this.localize.dir() === 'ltr';
    this.calcSlideSlots();

    return html`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${classMap({
            carousel__wrapper: true,
          })}"
          aria-atomic="true"
          tabindex="0"
        >
          <slot></slot>
          ${Array.from({length: this.slideSlots}).map((_, index) => `
          <awc-carousel-item part="carousel__slide carousel__slide-${index}">
            <slot name="carousel__slide-${index}"></slot>
          </awc-carousel-item>
          `).join('')}
        </div>
      </div>
      ${this.navigation
              ? html`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${classMap({
                  'navigation-button': true,
                  'navigation-button--previous': true
              })}"
                  aria-label="${this.localize.term('previousSlide')}"
                  aria-controls="scroll-container"
                >
                  <slot name="previous-icon">
                    <awc-icon library="system" name="${isLtr ? 'chevron-left' : 'chevron-right'}"></awc-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${classMap({
                  'navigation-button': true,
                  'navigation-button--next': true
              })}
                  aria-label="${this.localize.term('nextSlide')}"
                  aria-controls="scroll-container"
                >
                  <slot name="next-icon">
                    <awc-icon library="system" name="${isLtr ? 'chevron-right' : 'chevron-left'}"></awc-icon>
                  </slot>
                </button>
              </div>
            `
              : ''}
      ${this.pagination !== false
              ? html`<div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container"></div>`
              : ''}
      ${this.scrollbar
              ? html`<div part="scrollbar" role="scrollbar" class="carousel__scrollbar" aria-controls="scroll-container" aria-valuenow="0"></div>`
              : ''}
    `;
  }

  private initializeSlides() {
    console.log(this.autoplay !== false ? (this.autoplay === true ? true : (!isNaN(this.autoplay) ? { delay: this.autoplay === '' ? 3000 : this.autoplay } : {...JSON.parse(this.autoplay)})) : false)
    // eslint-disable-next-line
    this.slider = new Swiper(this.container, {
      modules: [Navigation, Pagination, Scrollbar, Autoplay, Manipulation, Keyboard, Thumbs, FreeMode],
      simulateTouch: this.mouseDragging,
      direction: this.direction,
      wrapperClass: 'carousel__wrapper',
      containerModifierClass: 'carousel--',
      touchEventsTarget: 'container',
      slideClass: 'carousel__slide',
      slidesPerView: this.slidesPerView,
      slidesPerGroup: this.slidesPerGroup,
      grabCursor: this.grabCursor,
      loop: this.loop,
      autoHeight: this.autoHeight,
      speed: this.speed,
      threshold: this.threshold,
      spaceBetween: this.spaceBetween,
      freeMode: this.freeMode ? {
        enabled: true,
      } : undefined,
      effect: this.effect,
      centeredSlides: this.autoHeight,
      breakpoints: this.breakpoints ? JSON.parse(this.breakpoints) : undefined,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      thumbs: this.thumbnails ? {
        swiper: this.thumbnails,
        slideThumbActiveClass: 'carousel__thumb--active',
        thumbsContainerClass: 'carousel__thumbs',
      } : undefined,
      autoplay: this.autoplay !== false ? (this.autoplay === true ? true : (!isNaN(this.autoplay) ? { delay: this.autoplay === '' ? 3000 : this.autoplay } : {...JSON.parse(this.autoplay)})) : false,
      navigation: {
        enabled: this.navigation,
        nextEl: this.nextButton,
        prevEl: this.previousButton,
        disabledClass: 'navigation-button--disabled',
        lockClass: 'navigation-button--lock',
        hiddenClass: 'navigation-button--hidden',
        navigationDisabledClass: 'navigation--disabled',
      },
      pagination: {
        enabled: this.pagination !== false,
        type: this.pagination === '' ? 'bullets' : this.pagination,
        el: this.paginationContainer,
        bulletActiveClass: 'pagination-item--active',
        currentClass: 'pagination-item--current',
        bulletClass: 'pagination-item',
        clickableClass: 'pagination-item--clickable',
        hiddenClass: 'carousel__pagination--hidden',
        lockClass: 'carousel__pagination--lock',
        horizontalClass: 'carousel__pagination--horizontal',
        verticalClass: 'carousel__pagination--vertical',
        bulletElement: 'button',
        modifierClass: 'carousel__pagination-',
        paginationDisabledClass: 'carousel__pagination--disabled',
        progressbarFillClass: 'carousel__progressbar--fill',
        progressbarOppositeClass: 'carousel__progressbar--opposite',
        totalClass: 'pagination-item--total',
      },
      scrollbar: {
        enabled: this.scrollbar,
        el: this.scrollContainer,
        scrollbarDisabledClass: 'scrollbar--disabled',
      },
      observer: true,
      observeParents: true,
      observeSlideChildren: this.slideSlots > 0,
      onAny: (name, ...args) => {
        if (name === '_swiper') {
          // @ts-ignore
          const swiper = args[0];
          swiper.isElement = true
        }
        if (name === 'observerUpdate') {
          this.calcSlideSlots();
        }
        const kebabCase = string => string
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[\s_]+/g, '-')
          .toLowerCase();

        const eventName = `awc-${kebabCase(name)}`
        const event = new CustomEvent(eventName, {
          detail: args,
          bubbles: name !== 'hashChange',
          cancelable: true,
        });
        this.dispatchEvent(event);
      },
    });


  }

  calcSlideSlots() {
    const currentSideSlots = this.slideSlots || 0;
    // slide slots
    const slideSlotChildren = [...this.querySelectorAll(`[slot^=slide-]`)].map((child) => {
      return parseInt(child?.getAttribute('slot').split('carousel__slide-')[1], 10);
    });
    this.slideSlots = slideSlotChildren.length ? Math.max(...slideSlotChildren) + 1 : 0;
    if (this.slideSlots > currentSideSlots) {
      for (let i = currentSideSlots; i < this.slideSlots; i += 1) {
        const slideEl = document.createElement('awc-carousel-item');
        slideEl.setAttribute('part', `carousel__slide carousel__slide-${i + 1}`);
        const slotEl = document.createElement('slot');
        slotEl.setAttribute('name', `carousel__slide-${i + 1}`);
        slideEl.appendChild(slotEl);
        this.scrollContainer.appendChild(slideEl);
      }
    } else if (this.slideSlots < currentSideSlots) {
      const slides = this.slider?.slides || [];
      for (let i = slides.length - 1; i >= 0; i -= 1) {
        if (i > this.slideSlots) {
          slides[i].remove();
        }
      }
    }
  }
}
