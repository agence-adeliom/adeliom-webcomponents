import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCMapDivicon from './map-divicon.component.js';

describe('<awc-map-divicon>', () => {
  it('should render a component', async () => {
    const el = await fixture<AWCMapDivicon>(html` <awc-map-divicon></awc-map-divicon> `);

    expect(el).to.exist;
  });
});
