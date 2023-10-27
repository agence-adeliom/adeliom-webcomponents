import AWCSpinner from './spinner.component.js';

export * from './spinner.component.js';
export default AWCSpinner;

AWCSpinner.define('awc-spinner');

declare global {
  interface HTMLElementTagNameMap {
    'awc-spinner': AWCSpinner;
  }
}
