import AWCMenuItem from './menu-item.component.js';

export * from './menu-item.component.js';
export default AWCMenuItem;

AWCMenuItem.define('awc-menu-item');

declare global {
  interface HTMLElementTagNameMap {
    'awc-menu-item': AWCMenuItem;
  }
}
