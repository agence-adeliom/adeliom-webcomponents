import '../../../dist/awc.js';
import { aTimeout, expect, fixture, html, oneEvent, waitUntil } from '@open-wc/testing';
import { clickOnElement } from '../../internal/test.js';
import { runFormControlBaseTests } from '../../internal/test/form-control-base-tests.js';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type AWCRadio from '../radio/radio.js';
import type AWCRadioGroup from './radio-group.js';

describe('<awc-radio-group>', () => {
  describe('validation tests', () => {
    it('should be invalid initially when required and no radio is checked', async () => {
      const radioGroup = await fixture<AWCRadioGroup>(html`
        <awc-radio-group required>
          <awc-radio value="1"></awc-radio>
          <awc-radio value="2"></awc-radio>
        </awc-radio-group>
      `);

      expect(radioGroup.checkValidity()).to.be.false;
    });

    it('should become valid when an option is checked', async () => {
      const radioGroup = await fixture<AWCRadioGroup>(html`
        <awc-radio-group required>
          <awc-radio value="1"></awc-radio>
          <awc-radio value="2"></awc-radio>
        </awc-radio-group>
      `);

      radioGroup.value = '1';
      await radioGroup.updateComplete;

      expect(radioGroup.checkValidity()).to.be.true;
    });

    it(`should be valid when required and one radio is checked`, async () => {
      const el = await fixture<AWCRadioGroup>(html`
        <awc-radio-group label="Select an option" value="1" required>
          <awc-radio name="option" value="1">Option 1</awc-radio>
          <awc-radio name="option" value="2">Option 2</awc-radio>
          <awc-radio name="option" value="3">Option 3</awc-radio>
        </awc-radio-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when required and no radios are checked`, async () => {
      const el = await fixture<AWCRadioGroup>(html`
        <awc-radio-group label="Select an option" required>
          <awc-radio name="option" value="1">Option 1</awc-radio>
          <awc-radio name="option" value="2">Option 2</awc-radio>
          <awc-radio name="option" value="3">Option 3</awc-radio>
        </awc-radio-group>
      `);

      expect(el.checkValidity()).to.be.false;
    });

    it(`should be valid when required and a different radio is checked`, async () => {
      const el = await fixture<AWCRadioGroup>(html`
        <awc-radio-group label="Select an option" value="3" required>
          <awc-radio name="option" value="1">Option 1</awc-radio>
          <awc-radio name="option" value="2">Option 2</awc-radio>
          <awc-radio name="option" value="3">Option 3</awc-radio>
        </awc-radio-group>
      `);

      expect(el.checkValidity()).to.be.true;
    });

    it(`should be invalid when custom validity is set`, async () => {
      const el = await fixture<AWCRadioGroup>(html`
        <awc-radio-group label="Select an option">
          <awc-radio name="option" value="1">Option 1</awc-radio>
          <awc-radio name="option" value="2">Option 2</awc-radio>
          <awc-radio name="option" value="3">Option 3</awc-radio>
        </awc-radio-group>
      `);

      el.setCustomValidity('Error');

      expect(el.checkValidity()).to.be.false;
    });

    it('should receive the correct validation attributes ("states") when valid', async () => {
      const radioGroup = await fixture<AWCRadioGroup>(html`
        <awc-radio-group value="1" required>
          <awc-radio value="1"></awc-radio>
          <awc-radio value="2"></awc-radio>
        </awc-radio-group>
      `);
      const secondRadio = radioGroup.querySelectorAll('awc-radio')[1];

      expect(radioGroup.checkValidity()).to.be.true;
      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-valid')).to.be.true;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      await secondRadio.updateComplete;

      expect(radioGroup.checkValidity()).to.be.true;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.true;
    });

    it('should receive the correct validation attributes ("states") when invalid', async () => {
      const radioGroup = await fixture<AWCRadioGroup>(html`
        <awc-radio-group required>
          <awc-radio value="1"></awc-radio>
          <awc-radio value="2"></awc-radio>
        </awc-radio-group>
      `);
      const secondRadio = radioGroup.querySelectorAll('awc-radio')[1];

      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-valid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;

      await clickOnElement(secondRadio);
      radioGroup.value = '';
      await radioGroup.updateComplete;

      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should receive validation attributes ("states") even when novalidate is used on the parent form', async () => {
      const el = await fixture<HTMLFormElement>(html`
        <form novalidate>
          <awc-radio-group required>
            <awc-radio value="1"></awc-radio>
            <awc-radio value="2"></awc-radio>
          </awc-radio-group>
        </form>
      `);
      const radioGroup = el.querySelector<AWCRadioGroup>('awc-radio-group')!;

      expect(radioGroup.hasAttribute('data-required')).to.be.true;
      expect(radioGroup.hasAttribute('data-optional')).to.be.false;
      expect(radioGroup.hasAttribute('data-invalid')).to.be.true;
      expect(radioGroup.hasAttribute('data-valid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-invalid')).to.be.false;
      expect(radioGroup.hasAttribute('data-user-valid')).to.be.false;
    });

    it('should show a constraint validation error when setCustomValidity() is called', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <awc-radio-group value="1">
            <awc-radio id="radio-1" name="a" value="1"></awc-radio>
            <awc-radio id="radio-2" name="a" value="2"></awc-radio>
          </awc-radio-group>
          <awc-button type="submit">Submit</awc-button>
        </form>
      `);
      const button = form.querySelector('awc-button')!;
      const radioGroup = form.querySelector<AWCRadioGroup>('awc-radio-group')!;
      const submitHandler = sinon.spy((event: SubmitEvent) => event.preventDefault());

      // Submitting the form after setting custom validity should not trigger the handler
      radioGroup.setCustomValidity('Invalid selection');
      form.addEventListener('submit', submitHandler);
      button.click();

      await aTimeout(100);

      expect(submitHandler).to.not.have.been.called;
    });
  });
});

describe('when resetting a form', () => {
  it('should reset the element to its initial value', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <awc-radio-group value="1">
          <awc-radio value="1"></awc-radio>
          <awc-radio value="2"></awc-radio>
        </awc-radio-group>
        <awc-button type="reset">Reset</awc-button>
      </form>
    `);
    const button = form.querySelector('awc-button')!;
    const radioGroup = form.querySelector('awc-radio-group')!;
    radioGroup.value = '2';

    await radioGroup.updateComplete;
    setTimeout(() => button.click());

    await oneEvent(form, 'reset');
    await radioGroup.updateComplete;

    expect(radioGroup.value).to.equal('1');
  });
});

describe('when submitting a form', () => {
  it('should submit the correct value when a value is provided', async () => {
    const form = await fixture<HTMLFormElement>(html`
      <form>
        <awc-radio-group name="a" value="1">
          <awc-radio id="radio-1" value="1"></awc-radio>
          <awc-radio id="radio-2" value="2"></awc-radio>
          <awc-radio id="radio-3" value="3"></awc-radio>
        </awc-radio-group>
        <awc-button type="submit">Submit</awc-button>
      </form>
    `);
    const button = form.querySelector('awc-button')!;
    const radio = form.querySelectorAll('awc-radio')[1]!;
    const submitHandler = sinon.spy((event: SubmitEvent) => {
      formData = new FormData(form);

      event.preventDefault();
    });
    let formData: FormData;

    form.addEventListener('submit', submitHandler);
    radio.click();
    button.click();
    await waitUntil(() => submitHandler.calledOnce);

    expect(formData!.get('a')).to.equal('2');
  });

  it('should be present in form data when using the form attribute and located outside of a <form>', async () => {
    const el = await fixture<HTMLFormElement>(html`
      <div>
        <form id="f">
          <awc-button type="submit">Submit</awc-button>
        </form>
        <awc-radio-group form="f" name="a" value="1">
          <awc-radio id="radio-1" value="1"></awc-radio>
          <awc-radio id="radio-2" value="2"></awc-radio>
          <awc-radio id="radio-3" value="3"></awc-radio>
        </awc-radio-group>
      </div>
    `);
    const form = el.querySelector('form')!;
    const formData = new FormData(form);

    expect(formData.get('a')).to.equal('1');
  });
});

describe('when a size is applied', () => {
  it('should apply the same size to all radios', async () => {
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group size="large">
        <awc-radio id="radio-1" value="1"></awc-radio>
        <awc-radio id="radio-2" value="2"></awc-radio>
      </awc-radio-group>
    `);
    const [radio1, radio2] = radioGroup.querySelectorAll('awc-radio')!;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });

  it('should apply the same size to all radio buttons', async () => {
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group size="large">
        <awc-radio-button id="radio-1" value="1"></awc-radio-button>
        <awc-radio-button id="radio-2" value="2"></awc-radio-button>
      </awc-radio-group>
    `);
    const [radio1, radio2] = radioGroup.querySelectorAll('awc-radio-button')!;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });

  it('should update the size of all radio buttons when size changes', async () => {
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group size="small">
        <awc-radio-button id="radio-1" value="1"></awc-radio-button>
        <awc-radio-button id="radio-2" value="2"></awc-radio-button>
      </awc-radio-group>
    `);
    const [radio1, radio2] = radioGroup.querySelectorAll('awc-radio-button')!;

    expect(radio1.size).to.equal('small');
    expect(radio2.size).to.equal('small');

    radioGroup.size = 'large';
    await radioGroup.updateComplete;

    expect(radio1.size).to.equal('large');
    expect(radio2.size).to.equal('large');
  });
});

describe('when the value changes', () => {
  it('should emit awc-change when toggled with the arrow keys', async () => {
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group>
        <awc-radio id="radio-1" value="1"></awc-radio>
        <awc-radio id="radio-2" value="2"></awc-radio>
      </awc-radio-group>
    `);
    const firstRadio = radioGroup.querySelector<AWCRadio>('#radio-1')!;
    const changeHandler = sinon.spy();
    const inputHandler = sinon.spy();

    radioGroup.addEventListener('awc-change', changeHandler);
    radioGroup.addEventListener('awc-input', inputHandler);
    firstRadio.focus();
    await sendKeys({ press: 'ArrowRight' });
    await radioGroup.updateComplete;

    expect(changeHandler).to.have.been.calledOnce;
    expect(inputHandler).to.have.been.calledOnce;
    expect(radioGroup.value).to.equal('2');
  });

  it('should emit awc-change and awc-input when clicked', async () => {
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group>
        <awc-radio id="radio-1" value="1"></awc-radio>
        <awc-radio id="radio-2" value="2"></awc-radio>
      </awc-radio-group>
    `);
    const radio = radioGroup.querySelector<AWCRadio>('#radio-1')!;
    setTimeout(() => radio.click());
    const event = await oneEvent(radioGroup, 'awc-change');
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should emit awc-change and awc-input when toggled with spacebar', async () => {
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group>
        <awc-radio id="radio-1" value="1"></awc-radio>
        <awc-radio id="radio-2" value="2"></awc-radio>
      </awc-radio-group>
    `);
    const radio = radioGroup.querySelector<AWCRadio>('#radio-1')!;
    radio.focus();
    setTimeout(() => sendKeys({ press: ' ' }));
    const event = await oneEvent(radioGroup, 'awc-change');
    expect(event.target).to.equal(radioGroup);
    expect(radioGroup.value).to.equal('1');
  });

  it('should not emit awc-change or awc-input when the value is changed programmatically', async () => {
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group value="1">
        <awc-radio id="radio-1" value="1"></awc-radio>
        <awc-radio id="radio-2" value="2"></awc-radio>
      </awc-radio-group>
    `);

    radioGroup.addEventListener('awc-change', () => expect.fail('awc-change should not be emitted'));
    radioGroup.addEventListener('awc-input', () => expect.fail('awc-input should not be emitted'));
    radioGroup.value = '2';
    await radioGroup.updateComplete;
  });

  it('should relatively position content to prevent visually hidden scroll bugs', async () => {
    //
    // See https://github.com/awc-style/awc/issues/1380
    //
    const radioGroup = await fixture<AWCRadioGroup>(html`
      <awc-radio-group value="1">
        <awc-radio id="radio-1" value="1"></awc-radio>
      </awc-radio-group>
    `);

    const formControl = radioGroup.shadowRoot!.querySelector('.form-control')!;
    const visuallyHidden = radioGroup.shadowRoot!.querySelector('.visually-hidden')!;

    expect(getComputedStyle(formControl).position).to.equal('relative');
    expect(getComputedStyle(visuallyHidden).position).to.equal('absolute');
  });

  /**
   * @see https://github.com/awc-style/awc/issues/1361
   * This isn't really possible to test right now due to importing "awc.js" which
   * auto-defines all of our components up front. This should be tested if we ever split
   * to non-auto-defining components and not auto-defining for tests.
   */
  it.skip('should sync up radios and radio buttons if defined after radio group', async () => {
    // customElements.define("awc-radio-group", AWCRadioGroup)
    //
    // const radioGroup = await fixture<AWCRadioGroup>(html`
    //   <awc-radio-group value="1">
    //     <awc-radio id="radio-1" value="1"></awc-radio>
    //     <awc-radio id="radio-2" value="2"></awc-radio>
    //   </awc-radio-group>
    // `);
    //
    // await aTimeout(1)
    //
    // customElements.define("awc-radio-button", AWCRadioButton)
    //
    // expect(radioGroup.querySelector("awc-radio")?.getAttribute("aria-checked")).to.equal("false")
    //
    // await aTimeout(1)
    //
    // customElements.define("awc-radio", AWCRadio)
    //
    // await aTimeout(1)
    //
    // expect(radioGroup.querySelector("awc-radio")?.getAttribute("aria-checked")).to.equal("true")
  });

  runFormControlBaseTests('awc-radio-group');
});
