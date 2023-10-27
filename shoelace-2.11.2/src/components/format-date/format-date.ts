import AWCFormatDate from './format-date.component.js';

export * from './format-date.component.js';
export default AWCFormatDate;

AWCFormatDate.define('awc-format-date');

declare global {
  interface HTMLElementTagNameMap {
    'awc-format-date': AWCFormatDate;
  }
}
