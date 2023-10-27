import AWCAlert from './alert.component.js';

export * from './alert.component.js';
export default AWCAlert;

AWCAlert.define('awc-alert');

declare global {
  interface HTMLElementTagNameMap {
    'awc-alert': AWCAlert;
  }
}
