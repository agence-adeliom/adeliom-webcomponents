import AWCTextarea from './textarea.component.js';

export * from './textarea.component.js';
export default AWCTextarea;

AWCTextarea.define('awc-textarea');

declare global {
  interface HTMLElementTagNameMap {
    'awc-textarea': AWCTextarea;
  }
}
