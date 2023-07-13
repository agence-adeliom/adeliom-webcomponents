import '../../../dist/awc.js';
import { clickOnElement } from '../../internal/test.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type AWCMenuItem from './menu-item';

describe('<awc-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<AWCMenuItem>(html`
      <awc-menu>
        <awc-menu-item>Item 1</awc-menu-item>
        <awc-menu-item>Item 2</awc-menu-item>
        <awc-menu-item>Item 3</awc-menu-item>
        <awc-divider></awc-divider>
        <awc-menu-item type="checkbox" checked>Checked</awc-menu-item>
        <awc-menu-item type="checkbox">Unchecked</awc-menu-item>
      </awc-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<AWCMenuItem>(html` <awc-menu-item>Test</awc-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<AWCMenuItem>(html` <awc-menu-item disabled>Test</awc-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  it('should not emit the click event when disabled', async () => {
    const el = await fixture<AWCMenuItem>(html` <awc-menu-item disabled>Test</awc-menu-item> `);
    const clickHandler = sinon.spy();
    el.addEventListener('click', clickHandler);
    await clickOnElement(el);
    await el.updateComplete;

    expect(clickHandler).to.not.have.been.called;
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<AWCMenuItem>(html` <awc-menu-item>Test</awc-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<AWCMenuItem>(html` <awc-menu-item>Text</awc-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<AWCMenuItem>(html`
      <awc-menu>
        <awc-menu-item inert>Item 1</awc-menu-item>
        <awc-menu-item>Item 2</awc-menu-item>
        <awc-menu-item>Item 3</awc-menu-item>
      </awc-menu>
    `);
    const item1 = menu.querySelector('awc-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });
});
