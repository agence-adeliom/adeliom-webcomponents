import AWCQrCode from './qr-code.component.js';

export * from './qr-code.component.js';
export default AWCQrCode;

AWCQrCode.define('awc-qr-code');

declare global {
  interface HTMLElementTagNameMap {
    'awc-qr-code': AWCQrCode;
  }
}
