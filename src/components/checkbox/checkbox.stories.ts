import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCCheckbox from './checkbox.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-checkbox');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Checkbox',
  component: 'awc-checkbox',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
    docs: {
      description: {
        component: `> This component works with standard \`<form>\` elements. Please refer to the section on [form controls](?path=/docs/getting-started-form-controls--docs) to learn more about form submission and client-side validation.`
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCCheckbox & typeof args>;

export default meta;

type Story = StoryObj<AWCCheckbox & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    'default-slot': 'Checkbox'
  }
};

export const Checked: Story = {
  name: 'Checked',
  args: {
    ...Primary.args,
    'default-slot': 'Checked',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `checked` attribute to activate the checkbox.'
      }
    }
  }
};

export const Indeterminate: Story = {
  name: 'Indeterminate',
  args: {
    ...Primary.args,
    'default-slot': 'Indeterminate',
    indeterminate: true
  },

  parameters: {
    docs: {
      description: {
        story: 'Use the `indeterminate` attribute to make the checkbox indeterminate.'
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Primary.args,
    'default-slot': 'Disabled',
    disabled: true
  },

  parameters: {
    docs: {
      description: {
        story: 'Use the `indeterminate` attribute to make the checkbox indeterminate.'
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  args: {
    ...Primary.args
  },
  render: context => html`
    ${template({ ...context, size: 'small' })}
    <br />
    ${template({ ...context, size: 'medium' })}
    <br />
    ${template({ ...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `size` attribute to change a checkbox's size."
      }
    }
  }
};

export const CustomValidity: Story = {
  name: 'Custom Validity',
  render: () =>
    html`<form class="custom-validity">
        <awc-checkbox>Check me</awc-checkbox>
        <br />
        <awc-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</awc-button>
      </form>
      <script>
        const form = document.querySelector('.custom-validity');
        const checkbox = form.querySelector('awc-checkbox');
        const errorMessage = \`Don't forget to check me!\`;

        // Set initial validity as soon as the element is defined
        customElements.whenDefined('awc-checkbox').then(async () => {
          await checkbox.updateComplete;
          checkbox.setCustomValidity(errorMessage);
        });

        // Update validity on change
        checkbox.addEventListener('awc-change', () => {
          checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
        });

        // Handle submit
        form.addEventListener('submit', event => {
          event.preventDefault();
          alert('All fields are valid!');
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.'
      }
    }
  }
};
