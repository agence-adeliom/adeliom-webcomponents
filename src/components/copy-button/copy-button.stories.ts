import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCCopyButton from './copy-button.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-copy-button');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Copy Button',
  component: 'awc-copy-button',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCCopyButton & typeof args>;

export default meta;

type Story = StoryObj<AWCCopyButton & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    value: 'AWC rocks!'
  }
};

export const CustomLabels: Story = {
  name: 'Custom Labels',
  args: {
    value: 'Custom labels are easy',
    'copy-label': 'Click to copy',
    'success-label': 'You did it!',
    'error-label': "Whoops, your browser doesn't support this!"
  },
  parameters: {
    docs: {
      description: {
        story:
          'Copy Buttons display feedback in a tooltip. You can customize the labels using the `copy-label`, `success-label`, and `error-label` attributes.'
      }
    }
  }
};

export const CustomIcons: Story = {
  name: 'Custom Icons',
  render: () =>
    html`<awc-copy-button value="Copied from a custom button">
      <awc-icon slot="copy-icon" name="clipboard"></awc-icon>
      <awc-icon slot="success-icon" name="clipboard-check"></awc-icon>
      <awc-icon slot="error-icon" name="clipboard-x"></awc-icon>
    </awc-copy-button>`,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `copy-icon`, `success-icon`, and `error-icon` slots to customize the icons that get displayed for each state. You can use [`<awc-icon>`](?path=/docs/components-icon--docs) or your own images.'
      }
    }
  }
};

export const CopyingValuesFromOtherElements: Story = {
  name: 'Copying Values From Other Elements',
  render: () =>
    html`<!-- Copies the span's textContent -->
      <span id="my-phone">+1 (234) 456-7890</span>
      <awc-copy-button from="my-phone"></awc-copy-button>

      <br /><br />

      <!-- Copies the input's "value" property -->
      <awc-input
        id="my-input"
        type="text"
        value="User input"
        style="display: inline-block; max-width: 300px;"
      ></awc-input>
      <awc-copy-button from="my-input.value"></awc-copy-button>

      <br /><br />

      <!-- Copies the link's "href" attribute -->
      <a id="my-link" href="https://webcomponents.adeliom.io/">AWC Website</a>
      <awc-copy-button from="my-link[href]"></awc-copy-button>`,
  parameters: {
    docs: {
      description: {
        story:
          "Normally, the data that gets copied will come from the component's `value` attribute, but you can copy data from any element within the same document by providing its `id` to the `from` attribute.<br><br>When using the `from` attribute, the element's [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) will be copied by default. Passing an attribute or property modifier will let you copy data from one of the element's attributes or properties instead.<br><br>To copy data from an attribute, use `from=\"id[attr]\"` where `id` is the id of the target element and `attr` is the name of the attribute you'd like to copy. To copy data from a property, use `from=\"id.prop\"` where `id` is the id of the target element and `prop` is the name of the property you'd like to copy."
      }
    }
  }
};

export const HandlingErrors: Story = {
  name: 'Handling Errors',
  args: {
    from: 'i-do-not-exist'
  },
  parameters: {
    docs: {
      description: {
        story:
          "A copy error will occur if the value is an empty string, if the `from` attribute points to an id that doesn't exist, or if the browser rejects the operation for any reason. When this happens, the `awc-error` event will be emitted.<br><br>This example demonstrates what happens when a copy error occurs. You can customize the error label and icon using the `error-label` attribute and the `error-icon` slot, respectively."
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    value: "You can't copy me",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Copy buttons can be disabled by adding the `disabled` attribute.'
      }
    }
  }
};

export const ChangingFeedbackDuration: Story = {
  name: 'Changing Feedback Duration',
  args: {
    ...Primary.args,
    'feedback-duration': 250
  },
  parameters: {
    docs: {
      description: {
        story:
          'A success indicator is briefly shown after copying. You can customize the length of time the indicator is shown using the `feedback-duration` attribute.'
      }
    }
  }
};

export const CustomStyles: Story = {
  name: 'Custom Styles',
  render: () =>
    html`<awc-copy-button value="I'm so stylish" class="custom-styles">
        <awc-icon slot="copy-icon" name="asterisk"></awc-icon>
        <awc-icon slot="success-icon" name="check-lg"></awc-icon>
        <awc-icon slot="error-icon" name="x-lg"></awc-icon>
      </awc-copy-button>

      <style>
        .custom-styles {
          --success-color: white;
          --error-color: white;
          color: white;
        }

        .custom-styles::part(button) {
          background-color: #ff1493;
          border: solid 4px #ff7ac1;
          border-right-color: #ad005c;
          border-bottom-color: #ad005c;
          border-radius: 0;
          transition:
            100ms scale ease-in-out,
            100ms translate ease-in-out;
        }

        .custom-styles::part(button):hover {
          scale: 1.1;
        }

        .custom-styles::part(button):active {
          translate: 0 2px;
        }

        .custom-styles::part(button):focus-visible {
          outline: dashed 2px deeppink;
          outline-offset: 4px;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: 'You can customize the button to your liking with CSS.'
      }
    }
  }
};
