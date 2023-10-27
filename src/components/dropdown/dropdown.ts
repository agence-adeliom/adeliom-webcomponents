import AWCDropdown from './dropdown.component.js';

export * from './dropdown.component.js';
export default AWCDropdown;

AWCDropdown.define('awc-dropdown');

declare global {
  interface HTMLElementTagNameMap {
    'awc-dropdown': AWCDropdown;
  }
}
