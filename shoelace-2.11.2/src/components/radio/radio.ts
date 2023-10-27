import AWCRadio from './radio.component.js';

export * from './radio.component.js';
export default AWCRadio;

AWCRadio.define('awc-radio');

declare global {
  interface HTMLElementTagNameMap {
    'awc-radio': AWCRadio;
  }
}
