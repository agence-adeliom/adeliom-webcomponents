import AWCLottiePlayer from './lottie-player.component.js';

export * from './lottie-player.component.js';
export default AWCLottiePlayer;

AWCLottiePlayer.define('awc-lottie-player');

declare global {
  interface HTMLElementTagNameMap {
    'awc-lottie-player': AWCLottiePlayer;
  }
}
