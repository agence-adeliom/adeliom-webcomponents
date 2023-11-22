import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMenuLabel from './menu-label';

describe('<awc-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<AWCMenuLabel>(html` <awc-menu-label>Test</awc-menu-label> `);
    await expect(el).to.be.accessible();
  });
});
