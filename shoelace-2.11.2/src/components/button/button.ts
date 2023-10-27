import AWCButton from './button.component.js';

export * from './button.component.js';
export default AWCButton;

AWCButton.define('awc-button');

declare global {
  interface HTMLElementTagNameMap {
    'awc-button': AWCButton;
  }
}
