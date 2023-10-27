import AWCTag from './tag.component.js';

export * from './tag.component.js';
export default AWCTag;

AWCTag.define('awc-tag');

declare global {
  interface HTMLElementTagNameMap {
    'awc-tag': AWCTag;
  }
}
