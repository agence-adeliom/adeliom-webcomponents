import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapMarkerClusterGroup from './map-marker-cluster-group.component.js';

describe('<awc-map-marker-cluster-group>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapMarkerClusterGroup>(html`
      <awc-map-marker-cluster-group></awc-map-marker-cluster-group>
    `);

    expect(el).to.exist;
  });
});
