import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<awc-block>', () => {
  it('should render a layout', async () => {
    const el = await fixture(html` <awc-block></awc-block> `);

    expect(el).to.exist;
  });
});
