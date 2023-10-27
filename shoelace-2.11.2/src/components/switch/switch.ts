import AWCSwitch from './switch.component.js';

export * from './switch.component.js';
export default AWCSwitch;

AWCSwitch.define('awc-switch');

declare global {
  interface HTMLElementTagNameMap {
    'awc-switch': AWCSwitch;
  }
}
