import AWCMenuLabel from './menu-label.component.js';

export * from './menu-label.component.js';
export default AWCMenuLabel;

AWCMenuLabel.define('awc-menu-label');

declare global {
  interface HTMLElementTagNameMap {
    'awc-menu-label': AWCMenuLabel;
  }
}
