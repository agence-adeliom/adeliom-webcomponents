import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCRadioGroup from './radio-group';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-radio-group');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Radio/Group',
  component: 'awc-radio-group',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
    docs: {
      description: {}
    }
  },
  render: context => template(context)
} satisfies Meta<AWCRadioGroup & typeof args>;

export default meta;

type Story = StoryObj<AWCRadioGroup & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="1">
      <awc-radio value="1">Option 1</awc-radio>
      <awc-radio value="2">Option 2</awc-radio>
      <awc-radio value="3">Option 3</awc-radio>
    </awc-radio-group>`
};

export const HelpText: Story = {
  name: 'Help Text',
  render: () =>
    html`<awc-radio-group
      label="Select an option"
      help-text="Choose the most appropriate option."
      name="radio"
      value="1"
    >
      <awc-radio value="1">Option 1</awc-radio>
      <awc-radio value="2">Option 2</awc-radio>
      <awc-radio value="3">Option 3</awc-radio>
    </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a radio group with the \`help-text\` attribute. For help texts that contain HTML, use the \`help-text\` slot instead.`
      }
    }
  }
};

export const RadioButtons: Story = {
  name: 'Radio Buttons',
  render: () =>
    html`<awc-radio-group
      label="Select an option"
      help-text="Select an option that makes you proud."
      name="radio"
      value="1"
    >
      <awc-radio-button value="1">Option 1</awc-radio-button>
      <awc-radio-button value="2">Option 2</awc-radio-button>
      <awc-radio-button value="3">Option 3</awc-radio-button>
    </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.`
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabling Options',
  render: () =>
    html`<awc-radio-group label="Select an option" name="radio" value="1">
      <awc-radio value="1">Option 1</awc-radio>
      <awc-radio value="2" disabled>Option 2</awc-radio>
      <awc-radio value="3">Option 3</awc-radio>
    </awc-radio-group>`,
  parameters: {
    docs: {
      description: {
        story: `Radios and radio buttons can be disabled by adding the \`disabled\` attribute to the respective options inside the radio group.`
      }
    }
  }
};

export const SizingOptions: Story = {
  name: 'Sizing Options',
  render: () =>
    html`<awc-radio-group label="Select an option" size="medium" value="medium" class="radio-group-size">
        <awc-radio value="small">Small</awc-radio>
        <awc-radio value="medium">Medium</awc-radio>
        <awc-radio value="large">Large</awc-radio>
      </awc-radio-group>

      <script>
        const radioGroupSize = document.querySelector('.radio-group-size');

        radioGroupSize.addEventListener('awc-change', () => {
          radioGroupSize.size = radioGroupSize.value;
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `The size of [Radios](/components/radio) and [Radio Buttons](/components/radio-buttons) will be determined by the Radio Group's \`size\` attribute.

> [Radios](/components/radio) and [Radio Buttons](/components/radio-button) also have a \`size\` attribute. This can be useful in certain compositions, but it will be ignored when used inside of a Radio Group.`
      }
    }
  }
};

export const Validation: Story = {
  name: 'Validation',
  render: () =>
    html`<form class="validation">
        <awc-radio-group label="Select an option" name="radio" required>
          <awc-radio value="1">Option 1</awc-radio>
          <awc-radio value="2">Option 2</awc-radio>
          <awc-radio value="3">Option 3</awc-radio>
        </awc-radio-group>
        <br />
        <awc-button type="submit" variant="primary">Submit</awc-button>
      </form>

      <script>
        const form = document.querySelector('.validation');

        // Handle form submit
        form.addEventListener('submit', event => {
          event.preventDefault();
          alert('All fields are valid!');
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `Setting the \`required\` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.`
      }
    }
  }
};

export const CustomValidity: Story = {
  name: 'Custom Validity',
  render: () =>
    html`<form class="custom-validity">
        <awc-radio-group label="Select an option" name="radio" value="1">
          <awc-radio value="1">Not me</awc-radio>
          <awc-radio value="2">Me neither</awc-radio>
          <awc-radio value="3">Choose me</awc-radio>
        </awc-radio-group>
        <br />
        <awc-button type="submit" variant="primary">Submit</awc-button>
      </form>

      <script>
        const formCustomValidity = document.querySelector('.custom-validity');
        const radioGroupCustomValidity = formCustomValidity.querySelector('awc-radio-group');
        const errorMessage = 'You must choose the last option';

        // Set initial validity as soon as the element is defined
        customElements.whenDefined('awc-radio').then(() => {
          radioGroupCustomValidity.setCustomValidity(errorMessage);
        });

        // Update validity when a selection is made
        formCustomValidity.addEventListener('awc-change', () => {
          const isValid = radioGroupCustomValidity.value === '3';
          radioGroupCustomValidity.setCustomValidity(isValid ? '' : errorMessage);
        });

        // Handle form submit
        formCustomValidity.addEventListener('submit', event => {
          event.preventDefault();
          alert('All fields are valid!');
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`setCustomValidity()\` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.`
      }
    }
  }
};
