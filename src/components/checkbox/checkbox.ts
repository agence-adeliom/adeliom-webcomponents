import AWCCheckbox from './checkbox.component.js';

export * from './checkbox.component.js';
export default AWCCheckbox;

AWCCheckbox.define('awc-checkbox');

declare global {
  interface HTMLElementTagNameMap {
    'awc-checkbox': AWCCheckbox;
  }
}
