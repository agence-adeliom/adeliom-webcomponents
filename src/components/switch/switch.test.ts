import '../../awc.js';
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type AWCSwitch from './switch.js';

describe('<awc-switch>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch>Switch</awc-switch> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch></awc-switch> `);

    expect(el.name).to.equal('');
    expect(el.value).to.be.undefined;
    expect(el.title).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.required).to.be.false;
    expect(el.checked).to.be.false;
    expect(el.defaultChecked).to.be.false;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch title="Test"></awc-switch> `);
    const input = el.shadowRoot!.querySelector('input')!;

    expect(input.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch disabled></awc-switch> `);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('input')!;

    expect(input.disabled).to.be.true;
  });

  it('should be valid by default', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch></awc-switch> `);

    expect(el.checkValidity()).to.be.true;
  });

  it('should emit awc-change and awc-input when clicked', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch></awc-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('awc-change', changeHandler);
    el.addEventListener('awc-input', inputHandler);
    el.click();
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit awc-change when toggled with spacebar', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch></awc-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('awc-change', changeHandler);
    el.addEventListener('awc-input', inputHandler);
    el.focus();
    await sendKeys({ press: ' ' });

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit awc-change and awc-input when toggled with the right arrow', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch></awc-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('awc-change', changeHandler);
    el.addEventListener('awc-input', inputHandler);
    el.focus();
    await sendKeys({ press: 'ArrowRight' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.true;
  });

  it('should emit awc-change and awc-input when toggled with the left arrow', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch checked></awc-switch> `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    el.addEventListener('awc-change', changeHandler);
    el.addEventListener('awc-input', inputHandler);
    el.focus();
    await sendKeys({ press: 'ArrowLeft' });
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(el.checked).to.be.false;
  });

  it('should not emit awc-change or awc-input when checked is set by JavaScript', async () => {
    const el = await fixture<AWCSwitch>(html` <awc-switch></awc-switch> `);
    el.addEventListener('awc-change', () => expect.fail('awc-change incorrectly emitted'));
    el.addEventListener('awc-input', () => expect.fail('awc-change incorrectly emitted'));
    el.checked = true;
    await el.updateComplete;
    el.checked = false;
    await el.updateComplete;
  });

  it('should hide the native input with the correct positioning to scroll correctly when contained in an overflow', async () => {
    //
    // See: https://github.com/awc-style/awc/issues/1169
    //
    const el = await fixture<AWCSwitch>(html` <awc-switch></awc-switch> `);
    const label = el.shadowRoot!.querySelector('.switch')!;
    const input = el.shadowRoot!.querySelector('.switch__input')!;

    const labelPosition = getComputedStyle(label).position;
    const inputPosition = getComputedStyle(input).position;

    expect(labelPosition).to.equal('relative');
    expect(inputPosition).to.equal('absolute');
  });

  describe('when submitting a form', () => {
    it('should submit the correct value when a value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-switch name="a" value="1" checked></awc-switch>
          <awc-button type="submit">Submit</awc-button>
        </form>
      `);
      const button = form.querySelector('awc-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('1');
    });

    it('should submit "on" when no value is provided', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-switch name="a" checked></awc-switch>
          <awc-button type="submit">Submit</awc-button>
        </form>
      `);
      const button = form.querySelector('awc-button')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => {
        formData = new FormData(form);
        event.preventDefault();
      });
      let formData: FormData;

      form.addEventListener('submit', submitHandler);
      button.click();

      await waitUntil(() => submitHandler.calledOnce);

      expect(formData!.get('a')).to.equal('on');
    });

    it('should show a constraint validation error when setCustomValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-switch name="a" value="1" checked></awc-switch>
          <awc-button type="submit">Submit</awc-button>
        </form>
      `);
      const button = form.querySelector('awc-button')!;
      const slSwitch = form.querySelector('awc-switch')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      slSwitch.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();
      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });

    it('should be invalid when required and unchecked', async () => {
      const slSwitch = await fixture<HTMLFormElement>(html` <awc-switch required></awc-switch> `);
      expect(slSwitch.checkValidity()).to.be.false;
    });

    it('should be valid when required and checked', async () => {
      const slSwitch = await fixture<HTMLFormElement>(html` <awc-switch required checked></awc-switch> `);
      expect(slSwitch.checkValidity()).to.be.true;
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <awc-button type="submit">Submit</awc-button>
          </form>
          <awc-switch form="f" name="a" value="1" checked></awc-switch>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('1');
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html` <form novalidate><awc-switch required></awc-switch></form> `);
      const slSwitch = el.querySelector<AWCSwitch>('awc-switch')!;

      expect(slSwitch.hasAttribute('data-required')).to.be.true;
      expect(slSwitch.hasAttribute('data-optional')).to.be.false;
      expect(slSwitch.hasAttribute('data-invalid')).to.be.true;
      expect(slSwitch.hasAttribute('data-valid')).to.be.false;
      expect(slSwitch.hasAttribute('data-user-invalid')).to.be.false;
      expect(slSwitch.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-switch name="a" value="1" checked></awc-switch>
          <awc-button type="reset">Reset</awc-button>
        </form>
      `);
      const button = form.querySelector('awc-button')!;
      const switchEl = form.querySelector('awc-switch')!;
      switchEl.checked = false;

      await switchEl.updateComplete;
      setTimeout(() => button.click());

      await oneEvent(form, 'reset');
      await switchEl.updateComplete;

      expect(switchEl.checked).to.true;

      switchEl.defaultChecked = false;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await switchEl.updateComplete;

      expect(switchEl.checked).to.false;
    });
  });

  it('should not jump the page to the bottom when focusing a switch at the bottom of an element with overflow: auto;', async () => {
    // https://github.com/awc-style/awc/issues/1169
    const el = await fixture<HTMLDivElement>(html`
      <div style="display: flex; flex-direction: column; overflow: auto; max-height: 400px;">
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
        <awc-switch>Switch</awc-switch>
      </div>
      ;
    `);

    const switches = el.querySelectorAll<AWCSwitch>('awc-switch');
    const lastSwitch = switches[switches.length - 1];

    expect(window.scrollY).to.equal(0);
    // Without these 2 timeouts, tests will pass unexpectedly in Safari.
    await aTimeout(10);
    lastSwitch.focus();
    await aTimeout(10);
    expect(window.scrollY).to.equal(0);
  });

  runFormControlBaseTests('awc-switch');
});
