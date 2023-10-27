import AWCTypography from './typography.component.js';

export * from './typography.component.js';
export default AWCTypography;

AWCTypography.define('awc-typography');

declare global {
  interface HTMLElementTagNameMap {
    'awc-typography': AWCTypography;
  }
}
