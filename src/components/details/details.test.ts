import '../../../dist/awc.js';
// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type { AWCHideEvent } from '../../events/awc-hide';
import type { AWCShowEvent } from '../../events/awc-show';
import type AWCDetails from './details';

describe('<awc-details>', () => {
  describe('accessibility', () => {
    it('should be accessible when closed', async () => {
      const details = await fixture<AWCDetails>(html`<awc-details summary="Test"> Test text </awc-details>`);

      await expect(details).to.be.accessible();
    });

    it('should be accessible when open', async () => {
      const details = await fixture<AWCDetails>(html`<awc-details open summary="Test">Test text</awc-details>`);

      await expect(details).to.be.accessible();
    });
  });

  it('should be visible with the open attribute', async () => {
    const el = await fixture<AWCDetails>(html`
      <awc-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;

    expect(parseInt(getComputedStyle(body).height)).to.be.greaterThan(0);
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<AWCDetails>(html`
      <awc-details summary="click me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;

    expect(parseInt(getComputedStyle(body).height)).to.equal(0);
  });

  it('should emit awc-show and awc-after-show when calling show()', async () => {
    const el = await fixture<AWCDetails>(html`
      <awc-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('awc-show', showHandler);
    el.addEventListener('awc-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
  });

  it('should emit awc-hide and awc-after-hide when calling hide()', async () => {
    const el = await fixture<AWCDetails>(html`
      <awc-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>
    `);
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('awc-hide', hideHandler);
    el.addEventListener('awc-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should emit awc-show and awc-after-show when setting open = true', async () => {
    const el = await fixture<AWCDetails>(html`
      <awc-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
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
    const el = await fixture<AWCDetails>(html`
      <awc-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>
    `);
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('awc-hide', hideHandler);
    el.addEventListener('awc-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should not open when preventing awc-show', async () => {
    const el = await fixture<AWCDetails>(html`
      <awc-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>
    `);
    const showHandler = sinon.spy((event: AWCShowEvent) => event.preventDefault());

    el.addEventListener('awc-show', showHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(el.open).to.be.false;
  });

  it('should not close when preventing awc-hide', async () => {
    const el = await fixture<AWCDetails>(html`
      <awc-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </awc-details>
    `);
    const hideHandler = sinon.spy((event: AWCHideEvent) => event.preventDefault());

    el.addEventListener('awc-hide', hideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(el.open).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<AWCDetails>(html`
      <div>
        <awc-details>
          <div style="height: 200px;"></div>
        </awc-details>
        <awc-details>
          <div style="height: 400px;"></div>
        </awc-details>
      </div>
    `);
    const first = el.querySelectorAll('awc-details')[0];
    const second = el.querySelectorAll('awc-details')[1];
    const firstBody = first.shadowRoot!.querySelector('.details__body')!;
    const secondBody = second.shadowRoot!.querySelector('.details__body')!;

    await first.show();
    await second.show();

    expect(firstBody.clientHeight).to.equal(232); // 200 + 16px + 16px (vertical padding)
    expect(secondBody.clientHeight).to.equal(432); // 400 + 16px + 16px (vertical padding)
  });
});
