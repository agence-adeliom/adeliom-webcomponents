import AWCImage from './image.component.js';

export * from './image.component.js';
export default AWCImage;

AWCImage.define('awc-image');

declare global {
  interface HTMLElementTagNameMap {
    'awc-image': AWCImage;
  }
}
