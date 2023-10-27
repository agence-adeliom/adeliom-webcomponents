import AWCDetails from './details.component.js';

export * from './details.component.js';
export default AWCDetails;

AWCDetails.define('awc-details');

declare global {
  interface HTMLElementTagNameMap {
    'awc-details': AWCDetails;
  }
}
