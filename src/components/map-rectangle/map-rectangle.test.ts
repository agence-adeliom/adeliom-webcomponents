import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapRectangle from './map-rectangle.component.js';

describe('<awc-map-rectangle>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapRectangle>(html` <awc-map-rectangle></awc-map-rectangle> `);

    expect(el).to.exist;
  });
});
