import AWCBreadcrumb from './breadcrumb.component.js';

export * from './breadcrumb.component.js';
export default AWCBreadcrumb;

AWCBreadcrumb.define('awc-breadcrumb');

declare global {
  interface HTMLElementTagNameMap {
    'awc-breadcrumb': AWCBreadcrumb;
  }
}
