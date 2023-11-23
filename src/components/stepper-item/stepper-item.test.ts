import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCStepperItem from './stepper-item.component.js';

describe('<awc-stepper-item>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCStepperItem>(html` <awc-stepper-item></awc-stepper-item> `);

    expect(el).to.exist;
  });
});
