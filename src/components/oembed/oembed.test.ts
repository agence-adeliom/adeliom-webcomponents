import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCOembed from './oembed.js';

describe('<awc-oembed>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCOembed>(html` <awc-oembed></awc-oembed> `);

    expect(el).to.exist;
  });
});
