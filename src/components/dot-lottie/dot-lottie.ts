import AWCDotLottie from './dot-lottie.component.js';

export * from './dot-lottie.component.js';
export default AWCDotLottie;

AWCDotLottie.define('awc-dot-lottie');

declare global {
  interface HTMLElementTagNameMap {
    'awc-dot-lottie': AWCDotLottie;
  }
}
