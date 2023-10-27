import AWCRelativeTime from './relative-time.component.js';

export * from './relative-time.component.js';
export default AWCRelativeTime;

AWCRelativeTime.define('awc-relative-time');

declare global {
  interface HTMLElementTagNameMap {
    'awc-relative-time': AWCRelativeTime;
  }
}
