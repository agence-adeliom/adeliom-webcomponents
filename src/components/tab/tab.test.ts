import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import type AWCIconButton from '../icon-button/icon-button';
import type AWCTab from './tab';
import type AWCTabGroup from '../tab-group/tab-group';

describe('<awc-tab>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<AWCTab>(html`
      <awc-tab-group>
        <awc-tab slot="nav">Test</awc-tab>
      </awc-tab-group>
    `);
    await expect(el).to.be.accessible();
  });

  it('should render default tab', async () => {
    const el = await fixture<AWCTab>(html` <awc-tab>Test</awc-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.getAttribute('role')).to.equal('tab');
    expect(el.getAttribute('aria-disabled')).to.equal('false');
    expect(el.getAttribute('aria-selected')).to.equal('false');
    expect(base.getAttribute('tabindex')).to.equal('0');
    expect(base.getAttribute('class')).to.equal(' tab ');
    expect(el.active).to.equal(false);
    expect(el.closable).to.equal(false);
    expect(el.disabled).to.equal(false);
  });

  it('should disable tab by attribute', async () => {
    const el = await fixture<AWCTab>(html` <awc-tab disabled>Test</awc-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.disabled).to.equal(true);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab tab--disabled ');
    expect(base.getAttribute('tabindex')).to.equal('-1');
  });

  it('should set active tab by attribute', async () => {
    const el = await fixture<AWCTab>(html` <awc-tab active>Test</awc-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(el.active).to.equal(true);
    expect(el.getAttribute('aria-selected')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' tab tab--active ');
    expect(base.getAttribute('tabindex')).to.equal('0');
  });

  it('should set closable by attribute', async () => {
    const el = await fixture<AWCTab>(html` <awc-tab closable>Test</awc-tab> `);

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;
    const closeButton = el.shadowRoot!.querySelector('[part~="close-button"]');

    expect(el.closable).to.equal(true);
    expect(base.getAttribute('class')).to.equal(' tab tab--closable ');
    expect(closeButton).not.to.be.null;
  });

  describe('focus', () => {
    it('should focus inner div', async () => {
      const el = await fixture<AWCTab>(html` <awc-tab>Test</awc-tab> `);

      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(base);
    });
  });

  describe('blur', () => {
    it('should blur inner div', async () => {
      const el = await fixture<AWCTab>(html` <awc-tab>Test</awc-tab> `);

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });

  describe('closable', () => {
    it('should emit close event when the close button is clicked', async () => {
      const tabGroup = await fixture<AWCTabGroup>(html`
        <awc-tab-group>
          <awc-tab slot="nav" panel="general" closable>General</awc-tab>
          <awc-tab slot="nav" panel="custom" closable>Custom</awc-tab>
          <awc-tab-panel name="general">This is the general tab panel.</awc-tab-panel>
          <awc-tab-panel name="custom">This is the custom tab panel.</awc-tab-panel>
        </awc-tab-group>
      `);
      const closeButton = tabGroup
        .querySelectorAll('awc-tab')[0]!
        .shadowRoot!.querySelector<AWCIconButton>('[part~="close-button"]')!;

      const handleClose = sinon.spy();
      const handleTabShow = sinon.spy();

      tabGroup.addEventListener('awc-close', handleClose, { once: true });
      // The awc-tab-show event shouldn't be emitted when clicking the close button
      tabGroup.addEventListener('awc-tab-show', handleTabShow);

      closeButton.click();
      await closeButton?.updateComplete;

      expect(handleClose.called).to.equal(true);
      expect(handleTabShow.called).to.equal(false);
    });
  });
});
