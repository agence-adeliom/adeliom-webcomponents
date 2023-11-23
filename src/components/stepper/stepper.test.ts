import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCStepper from './stepper.component.js';

describe('<awc-stepper>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCStepper>(html` <awc-stepper></awc-stepper> `);

    expect(el).to.exist;
  });
});
