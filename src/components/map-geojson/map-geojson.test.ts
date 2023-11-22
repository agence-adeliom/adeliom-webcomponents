import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapGeojson from './map-geojson.component.js';

describe('<awc-map-geojson>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapGeojson>(html` <awc-map-geojson></awc-map-geojson> `);

    expect(el).to.exist;
  });
});
