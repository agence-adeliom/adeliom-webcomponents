import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCLottiePlayer from './lottie-player.component.js';

describe('<awc-lottie-player>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCLottiePlayer>(html` <awc-lottie-player></awc-lottie-player> `);

    expect(el).to.exist;
  });
});
