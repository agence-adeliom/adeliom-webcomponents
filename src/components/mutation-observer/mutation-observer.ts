import AWCMutationObserver from './mutation-observer.component.js';

export * from './mutation-observer.component.js';
export default AWCMutationObserver;

AWCMutationObserver.define('awc-mutation-observer');

declare global {
  interface HTMLElementTagNameMap {
    'awc-mutation-observer': AWCMutationObserver;
  }
}
