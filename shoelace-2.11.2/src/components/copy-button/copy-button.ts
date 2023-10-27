import AWCCopyButton from './copy-button.component.js';

export * from './copy-button.component.js';
export default AWCCopyButton;

AWCCopyButton.define('awc-copy-button');

declare global {
  interface HTMLElementTagNameMap {
    'awc-copy-button': AWCCopyButton;
  }
}
