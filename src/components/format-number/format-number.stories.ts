import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCFormatNumber from './format-number.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-format-number');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Format/Number',
  component: 'awc-format-number',
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
        component:
          "Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required."
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCFormatNumber & typeof args>;

export default meta;

type Story = StoryObj<AWCFormatNumber & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<div class="format-number-overview">
        <awc-format-number value="1000"></awc-format-number>
        <br /><br />
        <awc-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></awc-input>
      </div>

      <script>
        const container = document.querySelector('.format-number-overview');
        const formatter = container.querySelector('awc-format-number');
        const input = container.querySelector('awc-input');

        input.addEventListener('awc-input', () => (formatter.value = input.value || 0));
      </script>`
};

export const Percentages: Story = {
  name: 'Percentages',
  args: {
    type: 'percent'
  },
  render: context => html`
    ${template({ ...context, value: '0' })}
    <br />
    ${template({ ...context, value: '0.25' })}
    <br />
    ${template({ ...context, value: '0.50' })}
    <br />
    ${template({ ...context, value: '0.75' })}
    <br />
    ${template({ ...context, value: '1' })}
  `,
  parameters: {
    docs: {
      description: {
        story: 'To get the value as a percent, set the `type` attribute to `percent`.'
      }
    }
  }
};

export const Localization: Story = {
  name: 'Localization',
  render: () => html`
    English: <awc-format-number value="2000" lang="en" minimum-fraction-digits="2"></awc-format-number><br />
    German: <awc-format-number value="2000" lang="de" minimum-fraction-digits="2"></awc-format-number><br />
    Russian: <awc-format-number value="2000" lang="ru" minimum-fraction-digits="2"></awc-format-number>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `lang` attribute to set the number formatting locale.'
      }
    }
  }
};

export const Currency: Story = {
  name: 'Currency',
  args: {
    type: 'currency',
    value: 2000
  },
  render: context => html`
    ${template({ ...context, currency: 'USD', lang: 'en-US' })}
    <br />
    ${template({ ...context, currency: 'GBP', lang: 'en-GB' })}
    <br />
    ${template({ ...context, currency: 'EUR', lang: 'de' })}
    <br />
    ${template({ ...context, currency: 'RUB', lang: 'ru' })}
    <br />
    ${template({ ...context, currency: 'CNY', lang: 'zh-cn' })}
  `,
  parameters: {
    docs: {
      description: {
        story:
          'To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.'
      }
    }
  }
};
