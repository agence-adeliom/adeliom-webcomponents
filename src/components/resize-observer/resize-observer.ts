import AWCResizeObserver from './resize-observer.component.js';

export * from './resize-observer.component.js';
export default AWCResizeObserver;

AWCResizeObserver.define('awc-resize-observer');

declare global {
  interface HTMLElementTagNameMap {
    'awc-resize-observer': AWCResizeObserver;
  }
}
