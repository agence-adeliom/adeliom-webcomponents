import AWCBreadcrumbItem from './breadcrumb-item.component.js';

export * from './breadcrumb-item.component.js';
export default AWCBreadcrumbItem;

AWCBreadcrumbItem.define('awc-breadcrumb-item');

declare global {
  interface HTMLElementTagNameMap {
    'awc-breadcrumb-item': AWCBreadcrumbItem;
  }
}
