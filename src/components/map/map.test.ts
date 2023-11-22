import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMap from './map.component.js';

describe('<awc-map>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMap>(html` <awc-map></awc-map> `);

    expect(el).to.exist;
  });
});
