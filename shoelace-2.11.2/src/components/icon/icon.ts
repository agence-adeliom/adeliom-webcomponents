import AWCIcon from './icon.component.js';

export * from './icon.component.js';
export default AWCIcon;

AWCIcon.define('awc-icon');

declare global {
  interface HTMLElementTagNameMap {
    'awc-icon': AWCIcon;
  }
}
