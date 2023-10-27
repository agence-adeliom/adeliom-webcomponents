import AWCSelect from './select.component.js';

export * from './select.component.js';
export default AWCSelect;

AWCSelect.define('awc-select');

declare global {
  interface HTMLElementTagNameMap {
    'awc-select': AWCSelect;
  }
}
