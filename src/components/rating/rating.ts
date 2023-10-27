import AWCRating from './rating.component.js';

export * from './rating.component.js';
export default AWCRating;

AWCRating.define('awc-rating');

declare global {
  interface HTMLElementTagNameMap {
    'awc-rating': AWCRating;
  }
}
