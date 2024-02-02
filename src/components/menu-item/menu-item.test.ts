import '../../awc.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type { AWCSelectEvent } from '../../events/awc-select.js';
import type AWCMenuItem from './menu-item.js';

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

  it('should pass accessibility tests when using a submenu', async () => {
    const el = await fixture<AWCMenuItem>(html`
      <awc-menu>
        <awc-menu-item>
          Submenu
          <awc-menu slot="submenu">
            <awc-menu-item>Submenu Item 1</awc-menu-item>
            <awc-menu-item>Submenu Item 2</awc-menu-item>
          </awc-menu>
        </awc-menu-item>
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

  it('should not render a awc-popup if the slot="submenu" attribute is missing, but the slot should exist in the component and be hidden.', async () => {
    const menu = await fixture<AWCMenuItem>(html`
      <awc-menu>
        <awc-menu-item>
          Item 1
          <awc-menu>
            <awc-menu-item> Nested Item 1 </awc-menu-item>
          </awc-menu>
        </awc-menu-item>
      </awc-menu>
    `);

    const menuItem: HTMLElement = menu.querySelector('awc-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('awc-popup')).to.be.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.true;
  });

  it('should render an awc-popup if the slot="submenu" attribute is present', async () => {
    const menu = await fixture<AWCMenuItem>(html`
      <awc-menu>
        <awc-menu-item id="test">
          Item 1
          <awc-menu slot="submenu">
            <awc-menu-item> Nested Item 1 </awc-menu-item>
          </awc-menu>
        </awc-menu-item>
      </awc-menu>
    `);

    const menuItem = menu.querySelector('awc-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('awc-popup')).to.be.not.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.false;
  });

  it('should focus on first menuitem of submenu if ArrowRight is pressed on parent menuitem', async () => {
    const menu = await fixture<AWCMenuItem>(html`
      <awc-menu>
        <awc-menu-item id="item-1">
          Submenu
          <awc-menu slot="submenu">
            <awc-menu-item value="submenu-item-1"> Nested Item 1 </awc-menu-item>
          </awc-menu>
        </awc-menu-item>
      </awc-menu>
    `);

    const selectHandler = sinon.spy((event: AWCSelectEvent) => {
      const item = event.detail.item as AWCMenuItem;
      expect(item.value).to.equal('submenu-item-1');
    });
    menu.addEventListener('awc-select', selectHandler);

    const submenu = menu.querySelector('awc-menu-item');
    submenu.focus();
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowRight' });
    await menu.updateComplete;
    await sendKeys({ press: 'Enter' });
    await menu.updateComplete;
    // Once for each menu element.
    expect(selectHandler).to.have.been.calledTwice;
  });

  it('should focus on outer menu if ArrowRight is pressed on nested menuitem', async () => {
    const menu = await fixture<AWCMenuItem>(html`
      <awc-menu>
        <awc-menu-item value="outer-item-1">
          Submenu
          <awc-menu slot="submenu">
            <awc-menu-item value="inner-item-1"> Nested Item 1 </awc-menu-item>
          </awc-menu>
        </awc-menu-item>
      </awc-menu>
    `);

    const focusHandler = sinon.spy((event: FocusEvent) => {
      expect(event.target.value).to.equal('outer-item-1');
      expect(event.relatedTarget.value).to.equal('inner-item-1');
    });

    const outerItem = menu.querySelector('awc-menu-item');
    outerItem.focus();
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowRight' });

    outerItem.addEventListener('focus', focusHandler);
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowLeft' });
    await menu.updateComplete;
    expect(focusHandler).to.have.been.calledOnce;
  });
});
