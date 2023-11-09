import { html } from 'lit';
import AWCElement from '../../internal/awc-element.js';
import styles from './pagination.styles.js';
import type { CSSResultGroup } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { LocalizeController } from '../../utilities/localize.js';

/**
 * @summary Summary.
 * @documentation https://awc.a-dev.cloud/?path=/docs/pagination-option--docs
 * @status stable
 * @since 1.0
 */

export default class AWCPagination extends AWCElement {
    static styles: CSSResultGroup = styles;
    private readonly localize = new LocalizeController(this);

    /** The state for display dots instead of numbers */
    @state() displayDots = false;

    /** The number of decades to display in pagination */
    @property() decades = 2;

    /** Indicates the total page count. */
    @property({ type: Number, reflect: true }) total: number;

    /** Indicates the current page number. */
    @property({ type: Number, reflect: true }) current: number = 1

    /** Indicates the next page label. */
    @property({ type: String, reflect: true, attribute: 'next-label' }) nextLabel?: string = 'Suivant';

    /** Indicates the previous page label. */
    @property({ type: String, reflect: true, attribute: 'previous-label' }) previousLabel?: string = 'Précédent';

    /** Go to page on click on a pagination number */
    private handleClick = (pageNumber: number) => {
        if (pageNumber !== this.current) {
            this.current = pageNumber
          this.emit('awc-page-change', {value: this.current});
        }
    };

    /** Go to next page on click on pagination next button */
    private nextPage = () => {
        if(this.current + 1 === this.total) {
            return;
        }
        this.current += 1
      this.emit('awc-page-change', {value: this.current});
    };

    /** Go to previous page on click on pagination previous button */
    private previousPage = () => {
        if(this.current - 1 < 0) {
            return;
        }
        this.current -= 1
      this.emit('awc-page-change', {value: this.current});
    };


    render() {
      const counter = Array.from(Array(this.total).keys());
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
                  ${counter.map(index => {
                    index += 1;
                    return html`
                        <li ${index === this.current ? 'aria-current="page"' : ''}
                            class=${classMap({
                              'pagination__item': true,
                              'pagination__item--current': index === this.current
                            })}
                        >
                          <awc-button
                            variant="ghost"
                            @click=${() => this.handleClick(index)}
                          >
                            ${index}
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
        `;
    }
}
