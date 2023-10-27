import AWCFormatBytes from './format-bytes.component.js';

export * from './format-bytes.component.js';
export default AWCFormatBytes;

AWCFormatBytes.define('awc-format-bytes');

declare global {
  interface HTMLElementTagNameMap {
    'awc-format-bytes': AWCFormatBytes;
  }
}
