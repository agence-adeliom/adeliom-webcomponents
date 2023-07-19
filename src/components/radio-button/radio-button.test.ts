import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCRadioButton from './radio-button';
import type AWCRadioGroup from '../radio-group/radio-group';

describe('<awc-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group value="1">
        <awc-radio-button id="radio-1" value="1"></awc-radio-button>
        <awc-radio-button id="radio-2" value="2" disabled></awc-radio-button>
      </awc-radio-group>
    `);
    const radio1 = radioGroup.querySelector<AWCRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<AWCRadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
