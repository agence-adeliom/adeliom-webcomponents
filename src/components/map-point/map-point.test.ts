import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapPoint from './map-point.component.js';

describe('<awc-map-point>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapPoint>(html` <awc-map-point></awc-map-point> `);

    expect(el).to.exist;
  });
});
