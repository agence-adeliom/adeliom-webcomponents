import AWCRange from './range.component.js';

export * from './range.component.js';
export default AWCRange;

AWCRange.define('awc-range');

declare global {
  interface HTMLElementTagNameMap {
    'awc-range': AWCRange;
  }
}
