import AWCInput from './input.component.js';

export * from './input.component.js';
export default AWCInput;

AWCInput.define('awc-input');

declare global {
  interface HTMLElementTagNameMap {
    'awc-input': AWCInput;
  }
}
