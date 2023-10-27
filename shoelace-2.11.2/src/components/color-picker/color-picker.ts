import AWCColorPicker from './color-picker.component.js';

export * from './color-picker.component.js';
export default AWCColorPicker;

AWCColorPicker.define('awc-color-picker');

declare global {
  interface HTMLElementTagNameMap {
    'awc-color-picker': AWCColorPicker;
  }
}
