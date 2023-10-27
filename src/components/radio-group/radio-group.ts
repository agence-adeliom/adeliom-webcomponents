import AWCRadioGroup from './radio-group.component.js';

export * from './radio-group.component.js';
export default AWCRadioGroup;

AWCRadioGroup.define('awc-radio-group');

declare global {
  interface HTMLElementTagNameMap {
    'awc-radio-group': AWCRadioGroup;
  }
}
