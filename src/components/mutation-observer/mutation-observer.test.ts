import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<awc-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <awc-mutation-observer></awc-mutation-observer> `);

    expect(el).to.exist;
  });
});
