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

    /** The state for calculate the render of pagination numbers. */
    @state() renderedPaginationArray: any;

    /** The state to set if user is on mobile device or not. */
    @state() isMobile: boolean = (window.innerWidth <= 768);

    /** The state to set the number of items (pagination numbers) to display. */
    @state() itemCount: number = (this.isMobile ? 2 : 3);

    /** The state to display left dots in pagination. */
    @state() shouldShowLeftDots: boolean = false;

    /** The state to display right dots in pagination. */
    @state() shouldShowRightDots: boolean = false;

    /** Indicates the total page count. */
    @property({ type: Number, reflect: true }) total: number;

    /** Indicates the current page number. */
    @property({ type: Number, reflect: true }) current: number = 1

    /** Go to page on click on a pagination number */
    private handleClick = (pageNumber: number) => {
      this.current = pageNumber;
      this.emit('awc-page-change', {detail: {value: this.current}});
    };

    /** Go to next page on click on pagination next button */
    private nextPage = () => {
      this.current = Math.min(this.current + 1, this.total);
      this.emit('awc-page-change', {detail: {value: this.current}});
    };

    /** Go to previous page on click on pagination previous button */
    private previousPage = () => {
      this.current = Math.max(this.current - 1, 0);
      this.emit('awc-page-change', {detail: {value: this.current}});
    };

    /** Make range index not from 0 */
    private range = (start: number, end: number) => {
      let length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    };

    private renderedPagination = () => {
      const paginationArray = this.range(1, this.total)
      this.renderedPaginationArray = [...paginationArray]
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
              class="pagination__button"
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
              class="pagination__button"
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
