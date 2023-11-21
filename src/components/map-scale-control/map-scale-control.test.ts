import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapScaleControl from './map-scale-control.component.js';

describe('<awc-map-scale-control>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapScaleControl>(html` <awc-map-scale-control></awc-map-scale-control> `);

    expect(el).to.exist;
  });
});
