import AWCProgressBar from './progress-bar.component.js';

export * from './progress-bar.component.js';
export default AWCProgressBar;

AWCProgressBar.define('awc-progress-bar');

declare global {
  interface HTMLElementTagNameMap {
    'awc-progress-bar': AWCProgressBar;
  }
}
