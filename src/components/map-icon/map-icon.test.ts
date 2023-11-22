import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapIcon from './map-icon.component.js';

describe('<awc-map-icon>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapIcon>(html` <awc-map-icon></awc-map-icon> `);

    expect(el).to.exist;
  });
});
