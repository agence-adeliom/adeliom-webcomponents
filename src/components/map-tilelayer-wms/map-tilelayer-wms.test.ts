import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapTilelayerWMS from './map-tilelayer-wms.component.js';

describe('<awc-map-tilelayer-wms>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapTilelayerWMS>(html` <awc-map-tilelayer-wms></awc-map-tilelayer-wms> `);

    expect(el).to.exist;
  });
});
