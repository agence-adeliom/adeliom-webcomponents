import AWCDivider from './divider.component.js';

export * from './divider.component.js';
export default AWCDivider;

AWCDivider.define('awc-divider');

declare global {
  interface HTMLElementTagNameMap {
    'awc-divider': AWCDivider;
  }
}
