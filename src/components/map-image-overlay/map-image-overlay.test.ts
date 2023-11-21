import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapImageOverlay from './map-image-overlay.component.js';

describe('<awc-map-image-overlay>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapImageOverlay>(html` <awc-map-image-overlay></awc-map-image-overlay> `);

    expect(el).to.exist;
  });
});
