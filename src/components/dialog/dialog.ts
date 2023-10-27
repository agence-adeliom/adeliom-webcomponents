import AWCDialog from './dialog.component.js';

export * from './dialog.component.js';
export default AWCDialog;

AWCDialog.define('awc-dialog');

declare global {
  interface HTMLElementTagNameMap {
    'awc-dialog': AWCDialog;
  }
}
