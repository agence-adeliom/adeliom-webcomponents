import AWCOption from './option.component.js';

export * from './option.component.js';
export default AWCOption;

AWCOption.define('awc-option');

declare global {
  interface HTMLElementTagNameMap {
    'awc-option': AWCOption;
  }
}
