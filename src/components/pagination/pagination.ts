import AWCPagination from './pagination.component.js';

export * from './pagination.component.js';
export default AWCPagination;

AWCPagination.define('awc-pagination');

declare global {
  interface HTMLElementTagNameMap {
    'awc-pagination': AWCPagination;
  }
}
