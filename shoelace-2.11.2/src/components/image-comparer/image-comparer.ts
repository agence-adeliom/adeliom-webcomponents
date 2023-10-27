import AWCImageComparer from './image-comparer.component.js';

export * from './image-comparer.component.js';
export default AWCImageComparer;

AWCImageComparer.define('awc-image-comparer');

declare global {
  interface HTMLElementTagNameMap {
    'awc-image-comparer': AWCImageComparer;
  }
}
