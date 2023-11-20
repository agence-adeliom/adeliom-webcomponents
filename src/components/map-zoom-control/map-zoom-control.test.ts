import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapZoomControl from './map-zoom-control.component.js';

describe('<awc-map-zoom-control>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapZoomControl>(html` <awc-map-zoom-control></awc-map-zoom-control> `);

    expect(el).to.exist;
  });
});
