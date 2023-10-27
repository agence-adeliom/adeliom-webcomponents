import AWCButtonGroup from './button-group.component.js';

export * from './button-group.component.js';
export default AWCButtonGroup;

AWCButtonGroup.define('awc-button-group');

declare global {
  interface HTMLElementTagNameMap {
    'awc-button-group': AWCButtonGroup;
  }
}
