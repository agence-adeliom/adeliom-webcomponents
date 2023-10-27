import AWCBadge from './badge.component.js';

export * from './badge.component.js';
export default AWCBadge;

AWCBadge.define('awc-badge');

declare global {
  interface HTMLElementTagNameMap {
    'awc-badge': AWCBadge;
  }
}
