import AWCStepper from './stepper.component.js';

export * from './stepper.component.js';
export default AWCStepper;

AWCStepper.define('awc-stepper');

declare global {
  interface HTMLElementTagNameMap {
    'awc-stepper': AWCStepper;
  }
}
