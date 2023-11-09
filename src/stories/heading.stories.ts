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
        <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title">
          <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
          Consectetur adipiscing elit
        </h3>
        <p class="mx-auto max-w-screen-md text-center text-paragraph"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
        >
      </div>
    </div>
  `
};

export const Heading2: StoryObj = {
  name: 'Heading 2',
  render: () => html`
    <div>
      <div class="container mx-auto bg-neutral-100 py-5x-large px-medium md:p-7x-large">
        <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title">
          <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
          Consectetur adipiscing elit
        </h3>
        <p class="mx-auto max-w-screen-md text-center text-paragraph"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
        >
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
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
            Consectetur adipiscing elit
          </h3>
          <p class="max-w-screen-md text-paragraph"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
          >
        </div>
      </div>
    </div>
  `
};
