import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapPolygon from './map-polygon.component.js';

describe('<awc-map-polygon>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapPolygon>(html` <awc-map-polygon></awc-map-polygon> `);

    expect(el).to.exist;
  });
});
