import AWCFormatNumber from './format-number.component.js';

export * from './format-number.component.js';
export default AWCFormatNumber;

AWCFormatNumber.define('awc-format-number');

declare global {
  interface HTMLElementTagNameMap {
    'awc-format-number': AWCFormatNumber;
  }
}
