import AWCRadioButton from './radio-button.component.js';

export * from './radio-button.component.js';
export default AWCRadioButton;

AWCRadioButton.define('awc-radio-button');

declare global {
  interface HTMLElementTagNameMap {
    'awc-radio-button': AWCRadioButton;
  }
}
