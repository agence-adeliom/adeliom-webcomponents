import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCLottie from './lottie.component.js';

describe('<awc-lottie>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCLottie>(html` <awc-lottie></awc-lottie> `);

    expect(el).to.exist;
  });
});
