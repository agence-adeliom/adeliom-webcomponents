import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta = {
  title: 'Getting started/Form Controls'
} satisfies Meta;
export default meta;

export const RequiredFields: StoryObj = {
  render: () =>
    html`<form class="input-validation-required">
        <awc-input name="name" label="Name" required></awc-input>
        <br />
        <awc-select label="Favorite Animal" clearable required>
          <awc-option value="birds">Birds</awc-option>
          <awc-option value="cats">Cats</awc-option>
          <awc-option value="dogs">Dogs</awc-option>
          <awc-option value="other">Other</awc-option>
        </awc-select>
        <br />
        <awc-textarea name="comment" label="Comment" required></awc-textarea>
        <br />
        <awc-checkbox required>Check me before submitting</awc-checkbox>
        <br /><br />
        <awc-button type="submit" variant="primary">Submit</awc-button>
      </form>

      <script type="module">
        const form = document.querySelector('.input-validation-required');
        // Wait for controls to be defined before attaching form listeners
        await Promise.all([
          customElements.whenDefined('awc-button'),
          customElements.whenDefined('awc-checkbox'),
          customElements.whenDefined('awc-input'),
          customElements.whenDefined('awc-option'),
          customElements.whenDefined('awc-select'),
          customElements.whenDefined('awc-textarea')
        ]).then(() => {
          form.addEventListener('submit', event => {
            event.preventDefault();
            alert('All fields are valid!');
          });
        });
      </script>`
};

export const InputPatterns: StoryObj = {
  render: () =>
    html`<form class="input-validation-pattern">
        <awc-input name="letters" required label="Letters" pattern="[A-Za-z]+"></awc-input>
        <br />
        <awc-button type="submit" variant="primary">Submit</awc-button>
        <awc-button type="reset" variant="default">Reset</awc-button>
      </form>

      <script type="module">
        // Wait for controls to be defined before attaching form listeners
        await Promise.all([customElements.whenDefined('awc-button'), customElements.whenDefined('awc-input')]).then(
          () => {
            document.querySelector('.input-validation-pattern').addEventListener('submit', event => {
              event.preventDefault();
              alert('All fields are valid!');
            });
          }
        );
      </script>`
};

export const InputTypes: StoryObj = {
  render: () =>
    html`<form class="input-validation-type">
        <awc-input type="email" label="Email" placeholder="you@example.com" required></awc-input>
        <br />
        <awc-input type="url" label="URL" placeholder="https://example.com/" required></awc-input>
        <br />
        <awc-button type="submit" variant="primary">Submit</awc-button>
        <awc-button type="reset" variant="default">Reset</awc-button>
      </form>

      <script type="module">
        // Wait for controls to be defined before attaching form listeners
        await Promise.all([customElements.whenDefined('awc-button'), customElements.whenDefined('awc-input')]).then(
          () => {
            document.querySelector('.input-validation-type').addEventListener('submit', event => {
              event.preventDefault();
              alert('All fields are valid!');
            });
          }
        );
      </script>`
};

export const CustomErrorMessages: StoryObj = {
  render: () =>
    html`<form class="input-validation-custom">
        <awc-input label="Type “awc”" required></awc-input>
        <br />
        <awc-button type="submit" variant="primary">Submit</awc-button>
        <awc-button type="reset" variant="default">Reset</awc-button>
      </form>

      <script type="module">
        // Wait for controls to be defined before attaching form listeners
        await Promise.all([customElements.whenDefined('awc-button'), customElements.whenDefined('awc-input')]).then(
          () => {
            document.querySelector('.input-validation-custom').addEventListener('submit', event => {
              event.preventDefault();
              alert('All fields are valid!');
            });
            document.querySelector('.input-validation-custom awc-input').addEventListener('awc-input', () => {
              if (input.value === 'awc') {
                input.setCustomValidity('');
              } else {
                input.setCustomValidity("Hey, you're supposed to type 'awc' before submitting this!");
              }
            });
          }
        );
      </script>`
};

export const StylingInvalidFormControls: StoryObj = {
  render: () =>
    html`<form class="validity-styles">
        <awc-input
          name="name"
          label="Name"
          help-text="What would you like people to call you?"
          autocomplete="off"
          required
        ></awc-input>

        <awc-select name="animal" label="Favorite Animal" help-text="Select the best option." clearable required>
          <awc-option value="birds">Birds</awc-option>
          <awc-option value="cats">Cats</awc-option>
          <awc-option value="dogs">Dogs</awc-option>
          <awc-option value="other">Other</awc-option>
        </awc-select>

        <awc-checkbox value="accept" required>Accept terms and conditions</awc-checkbox>

        <awc-button type="submit" variant="primary">Submit</awc-button>
        <awc-button type="reset" variant="default">Reset</awc-button>
      </form>

      <script type="module">
        // Wait for controls to be defined before attaching form listeners
        await Promise.all([
          customElements.whenDefined('awc-button'),
          customElements.whenDefined('awc-checkbox'),
          customElements.whenDefined('awc-input'),
          customElements.whenDefined('awc-option'),
          customElements.whenDefined('awc-select')
        ]).then(() => {
          document.querySelector('.validity-styles').addEventListener('submit', event => {
            event.preventDefault();
            alert('All fields are valid!');
          });
        });
      </script>

      <style>
        .validity-styles awc-input,
        .validity-styles awc-select,
        .validity-styles awc-checkbox {
          display: block;
          margin-bottom: var(--awc-spacing-medium);
        }

        /* user invalid styles */
        .validity-styles awc-input[data-user-invalid]::part(base),
        .validity-styles awc-select[data-user-invalid]::part(combobox),
        .validity-styles awc-checkbox[data-user-invalid]::part(control) {
          border-color: var(--awc-color-danger-600);
        }

        .validity-styles [data-user-invalid]::part(form-control-label),
        .validity-styles [data-user-invalid]::part(form-control-help-text),
        .validity-styles awc-checkbox[data-user-invalid]::part(label) {
          color: var(--awc-color-danger-600);
        }

        .validity-styles awc-checkbox[data-user-invalid]::part(control) {
          outline: none;
        }

        .validity-styles awc-input:focus-within[data-user-invalid]::part(base),
        .validity-styles awc-select:focus-within[data-user-invalid]::part(combobox),
        .validity-styles awc-checkbox:focus-within[data-user-invalid]::part(control) {
          border-color: var(--awc-color-danger-600);
          box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-color-danger-400);
        }

        /* User valid styles */
        .validity-styles awc-input[data-user-valid]::part(base),
        .validity-styles awc-select[data-user-valid]::part(combobox),
        .validity-styles awc-checkbox[data-user-valid]::part(control) {
          border-color: var(--awc-color-success-600);
        }

        .validity-styles [data-user-valid]::part(form-control-label),
        .validity-styles [data-user-valid]::part(form-control-help-text),
        .validity-styles awc-checkbox[data-user-valid]::part(label) {
          color: var(--awc-color-success-600);
        }

        .validity-styles awc-checkbox[data-user-valid]::part(control) {
          background-color: var(--awc-color-success-600);
          outline: none;
        }

        .validity-styles awc-input:focus-within[data-user-valid]::part(base),
        .validity-styles awc-select:focus-within[data-user-valid]::part(combobox),
        .validity-styles awc-checkbox:focus-within[data-user-valid]::part(control) {
          border-color: var(--awc-color-success-600);
          box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-color-success-400);
        }
      </style>`
};

export const InlineFormValidation: StoryObj = {
  render: () =>
    html` <form class="inline-validation">
        <awc-input
          name="name"
          label="Name"
          help-text="What would you like people to call you?"
          autocomplete="off"
          required
        ></awc-input>

        <div id="name-error" aria-live="polite" hidden></div>

        <awc-button type="submit" variant="primary">Submit</awc-button>
        <awc-button type="reset" variant="default">Reset</awc-button>
      </form>

      <script type="module">
        // Wait for controls to be defined before attaching form listeners
        await Promise.all([customElements.whenDefined('awc-button'), customElements.whenDefined('awc-input')]).then(
          () => {
            const nameError = document.querySelector('#name-error');
            const form = document.querySelector('.inline-validation');
            // A form control is invalid
            form.addEventListener(
              'awc-invalid',
              event => {
                // Suppress the browser's constraint validation message
                event.preventDefault();
                nameError.textContent = \`Error: \${event.target.validationMessage}\`;
                nameError.hidden = false;
                event.target.focus();
              },
              { capture: true } // you must use capture since awc-invalid doesn't bubble!
            );
            // Handle form submit
            form.addEventListener('submit', event => {
              event.preventDefault();
              nameError.hidden = true;
              nameError.textContent = '';
              setTimeout(() => alert('All fields are valid'), 50);
            });
            // Handle form reset
            form.addEventListener('reset', event => {
              nameError.hidden = true;
              nameError.textContent = '';
            });
          }
        );
      </script>

      <style>
        #name-error {
          font-size: var(--awc-input-help-text-font-size-medium);
          color: var(--awc-color-danger-600);
        }

        #name-error ~ awc-button {
          margin-top: var(--awc-spacing-medium);
        }

        .inline-validation awc-input {
          display: block;
        }

        /* user invalid styles */
        .inline-validation awc-input[data-user-invalid]::part(base) {
          border-color: var(--awc-color-danger-600);
        }

        .inline-validation [data-user-invalid]::part(form-control-label),
        .inline-validation [data-user-invalid]::part(form-control-help-text) {
          color: var(--awc-color-danger-600);
        }

        .inline-validation awc-input:focus-within[data-user-invalid]::part(base) {
          border-color: var(--awc-color-danger-600);
          box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-color-danger-400);
        }

        /* User valid styles */
        .inline-validation awc-input[data-user-valid]::part(base) {
          border-color: var(--awc-color-success-600);
        }

        .inline-validation [data-user-valid]::part(form-control-label),
        .inline-validation [data-user-valid]::part(form-control-help-text) {
          color: var(--awc-color-success-600);
        }

        .inline-validation awc-input:focus-within[data-user-valid]::part(base) {
          border-color: var(--awc-color-success-600);
          box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-color-success-400);
        }
      </style>`
};
