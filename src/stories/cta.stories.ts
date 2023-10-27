import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Call to Action',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Cta1: StoryObj = {
  name: 'Cta 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col overflow-hidden rounded-lg bg-neutral-900 sm:flex-row md:h-80">
          <!-- content - start -->
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <awc-typography type="h4" class="mb-4 text-white" noMargin>Summer Sale<br />Up to 70% off.</awc-typography>
            <awc-typography class="mb-8 max-w-md text-neutral-400" noMargin
              >This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text.</awc-typography
            >
            <div class="mt-auto">
              <awc-button href="#" variant="default" size="large">Save now</awc-button>
            </div>
          </div>
          <!-- content - end -->

          <!-- image - start -->
          <div class="order-first h-48 w-full bg-neutral-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <awc-image
              layout="filled"
              width="1000"
              height="500"
              src="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top"
            ></awc-image>
          </div>
          <!-- image - end -->
        </div>
      </div>
    </div>
  `
};

export const Cta2: StoryObj = {
  name: 'Cta 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col overflow-hidden rounded-lg bg-neutral-200 sm:flex-row md:h-80">
          <!-- image - start -->
          <div class="order-first h-48 w-full bg-neutral-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <awc-image
              layout="filled"
              aspectRatio="1"
              width="1000"
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop"
            ></awc-image>
          </div>
          <!-- image - end -->

          <!-- content - start -->
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <awc-typography type="h4" class="mb-4 text-neutral-800" noMargin>Help center</awc-typography>
            <awc-typography class="mb-8 max-w-md text-neutral-400" noMargin
              >This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text.</awc-typography
            >

            <div class="mt-auto">
              <awc-button href="#" variant="default" size="large">Contact support</awc-button>
            </div>
          </div>
          <!-- content - end -->
        </div>
      </div>
    </div>
  `
};

export const Cta3: StoryObj = {
  name: 'Cta 3',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="mx-auto flex max-w-xl flex-col items-center text-center">
          <awc-typography class="mb-4" noMargin>
            <p class="font-semibold text-primary md:mb-6 md:text-lg xl:text-xl">Proud to introduce</p>
          </awc-typography>
          <awc-typography type="h2" class="mb-8 md:mb-12" noMargin>Revolutionary way to build the web</awc-typography>

          <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <awc-button href="#" variant="primary" size="large">Start now</awc-button>
            <awc-button href="#" variant="ghost" size="large">Take tour</awc-button>
          </div>
        </div>
      </div>
    </div>
  `
};

export const Cta4: StoryObj = {
  name: 'Cta 4',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col items-center justify-between gap-4 rounded-lg bg-neutral-100 p-4 sm:flex-row md:p-8">
          <div>
            <awc-typography type="h5" class="text-primary" noMargin>Start now</awc-typography>
            <awc-typography class="text-neutral-600" noMargin>No Credit Card required</awc-typography>
          </div>
          <awc-button href="#" variant="primary" size="large">Start now</awc-button>
        </div>
      </div>
    </div>
  `
};
