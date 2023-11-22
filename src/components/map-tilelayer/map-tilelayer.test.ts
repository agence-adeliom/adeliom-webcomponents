import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapTilelayer from './map-tilelayer.component.js';

describe('<awc-map-tilelayer>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapTilelayer>(html` <awc-map-tilelayer></awc-map-tilelayer> `);

    expect(el).to.exist;
  });
});
