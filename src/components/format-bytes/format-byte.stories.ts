import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCFormatBytes from './format-bytes.ts';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-format-bytes');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Format Bytes',
  component: 'awc-format-bytes',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
  },
  render: context => template(context)
} satisfies Meta<AWCFormatBytes & typeof args>;

export default meta;

type Story = StoryObj<AWCFormatBytes & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<div class="format-bytes-overview">
    The file is <awc-format-bytes value="1000"></awc-format-bytes> in size. <br /><br />
    <awc-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></awc-input>
  </div>
  
  <script>
    const container = document.querySelector('.format-bytes-overview');
    const formatter = container.querySelector('awc-format-bytes');
    const input = container.querySelector('awc-input');
  
    input.addEventListener('awc-input', () => (formatter.value = input.value || 0));
  </script>`,
};

 export const FormattingBytes: Story = {
  name: 'Formatting Bytes',
  render: context => html`
    ${template({...context, value: '12' })}
    <br/>
    ${template({...context, value: '1200' })}
    <br/>
    ${template({...context, value: '1200000' })}
    <br/>
    ${template({...context, value: '1200000000' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Set the `value` attribute to a number to get the value in bytes."
      }
    }
  }
};

export const FormattingBits: Story = {
  name: 'Formatting Bits',
  args: {
    unit: 'bit'
  },
  render: context => html`
    ${template({...context, value: '12' })}
    <br/>
    ${template({...context, value: '1200' })}
    <br/>
    ${template({...context, value: '1200000' })}
    <br/>
    ${template({...context, value: '1200000000' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "To get the value in bits, set the `unit` attribute to `bit`."
      }
    }
  }
};

export const Localization: Story = {
  name: 'Localization',
  args: {
    lang: 'de'
  },
  render: context => html`
    ${template({...context, value: '12' })}
    <br/>
    ${template({...context, value: '1200' })}
    <br/>
    ${template({...context, value: '1200000' })}
    <br/>
    ${template({...context, value: '1200000000' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `lang` attribute to set the number formatting locale."
      }
    }
  }
};