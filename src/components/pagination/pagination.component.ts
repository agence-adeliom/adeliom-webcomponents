import { html } from 'lit';
import AWCElement from '../../internal/awc-element.js';
import styles from './pagination.styles.js';
import type { CSSResultGroup } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { LocalizeController } from '../../utilities/localize.js';
// import { range } from 'lit/directives/range.js';

/**
 * @summary Summary.
 * @documentation https://awc.a-dev.cloud/?path=/docs/pagination-option--docs
 * @status stable
 * @since 1.0
 * 
 * @event awc-page-change - Emitted when page change.
 */

export default class AWCPagination extends AWCElement {
    static styles: CSSResultGroup = styles;
    private readonly localize = new LocalizeController(this);

    /** The state for display dots instead of numbers */
    @state() displayDots = false;

    /** The state for calculate the render of pagination numbers. */
    @state() renderedPaginationArray: any;

    /** The state to set if user is on mobile device or not. */
    @state() isMobile: boolean = (window.innerWidth <= 768);

    /** The state to set the number of items (pagination numbers) to display. */
    @state() itemCount: number = (this.isMobile ? 2 : 3);

    /** test */
    @state() shouldShowLeftDots: boolean = false;

    /** test */
    @state() shouldShowRightDots: boolean = false;

    /** Indicates the total page count. */
    @property({ type: Number, reflect: true }) total: number;

    /** Indicates the current page number. */
    @property({ type: Number, reflect: true }) current: number = 1

    /** Go to page on click on a pagination number */
    private handleClick = (pageNumber: number) => {
      if (pageNumber !== this.current) {
        this.current = pageNumber
        this.renderedPagination()

        this.emit('awc-page-change', {value: this.current});
      }
    };

    /** Go to next page on click on pagination next button */
    private nextPage = () => {
      // if(this.current + 1 === this.total) {
      //     return;
      // }
      this.current += 1
      this.renderedPagination()

      this.emit('awc-page-change', {value: this.current});
    };

    /** Go to previous page on click on pagination previous button */
    private previousPage = () => {
      if(this.current - 1 < 0) {
        return;
      }
      this.current -= 1
      this.renderedPagination()
      
      this.emit('awc-page-change', {value: this.current});
    };

    /** Make range index not from 0 */
    private range = (start: number, end: number) => {
      let length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    };

    private renderedPagination = () => {
      const siblingCount: number = 1

      // Get last three pages in array
      const lastThreePages = this.range(
        this.total - this.itemCount + 1,
        this.total
      );

      // Get first three pages in array
      const firstThreePages = this.range(1, 3);

      // Get previous siblind index
      const leftSiblingIndex = Math.max(this.current - siblingCount, 1);
      
      // Get next siblind index
      const rightSiblingIndex = Math.min(this.current + siblingCount, this.total);

      if(this.isMobile) {

      } else {
        this.shouldShowLeftDots = leftSiblingIndex >= 3 ;
        this.shouldShowRightDots = rightSiblingIndex <= this.total - this.itemCount;
      }

      const firstPageIndex = 1;
      const lastPageIndex = this.total;

      if (!this.shouldShowLeftDots && this.shouldShowRightDots) {
        // console.log('!shouldShowLeftDots && shouldShowRightDots')
        
        let leftRange = this.range(1, this.itemCount);
        this.renderedPaginationArray = [...leftRange, '...', ...lastThreePages];
      }

      if (this.shouldShowLeftDots && !this.shouldShowRightDots) {
        // console.log('shouldShowLeftDots && !shouldShowRightDots')

        let rightRange = this.range(
          this.total - this.itemCount + 1,
          this.total
        );

        this.renderedPaginationArray = [...firstThreePages, '...', ...rightRange];
      }      

      if (this.shouldShowLeftDots && this.shouldShowRightDots) {
        // console.log('shouldShowLeftDots && shouldShowRightDots')

        let middleRange = this.range(leftSiblingIndex, rightSiblingIndex);
        this.renderedPaginationArray = [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
      }
    }

    render() {
      // Check viewport of the user
      this.isMobile = window.innerWidth <= 768

      // Run init pagination render
      this.renderedPagination()

      return html`
          <div part="base"
            class=${classMap({
              pagination: true
            })}
          >
            <awc-button
              part="button button-previous"
              @click=${this.previousPage}
              variant="primary"
              outline
              ?disabled=${this.current === 1}
              aria-label=${this.localize.term('previous')}
            >
              <slot name="previous-button">
                <awc-icon name="chevron-left"></awc-icon>
              </slot>
            </awc-button>

            <ul part="items" class="pagination__items">
              ${this.renderedPaginationArray.map((pageNumber: any) => {
                if (pageNumber === '...') {
                  return html`<li class="pagination__item--dots">&#8230;</li>`;
                }
                return html`
                  <li ${pageNumber === this.current ? 'aria-current="page"' : ''}
                      class=${classMap({
                        'pagination__item': true,
                        'pagination__item--current': pageNumber === this.current
                      })}
                  >
                    <awc-button
                        variant="ghost"
                        @click=${() => this.handleClick(pageNumber)}
                    >
                        ${pageNumber}
                    </awc-button>
                  </li>
                `
              })}
            </ul>

            <awc-button
              part="button button-next"
              @click=${this.nextPage}
              variant="primary"
              outline
              ?disabled=${this.current === this.total}
              aria-label=${this.localize.term('next')}
            >
              <slot name="next-button">
                <awc-icon name="chevron-right"></awc-icon>
              </slot>
            </awc-button>
          </div>

          <style>
              .pagination__items awc-button::part(label) {
                font-weight: 400;
              }
          </style>
      `;
    }
}
