import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCTypography from "./typography";

describe('<awc-typography>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCTypography>(html` <awc-typography></awc-typography> `);

    expect(el).to.exist;
  });
});
