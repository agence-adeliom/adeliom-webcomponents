import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCCopyButton from './copy-button.js';

// We use aria-live to announce labels via tooltips
const ignoredRules = ['button-name'];

describe('<awc-copy-button>', () => {
  let el: AWCCopyButton;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture(html`<awc-copy-button value="something"></awc-copy-button> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
