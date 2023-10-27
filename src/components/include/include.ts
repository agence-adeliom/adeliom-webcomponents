import AWCInclude from './include.component.js';

export * from './include.component.js';
export default AWCInclude;

AWCInclude.define('awc-include');

declare global {
  interface HTMLElementTagNameMap {
    'awc-include': AWCInclude;
  }
}
