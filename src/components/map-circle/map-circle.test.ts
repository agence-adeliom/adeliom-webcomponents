import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapCircle from './map-circle.component.js';

describe('<awc-map-circle>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapCircle>(html` <awc-map-circle></awc-map-circle> `);

    expect(el).to.exist;
  });
});
