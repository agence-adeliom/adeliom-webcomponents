import '../../awc.js';
import { clickOnElement } from '../../internal/test.js';
import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type AWCRating from './rating.js';

describe('<awc-rating>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating label="Test"></awc-rating> `);
    await expect(el).to.be.accessible();

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('role')).to.equal('slider');
    expect(base.getAttribute('aria-disabled')).to.equal('false');
    expect(base.getAttribute('aria-readonly')).to.equal('false');
    expect(base.getAttribute('aria-valuenow')).to.equal('0');
    expect(base.getAttribute('aria-valuemin')).to.equal('0');
    expect(base.getAttribute('aria-valuemax')).to.equal('5');
    expect(base.getAttribute('tabindex')).to.equal('0');
    expect(base.getAttribute('class')).to.equal(' rating ');
  });

  it('should be readonly with the readonly attribute', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating label="Test" readonly></awc-rating> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-readonly')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' rating rating--readonly ');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating label="Test" disabled></awc-rating> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' rating rating--disabled ');
  });

  it('should set max value by attribute', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating label="Test" max="12"></awc-rating> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-valuemax')).to.equal('12');
  });

  it('should set selected value by attribute', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating label="Test" value="3"></awc-rating> `);
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-valuenow')).to.equal('3');
  });

  it('should emit awc-change when clicked', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating></awc-rating> `);
    const lastSymbol = el.shadowRoot!.querySelector<HTMLSpanElement>('.rating__symbol:last-child')!;
    const changeHandler = sinon.spy();

    el.addEventListener('awc-change', changeHandler);

    await clickOnElement(lastSymbol);
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(el.value).to.equal(5);
  });

  it('should emit awc-change when the value is changed with the keyboard', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating></awc-rating> `);
    const changeHandler = sinon.spy();

    el.addEventListener('awc-change', changeHandler);
    el.focus();
    await el.updateComplete;
    await sendKeys({ press: 'ArrowRight' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(el.value).to.equal(1);
  });

  it('should not emit awc-change when disabled', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating value="5" disabled></awc-rating> `);
    const lastSymbol = el.shadowRoot!.querySelector<HTMLSpanElement>('.rating__symbol:last-child')!;
    const changeHandler = sinon.spy();

    el.addEventListener('awc-change', changeHandler);

    await clickOnElement(lastSymbol);
    await el.updateComplete;

    expect(changeHandler).to.not.have.been.called;
    expect(el.value).to.equal(5);
  });

  it('should not emit awc-change when the value is changed programmatically', async () => {
    const el = await fixture<AWCRating>(html` <awc-rating label="Test" value="1"></awc-rating> `);
    el.addEventListener('awc-change', () => expect.fail('awc-change incorrectly emitted'));
    el.value = 5;
    await el.updateComplete;
  });

  describe('focus', () => {
    it('should focus inner div', async () => {
      const el = await fixture<AWCRating>(html` <awc-rating label="Test"></awc-rating> `);

      const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

      el.focus();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(base);
    });
  });

  describe('blur', () => {
    it('should blur inner div', async () => {
      const el = await fixture<AWCRating>(html` <awc-rating label="Test"></awc-rating> `);

      el.focus();
      await el.updateComplete;

      el.blur();
      await el.updateComplete;

      expect(el.shadowRoot!.activeElement).to.equal(null);
    });
  });
});
