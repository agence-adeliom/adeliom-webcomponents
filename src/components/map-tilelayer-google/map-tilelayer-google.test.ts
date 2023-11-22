import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapTilelayerGoogle from './map-tilelayer-google.component.js';

describe('<awc-map-tilelayer-google>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapTilelayerGoogle>(html` <awc-map-tilelayer-google></awc-map-tilelayer-google> `);

    expect(el).to.exist;
  });
});
