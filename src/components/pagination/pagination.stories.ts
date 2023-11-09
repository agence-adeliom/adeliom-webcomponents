import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCPagination from './pagination.ts';
const { events, args, template, argTypes } = getWcStorybookHelpers('awc-pagination');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Pagination',
  component: 'awc-pagination',
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
} satisfies Meta<AWCPagination & typeof args>;

export default meta;

type Story = StoryObj<AWCPagination & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    pageCount: 50,
    currentPage: 1,
    previousPageLabel: 'Précédent',
    nextPageLabel: 'Suivant,'
  },
  render: () =>
    html`
      <div class="mx-auto max-w-screen-sm">
        <awc-pagination total="50" current="10" ></awc-pagination>
      </div>
    `
};
