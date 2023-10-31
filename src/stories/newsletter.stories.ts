import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Newsletter',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Newsletter1: StoryObj = {
  name: 'Newsletter 1',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col overflow-hidden bg-neutral-100 sm:flex-row md:h-64">
          <div class="order-first h-48 w-full bg-neutral-300 sm:order-none sm:h-auto sm:w-1/2">
            <awc-image layout="filled" aspectratio="1" width="800" src="https://placehold.co/800x800"></awc-image>
          </div>

          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8">
            <awc-typography>
              <h1 class="mb-4 text-2xl font-bold sm:text-3xl text-title md:mb-6">
                <span class="text-base font-semibold text-paragraph leading-dense uppercase  block mb-2">Headline</span>
                Erat suspendisse maecena
              </h1>

              <form class="flex w-full gap-2 mb-3">
                <awc-input type="email" placeholder="Email" class="w-full flex-1"></awc-input>
                <awc-button variant="ghost" outline>Sign up</awc-button>
              </form>

              <p class="text-xs text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </awc-typography>
          </div>
        </div>
      </div>
    </div>
  `
};

export const Newsletter2: StoryObj = {
  name: 'Newsletter 2',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex overflow-hidden bg-neutral-100 md:h-64">
          <div class="flex w-full flex-col p-4 sm:p-8">
            <awc-typography class="text-center mx-auto max-w-md">
              <h1 class="mb-4 text-2xl font-bold sm:text-3xl text-title md:mb-6">
                <span class="text-base font-semibold text-paragraph leading-dense uppercase  block mb-2">Headline</span>
                Erat suspendisse maecena
              </h1>

              <form class="flex w-full gap-2 mb-3">
                <awc-input type="email" placeholder="Email" class="w-full flex-1"></awc-input>
                <awc-button variant="ghost" outline>Sign up</awc-button>
              </form>

              <p class="text-xs text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </p>
            </awc-typography>
          </div>
        </div>
      </div>
    </div>
  `
};

export const Newsletter3: StoryObj = {
  name: 'Newsletter 3',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex overflow-hidden bg-neutral-100">
          <div class="flex w-full flex-col p-4 sm:p-8 md:flex-row md:items-center">
            <awc-typography class="text-center mx-auto max-w-md md:w-1/2 md:text-left">
              <h1 class="mb-4 text-2xl font-bold sm:text-3xl text-title md:mb-6">
                <span class="text-base font-semibold text-paragraph leading-dense uppercase  block mb-2">Headline</span>
                Erat suspendisse maecena
              </h1>
            </awc-typography>
            <awc-typography class="text-center mx-auto max-w-md md:w-1/2 md:text-right">
              <form class="flex w-full gap-2 mb-3">
                <awc-input type="email" placeholder="Email" class="w-full flex-1"></awc-input>
                <awc-button variant="ghost" outline>Sign up</awc-button>
              </form>

              <p class="text-xs text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </p>
            </awc-typography>
          </div>
        </div>
      </div>
    </div>
  `
};
