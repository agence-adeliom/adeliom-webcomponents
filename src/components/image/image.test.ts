import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCImage from './image.js';

describe('<awc-image>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCImage>(html` <awc-image></awc-image> `);

    expect(el).to.exist;
  });
});
