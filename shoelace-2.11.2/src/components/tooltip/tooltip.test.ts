import '../../../dist/shoelace.js';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type AWCPopup from '../popup/popup';
import type AWCTooltip from './tooltip';

describe('<awc-tooltip>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip" open>
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    expect(body.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip">
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;

    expect(body.hidden).to.be.true;
  });

  it('should emit awc-show and awc-after-show when calling show()', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip">
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('awc-show', showHandler);
    el.addEventListener('awc-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit awc-hide and awc-after-hide when calling hide()', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip" open>
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('awc-hide', hideHandler);
    el.addEventListener('awc-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should emit awc-show and awc-after-show when setting open = true', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip">
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('awc-show', showHandler);
    el.addEventListener('awc-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit awc-hide and awc-after-hide when setting open = false', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip" open>
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('awc-hide', hideHandler);
    el.addEventListener('awc-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should hide the tooltip when tooltip is visible and disabled becomes true', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip" open>
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('awc-hide', hideHandler);
    el.addEventListener('awc-after-hide', afterHideHandler);
    el.disabled = true;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.true;
  });

  it('should show when open initially', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip" open>
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('[part~="body"]')!;
    await el.updateComplete;

    expect(body.hidden).to.be.false;
  });

  it('should not accept pointer events on the tooltip', async () => {
    const el = await fixture<SlTooltip>(html`
      <awc-tooltip content="This is a tooltip" open>
        <awc-button>Hover Me</awc-button>
      </awc-tooltip>
    `);
    const popup = el.shadowRoot!.querySelector<SlPopup>('awc-popup')!;

    expect(getComputedStyle(popup.popup).pointerEvents).to.equal('none');
  });
});
