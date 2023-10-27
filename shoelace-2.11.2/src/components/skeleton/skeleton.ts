import AWCSkeleton from './skeleton.component.js';

export * from './skeleton.component.js';
export default AWCSkeleton;

AWCSkeleton.define('awc-skeleton');

declare global {
  interface HTMLElementTagNameMap {
    'awc-skeleton': AWCSkeleton;
  }
}
