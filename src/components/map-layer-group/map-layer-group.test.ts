import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapLayerGroup from './map-layer-group.component.js';

describe('<awc-map-layer-group>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapLayerGroup>(html` <awc-map-layer-group></awc-map-layer-group> `);

    expect(el).to.exist;
  });
});
