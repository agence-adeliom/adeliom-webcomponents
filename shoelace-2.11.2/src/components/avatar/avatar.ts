import AWCAvatar from './avatar.component.js';

export * from './avatar.component.js';
export default AWCAvatar;

AWCAvatar.define('awc-avatar');

declare global {
  interface HTMLElementTagNameMap {
    'awc-avatar': AWCAvatar;
  }
}
