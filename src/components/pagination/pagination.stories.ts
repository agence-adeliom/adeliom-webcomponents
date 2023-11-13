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
  render: () => html`
    <div class="mx-auto max-w-screen-sm">
      <awc-pagination total="6" current="1"></awc-pagination>
    </div>
  `
};

export const Secondary: Story = {
  name: 'Text labels',
  args: {
    pageCount: 50,
    currentPage: 1,
    previousPageLabel: 'Précédent',
    nextPageLabel: 'Suivant,'
  },
  render: () => html`
    <div class="mx-auto max-w-screen-sm">
      <awc-pagination total="6" current="1">
        <span slot="previous-button"> Précédent </span>
        <span slot="next-button"> Suivant </span>
      </awc-pagination>
    </div>
  `
};

export const Tertiary: Story = {
  name: 'Text + Icon labels',
  args: {
    pageCount: 50,
    currentPage: 1,
    previousPageLabel: 'Précédent',
    nextPageLabel: 'Suivant,'
  },
  render: () => html`
    <div class="mx-auto max-w-screen-sm">
      <awc-pagination total="6" current="1">
        <span slot="previous-button" class="flex items-center gap-2">
          <awc-icon name="chevron-left"></awc-icon>
          Précédent
        </span>
        <span slot="next-button" class="flex items-center gap-2">
          Suivant
          <awc-icon name="chevron-right"></awc-icon>
        </span>
      </awc-pagination>
    </div>
  `
};
