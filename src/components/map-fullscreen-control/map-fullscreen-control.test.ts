import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapFullscreenControl from './map-fullscreen-control.component.js';

describe('<awc-map-fullscreen-control>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapFullscreenControl>(html`
      <awc-map-fullscreen-control></awc-map-fullscreen-control>
    `);

    expect(el).to.exist;
  });
});
