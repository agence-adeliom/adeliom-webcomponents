import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapMarker from './map-marker.component.js';

describe('<awc-map-marker>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapMarker>(html` <awc-map-marker></awc-map-marker> `);

    expect(el).to.exist;
  });
});
