import '../../awc.js';
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test.js';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form.js';
import sinon from 'sinon';
import type AWCOption from '../option/option.js';
import type AWCSelect from './select.js';

describe('<awc-select>', () => {
  describe('accessibility', () => {
    it('should pass accessibility tests when closed', async () => {
      const select = await fixture<AWCSelect>(html`
        <awc-select label="Select one">
          <awc-option value="option-1">Option 1</awc-option>
          <awc-option value="option-2">Option 2</awc-option>
          <awc-option value="option-3">Option 3</awc-option>
        </awc-select>
      `);
      await expect(select).to.be.accessible();
    });

    it('should pass accessibility tests when open', async () => {
      const select = await fixture<AWCSelect>(html`
        <awc-select label="Select one">
          <awc-option value="option-1">Option 1</awc-option>
          <awc-option value="option-2">Option 2</awc-option>
          <awc-option value="option-3">Option 3</awc-option>
        </awc-select>
      `);

      await select.show();

      await expect(select).to.be.accessible();
    });
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select disabled>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    expect(el.displayInput.disabled).to.be.true;
  });

  it('should show a placeholder when no options are selected', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select placeholder="Select one">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select one');
  });

  it('should show a placeholder when no options are selected and multiple is set', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select placeholder="Select a few" multiple>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLInputElement>('[part~="display-input"]')!;

    expect(getComputedStyle(displayInput).opacity).to.not.equal('0');
    expect(displayInput.placeholder).to.equal('Select a few');
  });

  it('should not allow selection when the option is disabled', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select value="option-1">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2" disabled>Option 2</awc-option>
      </awc-select>
    `);
    const disabledOption = el.querySelector('awc-option[disabled]')!;

    await el.show();
    await clickOnElement(disabledOption);
    await el.updateComplete;

    expect(el.value).to.equal('option-1');
  });

  it('should focus the select when clicking on the label', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select label="Select One">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('awc-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit awc-change when the value is changed with the mouse', async () => {
      const el = await fixture<AWCSelect>(html`
        <awc-select value="option-1">
          <awc-option value="option-1">Option 1</awc-option>
          <awc-option value="option-2">Option 2</awc-option>
          <awc-option value="option-3">Option 3</awc-option>
        </awc-select>
      `);
      const secondOption = el.querySelectorAll<AWCOption>('awc-option')[1];
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('awc-change', changeHandler);
      el.addEventListener('awc-input', inputHandler);

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-2');
    });

    it('should emit awc-change and awc-input when the value is changed with the keyboard', async () => {
      const el = await fixture<AWCSelect>(html`
        <awc-select value="option-1">
          <awc-option value="option-1">Option 1</awc-option>
          <awc-option value="option-2">Option 2</awc-option>
          <awc-option value="option-3">Option 3</awc-option>
        </awc-select>
      `);
      const changeHandler = sinon.spy();
      const inputHandler = sinon.spy();

      el.addEventListener('awc-change', changeHandler);
      el.addEventListener('awc-input', inputHandler);

      el.focus();
      await el.updateComplete;
      await sendKeys({ press: ' ' }); // open the dropdown
      await aTimeout(500); // wait for the dropdown to open
      await sendKeys({ press: 'ArrowDown' }); // move selection to the second option
      await el.updateComplete;
      await sendKeys({ press: 'ArrowDown' }); // move selection to the third option
      await el.updateComplete;
      await sendKeys({ press: 'Enter' }); // commit the selection
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledOnce;
      expect(el.value).to.equal('option-3');
    });

    it('should not emit awc-change or awc-input when the value is changed programmatically', async () => {
      const el = await fixture<AWCSelect>(html`
        <awc-select value="option-1">
          <awc-option value="option-1">Option 1</awc-option>
          <awc-option value="option-2">Option 2</awc-option>
          <awc-option value="option-3">Option 3</awc-option>
        </awc-select>
      `);

      el.addEventListener('awc-change', () => expect.fail('awc-change should not be emitted'));
      el.addEventListener('awc-input', () => expect.fail('awc-input should not be emitted'));
      el.value = 'option-2';

      await el.updateComplete;
    });

    it('should emit awc-change and awc-input with the correct validation message when the value changes', async () => {
      const el = await fixture<AWCSelect>(html`
        <awc-select required>
          <awc-option value="option-1">Option 1</awc-option>
          <awc-option value="option-2">Option 2</awc-option>
          <awc-option value="option-3">Option 3</awc-option>
        </awc-select>
      `);
      const option2 = el.querySelectorAll('awc-option')[1];
      const handler = sinon.spy((event: CustomEvent) => {
        if (el.validationMessage) {
          expect.fail(`Validation message should be empty when ${event.type} is emitted and a value is set`);
        }
      });

      el.addEventListener('awc-change', handler);
      el.addEventListener('awc-input', handler);

      await clickOnElement(el);
      await aTimeout(500);
      await clickOnElement(option2);
      await el.updateComplete;

      expect(handler).to.be.calledTwice;
    });
  });

  it('should open the listbox when any letter key is pressed with awc-select is on focus', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;

    el.focus();
    await sendKeys({ press: 'r' });
    await el.updateComplete;

    expect(displayInput.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should not open the listbox when ctrl + R is pressed with awc-select is on focus', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;

    el.focus();
    await sendKeys({ down: 'Control' });
    await sendKeys({ press: 'r' });
    await sendKeys({ up: 'Control' });
    await el.updateComplete;
    expect(displayInput.getAttribute('aria-expanded')).to.equal('false');
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <awc-select>
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </form>
      `);
      const select = el.querySelector<AWCSelect>('awc-select')!;
      expect(select.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <awc-select required>
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </form>
      `);
      const select = el.querySelector<AWCSelect>('awc-select')!;
      expect(select.checkValidity()).to.be.false;
    });

    it('should focus on the displayInput when constraint validation occurs', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form>
          <awc-select required>
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </form>
      `);
      const select = el.querySelector<AWCSelect>('awc-select')!;
      el.requestSubmit();
      expect(select.shadowRoot!.activeElement).to.equal(select.displayInput);
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<AWCSelect>(html`
        <awc-select label="Select one" required value="option-1">
          <awc-option value="option-1">Option 1</awc-option>
          <awc-option value="option-2">Option 2</awc-option>
          <awc-option value="option-3">Option 3</awc-option>
        </awc-select>
      `);
      const secondOption = el.querySelectorAll('awc-option')[1]!;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<AWCSelect>(html`
        <awc-select label="Select one" required>
          <awc-option value="option-1">Option 1</awc-option>
          <awc-option value="option-2">Option 2</awc-option>
          <awc-option value="option-3">Option 3</awc-option>
        </awc-select>
      `);
      const secondOption = el.querySelectorAll('awc-option')[1]!;

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      await el.show();
      await clickOnElement(secondOption);
      el.value = '';
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <awc-select required>
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </form>
      `);
      const select = el.querySelector<AWCSelect>('awc-select')!;

      expect(select.hasAttribute('data-required')).to.be.true;
      expect(select.hasAttribute('data-optional')).to.be.false;
      expect(select.hasAttribute('data-invalid')).to.be.true;
      expect(select.hasAttribute('data-valid')).to.be.false;
      expect(select.hasAttribute('data-user-invalid')).to.be.false;
      expect(select.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-select name="a" value="option-1">
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('option-1');
    });

    it('should serialize its name and value in FormData when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-select name="a" value="option-2 option-3" multiple>
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </form>
      `);
      const formData = new FormData(form);
      expect(formData.getAll('a')).to.include('option-2');
      expect(formData.getAll('a')).to.include('option-3');
    });

    it('should serialize its name and value in JSON', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-select name="a" value="option-1">
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </form>
      `);
      const json = serialize(form);
      expect(json.a).to.equal('option-1');
    });

    it('should serialize its name and value in JSON when multiple options are selected', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-select name="a" value="option-2 option-3" multiple>
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </form>
      `);
      const json = serialize(form);
      expect(JSON.stringify(json)).to.equal(JSON.stringify({ a: ['option-2', 'option-3'] }));
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <awc-button type="submit">Submit</awc-button>
          </form>
          <awc-select form="f" name="a" value="option-1">
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('option-1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-select value="option-1">
            <awc-option value="option-1">Option 1</awc-option>
            <awc-option value="option-2">Option 2</awc-option>
            <awc-option value="option-3">Option 3</awc-option>
          </awc-select>
          <awc-button type="reset">Reset</awc-button>
        </form>
      `);
      const resetButton = form.querySelector('awc-button')!;
      const select = form.querySelector('awc-select')!;

      select.value = 'option-3';
      await select.updateComplete;
      expect(select.value).to.equal('option-3');

      setTimeout(() => clickOnElement(resetButton));
      await oneEvent(form, 'reset');
      await select.updateComplete;
      expect(select.value).to.equal('option-1');
    });
  });

  it('should update the display label when an option changes', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select value="option-1">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const displayInput = el.shadowRoot!.querySelector<HTMLSelectElement>('.select__display-input')!;
    const option = el.querySelector('awc-option')!;

    expect(displayInput.value).to.equal('Option 1');

    option.textContent = 'updated';
    await oneEvent(option, 'slotchange');
    await el.updateComplete;

    expect(displayInput.value).to.equal('updated');
  });

  it('should emit awc-focus and awc-blur when receiving and losing focus', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select value="option-1">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const focusHandler = sinon.spy();
    const blurHandler = sinon.spy();

    el.addEventListener('awc-focus', focusHandler);
    el.addEventListener('awc-blur', blurHandler);

    el.focus();
    await el.updateComplete;
    el.blur();
    await el.updateComplete;

    expect(focusHandler).to.have.been.calledOnce;
    expect(blurHandler).to.have.been.calledOnce;
  });

  it('should emit awc-clear when the clear button is clicked', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select value="option-1" clearable>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const clearHandler = sinon.spy();
    const clearButton = el.shadowRoot!.querySelector('[part~="clear-button"]')!;

    el.addEventListener('awc-clear', clearHandler);
    await el.show();
    await clickOnElement(clearButton);
    await el.updateComplete;

    expect(clearHandler).to.have.been.calledOnce;
  });

  it('should emit awc-change and awc-input when a tag is removed', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select value="option-1 option-2 option-3" multiple>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;
    const removeButton = tag.shadowRoot!.querySelector('[part~="remove-button"]')!;

    el.addEventListener('awc-change', changeHandler);
    el.addEventListener('awc-input', inputHandler);

    await clickOnElement(removeButton);
    await el.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
  });

  it('should emit awc-show, awc-after-show, awc-hide, and awc-after-hide events when the listbox opens and closes', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select value="option-1">
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('awc-show', showHandler);
    el.addEventListener('awc-after-show', afterShowHandler);
    el.addEventListener('awc-hide', hideHandler);
    el.addEventListener('awc-after-hide', afterHideHandler);

    await el.show();
    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;

    await el.hide();
    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should have rounded tags when using the pill attribute', async () => {
    const el = await fixture<AWCSelect>(html`
      <awc-select value="option-1 option-2" multiple pill>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
      </awc-select>
    `);
    const tag = el.shadowRoot!.querySelector('[part~="tag"]')!;

    expect(tag.hasAttribute('pill')).to.be.true;
  });

  runFormControlBaseTests('awc-select');
});
