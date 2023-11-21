import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapSvgOverlay from './map-svg-overlay.component.js';

describe('<awc-map-svg-overlay>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapSvgOverlay>(html` <awc-map-svg-overlay></awc-map-svg-overlay> `);

    expect(el).to.exist;
  });
});
