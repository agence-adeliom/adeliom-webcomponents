import '../../../dist/awc.js';
import { expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import { serialize } from '../../utilities/form.js';
import sinon from 'sinon';
import type AWCTextarea from './textarea.js';

describe('<awc-textarea>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<AWCTextarea>(html` <awc-textarea label="Name"></awc-textarea> `);
    await expect(el).to.be.accessible();
  });

  it('default properties', async () => {
    const el = await fixture<AWCTextarea>(html` <awc-textarea></awc-textarea> `);

    expect(el.size).to.equal('medium');
    expect(el.name).to.equal('');
    expect(el.value).to.equal('');
    expect(el.defaultValue).to.equal('');
    expect(el.title).to.equal('');
    expect(el.filled).to.be.false;
    expect(el.label).to.equal('');
    expect(el.helpText).to.equal('');
    expect(el.placeholder).to.equal('');
    expect(el.rows).to.equal(4);
    expect(el.resize).to.equal('vertical');
    expect(el.disabled).to.be.false;
    expect(el.readonly).to.be.false;
    expect(el.minlength).to.be.undefined;
    expect(el.maxlength).to.be.undefined;
    expect(el.required).to.be.false;
    expect(el.autocapitalize).to.be.undefined;
    expect(el.autocorrect).to.be.undefined;
    expect(el.autocomplete).to.be.undefined;
    expect(el.autofocus).to.be.undefined;
    expect(el.enterkeyhint).to.be.undefined;
    expect(el.spellcheck).to.be.true;
    expect(el.inputmode).to.be.undefined;
  });

  it('should have title if title attribute is set', async () => {
    const el = await fixture<AWCTextarea>(html` <awc-textarea title="Test"></awc-textarea> `);
    const textarea = el.shadowRoot!.querySelector('textarea')!;

    expect(textarea.title).to.equal('Test');
  });

  it('should be disabled with the disabled attribute', async () => {
    const el = await fixture<AWCTextarea>(html` <awc-textarea disabled></awc-textarea> `);
    const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('[part~="textarea"]')!;

    expect(textarea.disabled).to.be.true;
  });

  it('should focus the textarea when clicking on the label', async () => {
    const el = await fixture<AWCTextarea>(html` <awc-textarea label="Name"></awc-textarea> `);
    const label = el.shadowRoot!.querySelector('[part~="form-control-label"]')!;
    const submitHandler = sinon.spy();

    el.addEventListener('awc-focus', submitHandler);
    (label as HTMLLabelElement).click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(submitHandler).to.have.been.calledOnce;
  });

  describe('when the value changes', () => {
    it('should emit awc-change and awc-input when the user types in the textarea', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea></awc-textarea> `);
      const inputHandler = sinon.spy();
      const changeHandler = sinon.spy();

      el.addEventListener('awc-input', inputHandler);
      el.addEventListener('awc-change', changeHandler);
      el.focus();
      await sendKeys({ type: 'abc' });
      el.blur();
      await el.updateComplete;

      expect(changeHandler).to.have.been.calledOnce;
      expect(inputHandler).to.have.been.calledThrice;
    });

    it('should not emit awc-change or awc-input when the value is set programmatically', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea></awc-textarea> `);

      el.addEventListener('awc-change', () => expect.fail('awc-change should not be emitted'));
      el.addEventListener('awc-input', () => expect.fail('awc-input should not be emitted'));
      el.value = 'abc';

      await el.updateComplete;
    });

    it('should not emit awc-change or awc-input when calling setRangeText()', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea value="hi there"></awc-textarea> `);

      el.addEventListener('awc-change', () => expect.fail('awc-change should not be emitted'));
      el.addEventListener('awc-input', () => expect.fail('awc-input should not be emitted'));
      el.focus();
      el.setSelectionRange(0, 2);
      el.setRangeText('hello');

      await el.updateComplete;
    });
  });

  describe('when using constraint validation', () => {
    it('should be valid by default', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea></awc-textarea> `);

      expect(el.checkValidity()).to.be.true;
    });

    it('should be invalid when required and empty', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea required></awc-textarea> `);

      expect(el.checkValidity()).to.be.false;
    });

    it('should be invalid when required and after removing disabled ', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea disabled required></awc-textarea> `);

      el.disabled = false;
      await el.updateComplete;

      expect(el.checkValidity()).to.be.false;
    });

    it('should be invalid when required and disabled is removed', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea disabled required></awc-textarea> `);
      el.disabled = false;
      await el.updateComplete;
      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea required value="a"></awc-textarea> `);

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.false;
      expect(el.hasAttribute('data-valid')).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      el.focus();
      await sendKeys({ press: 'b' });
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.checkValidity()).to.be.true;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea required></awc-textarea> `);

      expect(el.hasAttribute('data-required')).to.be.true;
      expect(el.hasAttribute('data-optional')).to.be.false;
      expect(el.hasAttribute('data-invalid')).to.be.true;
      expect(el.hasAttribute('data-valid')).to.be.false;
      expect(el.hasAttribute('data-user-invalid')).to.be.false;
      expect(el.hasAttribute('data-user-valid')).to.be.false;

      el.focus();
      await sendKeys({ press: 'a' });
      await sendKeys({ press: 'Backspace' });
      await el.updateComplete;
      el.blur();
      await el.updateComplete;

      expect(el.hasAttribute('data-user-invalid')).to.be.true;
      expect(el.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html` <form novalidate><awc-textarea required></awc-textarea></form> `);
      const textarea = el.querySelector<AWCTextarea>('awc-textarea')!;

      expect(textarea.hasAttribute('data-required')).to.be.true;
      expect(textarea.hasAttribute('data-optional')).to.be.false;
      expect(textarea.hasAttribute('data-invalid')).to.be.true;
      expect(textarea.hasAttribute('data-valid')).to.be.false;
      expect(textarea.hasAttribute('data-user-invalid')).to.be.false;
      expect(textarea.hasAttribute('data-user-valid')).to.be.false;
    });
  });

  describe('when submitting a form', () => {
    it('should serialize its name and value with FormData', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form><awc-textarea name="a" value="1"></awc-textarea></form>
      `);
      const formData = new FormData(form);
      expect(formData.get('a')).to.equal('1');
    });

    it('should serialize its name and value with JSON', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form><awc-textarea name="a" value="1"></awc-textarea></form>
      `);
      const json = serialize(form);
      expect(json.a).to.equal('1');
    });

    it('should be invalid when setCustomValidity() is called with a non-empty value', async () => {
      const textarea = await fixture<HTMLFormElement>(html` <awc-textarea></awc-textarea> `);

      textarea.setCustomValidity('Invalid selection');
      await textarea.updateComplete;

      expect(textarea.checkValidity()).to.be.false;
      expect(textarea.hasAttribute('data-invalid')).to.be.true;
      expect(textarea.hasAttribute('data-valid')).to.be.false;
      expect(textarea.hasAttribute('data-user-invalid')).to.be.false;
      expect(textarea.hasAttribute('data-user-valid')).to.be.false;

      textarea.focus();
      await sendKeys({ type: 'test' });
      await textarea.updateComplete;
      textarea.blur();
      await textarea.updateComplete;

      expect(textarea.hasAttribute('data-user-invalid')).to.be.true;
      expect(textarea.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <div>
          <form id="f">
            <awc-button type="submit">Submit</awc-button>
          </form>
          <awc-textarea form="f" name="a" value="1"></awc-textarea>
        </div>
      `);
      const form = el.querySelector('form')!;
      const formData = new FormData(form);

      expect(formData.get('a')).to.equal('1');
    });
  });

  describe('when resetting a form', () => {
    it('should reset the element to its initial value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-textarea name="a" value="test"></awc-textarea>
          <awc-button type="reset">Reset</awc-button>
        </form>
      `);
      const button = form.querySelector('awc-button')!;
      const textarea = form.querySelector('awc-textarea')!;
      textarea.value = '1234';

      await textarea.updateComplete;

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await textarea.updateComplete;

      expect(textarea.value).to.equal('test');

      textarea.defaultValue = '';

      setTimeout(() => button.click());
      await oneEvent(form, 'reset');
      await textarea.updateComplete;

      expect(textarea.value).to.equal('');
    });
  });

  describe('when using spellcheck', () => {
    it('should enable spellcheck when no attribute is present', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea></awc-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('true');
      expect(textarea.spellcheck).to.be.true;
    });

    it('should enable spellcheck when set to "true"', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea spellcheck="true"></awc-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('true');
      expect(textarea.spellcheck).to.be.true;
    });

    it('should disable spellcheck when set to "false"', async () => {
      const el = await fixture<AWCTextarea>(html` <awc-textarea spellcheck="false"></awc-textarea> `);
      const textarea = el.shadowRoot!.querySelector<HTMLTextAreaElement>('textarea')!;
      expect(textarea.getAttribute('spellcheck')).to.equal('false');
      expect(textarea.spellcheck).to.be.false;
    });
  });

  runFormControlBaseTests('awc-textarea');
});
