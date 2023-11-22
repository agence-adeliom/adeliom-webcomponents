import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<awc-popup>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <awc-popup></awc-popup> `);

    expect(el).to.exist;
  });
});
