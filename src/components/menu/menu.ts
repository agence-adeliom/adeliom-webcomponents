import AWCMenu from './menu.component.js';

export * from './menu.component.js';
export default AWCMenu;

AWCMenu.define('awc-menu');

declare global {
  interface HTMLElementTagNameMap {
    'awc-menu': AWCMenu;
  }
}
