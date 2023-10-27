import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Heading',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Heading1: StoryObj = {
  name: 'Heading 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <awc-typography class="mb-2 md:mb-3 text-center text-primary" noMargin ><strong class="font-semibold">Introducing</strong></awc-typography>
        <awc-typography type="h4" renderHas="h2" class="mb-4 text-center" noMargin >Revolutionary way to build the web</awc-typography>
        <awc-typography class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200" noMargin >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
        </awc-typography>
      </div>
    </div>
  `
};

export const Heading2: StoryObj = {
  name: 'Heading 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <awc-typography class="mb-2 md:mb-3 text-primary" noMargin ><strong class="font-semibold">Introducing</strong></awc-typography>
        <awc-typography type="h4" renderHas="h2" class="mb-4" noMargin >Revolutionary way to build the web</awc-typography>
        <awc-typography class="max-w-screen-md text-neutral-500 dark:text-neutral-200" noMargin >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
        </awc-typography>
      </div>
    </div>
  `
};

export const Heading3: StoryObj = {
  name: 'Heading 3',
  render: () => html`
    <div class="bg-white dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="rounded-lg bg-neutral-100 dark:bg-neutral-800 px-4 py-6 md:py-8 lg:py-12">
          <awc-typography class="mb-2 md:mb-3 text-center text-primary" noMargin ><strong class="font-semibold">Introducing</strong></awc-typography>
            <awc-typography type="h4" renderHas="h2" class="mb-4 text-center" noMargin >Revolutionary way to build the web</awc-typography>
            <awc-typography class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200" noMargin >
                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
            </awc-typography>
        </div>
      </div>
    </div>
  `
};
