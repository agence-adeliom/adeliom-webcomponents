import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCRelativeTime from './relative-time';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-relative-time');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Relative Time',
  component: 'awc-relative-time',
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
        component: `Localization is handled by the browser's [\`Intl.RelativeTimeFormat\` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.

The \`date\` attribute determines when the date/time is calculated from. It must be a string that [\`Date.parse()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [\`Date\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript.

> When using strings, avoid ambiguous dates such as \`03/04/2020\` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.`
      }
    },
  },
  render: context => template(context)
} satisfies Meta<AWCRelativeTime & typeof args>;

export default meta;

type Story = StoryObj<AWCRelativeTime & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    date: "2020-07-15T09:17:00-04:00",
  }
};


export const Sync: Story = {
  name: 'Keeping Time in Sync',
  args: {
    date: new Date(new Date().getTime() - 60000),
    sync: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`sync\` attribute to update the displayed value automatically as time passes.`
      }
    }
  }
};

export const Formatting: Story = {
  name: 'Formatting Styles',
  render: () => html`<awc-relative-time date="2020-07-15T09:17:00-04:00" format="narrow"></awc-relative-time><br />
  <awc-relative-time date="2020-07-15T09:17:00-04:00" format="short"></awc-relative-time><br />
  <awc-relative-time date="2020-07-15T09:17:00-04:00" format="long"></awc-relative-time>`,
  parameters: {
    docs: {
      description: {
        story: `You can change how the time is displayed using the \`format\` attribute. Note that some locales may display the same values for \`narrow\` and \`short\` formats.`
      }
    }
  }
};

export const Localization: Story = {
  name: 'Localization',
  render: () => html`English: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="en-US"></awc-relative-time><br />
  Chinese: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="zh-CN"></awc-relative-time><br />
  German: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="de"></awc-relative-time><br />
  French: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="fr"></awc-relative-time><br />
  Greek: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="el"></awc-relative-time><br />
  Russian: <awc-relative-time date="2020-07-15T09:17:00-04:00" lang="ru"></awc-relative-time>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`lang\` attribute to set the desired locale.`
      }
    }
  }
};
