import AWCVisuallyHidden from './visually-hidden.component.js';

export * from './visually-hidden.component.js';
export default AWCVisuallyHidden;

AWCVisuallyHidden.define('awc-visually-hidden');

declare global {
  interface HTMLElementTagNameMap {
    'awc-visually-hidden': AWCVisuallyHidden;
  }
}
