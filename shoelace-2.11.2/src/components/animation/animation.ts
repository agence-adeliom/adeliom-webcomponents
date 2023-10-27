import AWCAnimation from './animation.component.js';

export * from './animation.component.js';
export default AWCAnimation;

AWCAnimation.define('awc-animation');

declare global {
  interface HTMLElementTagNameMap {
    'awc-animation': AWCAnimation;
  }
}
