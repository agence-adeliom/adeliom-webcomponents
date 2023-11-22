import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapGeolocation from './map-geolocation.component.js';

describe('<awc-map-geolocation>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapGeolocation>(html` <awc-map-geolocation></awc-map-geolocation> `);

    expect(el).to.exist;
  });
});
