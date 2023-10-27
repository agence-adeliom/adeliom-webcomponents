import AWCAnimatedImage from './animated-image.component.js';

export * from './animated-image.component.js';
export default AWCAnimatedImage;

AWCAnimatedImage.define('awc-animated-image');

declare global {
  interface HTMLElementTagNameMap {
    'awc-animated-image': AWCAnimatedImage;
  }
}
