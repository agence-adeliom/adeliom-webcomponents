import AWCCard from './card.component.js';

export * from './card.component.js';
export default AWCCard;

AWCCard.define('awc-card');

declare global {
  interface HTMLElementTagNameMap {
    'awc-card': AWCCard;
  }
}
