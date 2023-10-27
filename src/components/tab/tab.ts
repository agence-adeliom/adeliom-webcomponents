import AWCTab from './tab.component.js';

export * from './tab.component.js';
export default AWCTab;

AWCTab.define('awc-tab');

declare global {
  interface HTMLElementTagNameMap {
    'awc-tab': AWCTab;
  }
}
