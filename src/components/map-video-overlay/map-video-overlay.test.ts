import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapVideoOverlay from './map-video-overlay.component.js';

describe('<awc-map-video-overlay>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapVideoOverlay>(html` <awc-map-video-overlay></awc-map-video-overlay> `);

    expect(el).to.exist;
  });
});
