import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCFormatDate from './format-date.ts';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-format-date');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Format Date',
  component: 'awc-format-date',
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
        component: "Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.<br><br>The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.<br><br>❗ When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients."
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCFormatDate & typeof args>;

export default meta;

type Story = StoryObj<AWCFormatDate & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>`,
};

 export const DateTimeFormatting: Story = {
  name: 'Date & Time Formatting',
  render: () => html`<!-- Human-readable date -->
  <awc-format-date month="long" day="numeric" year="numeric"></awc-format-date><br />
  
  <!-- Time -->
  <awc-format-date hour="numeric" minute="numeric"></awc-format-date><br />
  
  <!-- Weekday -->
  <awc-format-date weekday="long"></awc-format-date><br />
  
  <!-- Month -->
  <awc-format-date month="long"></awc-format-date><br />
  
  <!-- Year -->
  <awc-format-date year="numeric"></awc-format-date><br />
  
  <!-- No formatting options -->
  <awc-format-date></awc-format-date>`,
  parameters: {
    docs: {
      description: {
        story: "Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead."
      }
    }
  }
};

export const HourFormatting: Story = {
  name: 'Hour Formatting',
  args: {
    hour: 'numeric',
    minute: 'numeric'
  },
  render: context => html`
    ${template({...context, 'hour-format': '12' })}
    <br/>
    ${template({...context, 'hour-format': '24' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`."
      }
    }
  }
};

export const Localization: Story = {
  name: 'Localization',
  render: () => html`
    English: <awc-format-date lang="en"></awc-format-date><br />
    French: <awc-format-date lang="fr"></awc-format-date><br />
    Russian: <awc-format-date lang="ru"></awc-format-date>
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `lang` attribute to set the date/time formatting locale."
      }
    }
  }
};
