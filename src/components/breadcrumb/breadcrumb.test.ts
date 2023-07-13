import '../../../dist/awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import type AWCBreadcrumb from './breadcrumb.js';

// The default link color just misses AA contrast, but the next step up is way too dark. Maybe we can solve this in the
// future with a prefers-contrast media query.
const ignoredRules = ['color-contrast'];

describe('<awc-breadcrumb>', () => {
  let el: AWCBreadcrumb;

  describe('when provided a standard list of el-breadcrumb-item children and no parameters', () => {
    before(async () => {
      el = await fixture<AWCBreadcrumb>(html`
        <awc-breadcrumb>
          <awc-breadcrumb-item>Catalog</awc-breadcrumb-item>
          <awc-breadcrumb-item>Clothing</awc-breadcrumb-item>
          <awc-breadcrumb-item>Women's</awc-breadcrumb-item>
          <awc-breadcrumb-item>Shirts &amp; Tops</awc-breadcrumb-item>
        </awc-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should render awc-icon as separator', () => {
      expect(el.querySelectorAll('awc-icon').length).to.eq(4);
    });

    it('should attach aria-current "page" on the last breadcrumb item.', () => {
      const breadcrumbItems = el.querySelectorAll('awc-breadcrumb-item');
      const lastNode = breadcrumbItems[3];
      expect(lastNode).attribute('aria-current', 'page');
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "separator" to support Custom Separators', () => {
    before(async () => {
      el = await fixture<AWCBreadcrumb>(html`
        <awc-breadcrumb>
          <span class="replacement-separator" slot="separator">/</span>
          <awc-breadcrumb-item>First</awc-breadcrumb-item>
          <awc-breadcrumb-item>Second</awc-breadcrumb-item>
          <awc-breadcrumb-item>Third</awc-breadcrumb-item>
        </awc-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });

    it('should accept "separator" as an assigned child in the shadow root', () => {
      const slot = el.shadowRoot!.querySelector<HTMLSlotElement>('slot[name=separator]')!;
      const childNodes = slot.assignedNodes({ flatten: true });

      expect(childNodes.length).to.eq(1);
    });

    it('should replace the awc-icon separator with the provided separator', () => {
      expect(el.querySelectorAll('.replacement-separator').length).to.eq(4);
      expect(el.querySelectorAll('awc-icon').length).to.eq(0);
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "prefix" to support prefix icons', () => {
    before(async () => {
      el = await fixture<AWCBreadcrumb>(html`
        <awc-breadcrumb>
          <awc-breadcrumb-item>
            <span class="prefix-example" slot="prefix">/</span>
            Home
          </awc-breadcrumb-item>
          <awc-breadcrumb-item>First</awc-breadcrumb-item>
          <awc-breadcrumb-item>Second</awc-breadcrumb-item>
          <awc-breadcrumb-item>Third</awc-breadcrumb-item>
        </awc-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });

  describe('when provided a standard list of el-breadcrumb-item children and an element in the slot "suffix" to support suffix icons', () => {
    before(async () => {
      el = await fixture<AWCBreadcrumb>(html`
        <awc-breadcrumb>
          <awc-breadcrumb-item>First</awc-breadcrumb-item>
          <awc-breadcrumb-item>Second</awc-breadcrumb-item>
          <awc-breadcrumb-item>Third</awc-breadcrumb-item>
          <awc-breadcrumb-item>
            <span class="prefix-example" slot="suffix">/</span>
            Security
          </awc-breadcrumb-item>
        </awc-breadcrumb>
      `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
