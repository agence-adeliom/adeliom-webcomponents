import AWCDrawer from './drawer.component.js';

export * from './drawer.component.js';
export default AWCDrawer;

AWCDrawer.define('awc-drawer');

declare global {
  interface HTMLElementTagNameMap {
    'awc-drawer': AWCDrawer;
  }
}
