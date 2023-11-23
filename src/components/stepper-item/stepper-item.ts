import AWCStepperItem from './stepper-item.component.js';

export * from './stepper-item.component.js';
export default AWCStepperItem;

AWCStepperItem.define('awc-stepper-item');

declare global {
  interface HTMLElementTagNameMap {
    'awc-stepper-item': AWCStepperItem;
  }
}
