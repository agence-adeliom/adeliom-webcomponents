import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapPolyline from './map-polyline.component.js';

describe('<awc-map-polyline>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapPolyline>(html` <awc-map-polyline></awc-map-polyline> `);

    expect(el).to.exist;
  });
});
