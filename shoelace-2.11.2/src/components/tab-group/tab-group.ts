import AWCTabGroup from './tab-group.component.js';

export * from './tab-group.component.js';
export default AWCTabGroup;

AWCTabGroup.define('awc-tab-group');

declare global {
  interface HTMLElementTagNameMap {
    'awc-tab-group': AWCTabGroup;
  }
}
