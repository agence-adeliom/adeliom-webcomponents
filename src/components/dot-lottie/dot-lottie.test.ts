import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCDotLottie from "./dot-lottie.component.js";

describe('<awc-dot-lottie>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCDotLottie>(html` <awc-dot-lottie></awc-dot-lottie> `);

    expect(el).to.exist;
  });
});
