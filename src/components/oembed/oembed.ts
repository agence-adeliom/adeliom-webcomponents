import AWCOembed from './oembed.component.js';

export * from './oembed.component.js';
export default AWCOembed;

AWCOembed.define('awc-oembed');

declare global {
  interface HTMLElementTagNameMap {
    'awc-oembed': AWCOembed;
  }
}
