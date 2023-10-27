import AWCPopup from './popup.component.js';

export * from './popup.component.js';
export default AWCPopup;

AWCPopup.define('awc-popup');

declare global {
  interface HTMLElementTagNameMap {
    'awc-popup': AWCPopup;
  }
}
