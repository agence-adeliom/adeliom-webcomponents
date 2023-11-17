import AWCLottie from './lottie.component.js';

export * from './lottie.component.js';
export default AWCLottie;

AWCLottie.define('awc-lottie');

declare global {
  interface HTMLElementTagNameMap {
    'awc-lottie': AWCLottie;
  }
}
