import AWCIconButton from './icon-button.component.js';

export * from './icon-button.component.js';
export default AWCIconButton;

AWCIconButton.define('awc-icon-button');

declare global {
  interface HTMLElementTagNameMap {
    'awc-icon-button': AWCIconButton;
  }
}
