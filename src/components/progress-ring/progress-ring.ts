import AWCProgressRing from './progress-ring.component.js';

export * from './progress-ring.component.js';
export default AWCProgressRing;

AWCProgressRing.define('awc-progress-ring');

declare global {
  interface HTMLElementTagNameMap {
    'awc-progress-ring': AWCProgressRing;
  }
}
