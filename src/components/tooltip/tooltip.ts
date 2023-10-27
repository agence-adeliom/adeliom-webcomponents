import AWCTooltip from './tooltip.component.js';

export * from './tooltip.component.js';
export default AWCTooltip;

AWCTooltip.define('awc-tooltip');

declare global {
  interface HTMLElementTagNameMap {
    'awc-tooltip': AWCTooltip;
  }
}
