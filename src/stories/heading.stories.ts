import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Heading',
  parameters: {
    layout: ''
  }
} satisfies Meta;

export const Heading1: StoryObj = {
  name: 'Heading 1',
  render: () => html`
    <div>
      <div class="container mx-auto py-5x-large px-medium md:p-7x-large">
        <awc-typography type="h2" no-margin class="text-center mb-4 text-title">
          <span class="text-base font-semibold leading-dense text-paragraph uppercase block">Headline</span>
          Heading title
        </awc-typography>
        <awc-typography class="mx-auto max-w-screen-md text-center text-paragraph" no-margin>
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
          of a real written text but is random or otherwise generated.
        </awc-typography>
      </div>
    </div>
  `
};

export const Heading2: StoryObj = {
  name: 'Heading 2',
  render: () => html`
    <div>
      <div class="container mx-auto bg-neutral-100 py-5x-large px-medium md:p-7x-large">
        <awc-typography type="h2" no-margin class="text-center mb-4 text-title">
          <span class="text-base font-semibold leading-dense text-paragraph uppercase block">Headline</span>
          Heading title
        </awc-typography>
        <awc-typography class="mx-auto max-w-screen-md text-center text-paragraph" no-margin>
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
          of a real written text but is random or otherwise generated.
        </awc-typography>
      </div>
    </div>
  `
};

export const Heading3: StoryObj = {
  name: 'Heading 3',
  render: () => html`
    <div>
      <div class="container mx-auto">
        <div class="py-6 md:py-8 lg:py-12">
          <awc-typography type="h2" no-margin class="mb-4 text-title">
            <span class="text-base font-semibold leading-dense text-paragraph uppercase block">Headline</span>
            Heading title
          </awc-typography>
          <awc-typography class="max-w-screen-md text-paragraph" no-margin>
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
      </div>
    </div>
  `
};
