import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCRadio from './radio';
import type AWCRadioGroup from '../radio-group/radio-group';

describe('<awc-radio>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<SlRadioGroup>(html`
      <awc-radio-group value="1">
        <awc-radio id="radio-1" value="1"></awc-radio>
        <awc-radio id="radio-2" value="2" disabled></awc-radio>
      </awc-radio-group>
    `);
    const radio1 = radioGroup.querySelector<SlRadio>('#radio-1')!;
    const radio2 = radioGroup.querySelector<SlRadio>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });
});
