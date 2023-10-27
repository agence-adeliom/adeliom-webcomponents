import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Stats',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Stats1: StoryObj = {
  name: 'Stats 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h3" class="mb-4 text-center" noMargin> Our Team by the numbers </awc-typography>
          <awc-typography
            class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block"
            noMargin
          >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
          <!-- stat - start -->
          <div class="flex flex-col items-center md:p-4">
            <div class="text-xl font-bold text-primary sm:text-2xl md:text-3xl">200</div>
            <div class="text-sm font-semibold sm:text-base">People</div>
          </div>
          <!-- stat - end -->

          <!-- stat - start -->
          <div class="flex flex-col items-center md:p-4">
            <div class="text-xl font-bold text-primary sm:text-2xl md:text-3xl">500+</div>
            <div class="text-sm font-semibold sm:text-base">People</div>
          </div>

          <!-- stat - start -->
          <div class="flex flex-col items-center md:p-4">
            <div class="text-xl font-bold text-primary sm:text-2xl md:text-3xl">1000+</div>
            <div class="text-sm font-semibold sm:text-base">Customers</div>
          </div>
          <!-- stat - end -->

          <!-- stat - start -->
          <div class="flex flex-col items-center md:p-4">
            <div class="text-xl font-bold text-primary sm:text-2xl md:text-3xl">A couple</div>
            <div class="text-sm font-semibold sm:text-base">Coffee breaks</div>
          </div>
          <!-- stat - end -->
        </div>
      </div>
    </div>
  `
};

export const Stats2: StoryObj = {
  name: 'Stats 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-lg px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h3" class="mb-4 text-center" noMargin> Our Team by the numbers </awc-typography>
          <awc-typography
            class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block"
            noMargin
          >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 gap-6 rounded-lg bg-primary p-6 md:grid-cols-4 md:gap-8 md:p-8">
          <!-- stat - start -->
          <div class="flex flex-col items-center">
            <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">200</div>
            <div class="text-sm text-primary-200 sm:text-base">People</div>
          </div>
          <!-- stat - end -->

          <!-- stat - start -->
          <div class="flex flex-col items-center">
            <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
            <div class="text-sm text-primary-200 sm:text-base">People</div>
          </div>

          <!-- stat - start -->
          <div class="flex flex-col items-center">
            <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
            <div class="text-sm text-primary-200 sm:text-base">Customers</div>
          </div>
          <!-- stat - end -->

          <!-- stat - start -->
          <div class="flex flex-col items-center">
            <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">A couple</div>
            <div class="text-sm text-primary-200 sm:text-base">Coffee breaks</div>
          </div>
          <!-- stat - end -->
        </div>
      </div>
    </div>
  `
};

export const Stats3: StoryObj = {
  name: 'Stats 3',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h3" class="mb-4 text-center" noMargin> Our Team by the numbers </awc-typography>
          <awc-typography
            class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block"
            noMargin
          >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          <!-- stat - start -->
          <div
            class="flex flex-col items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8"
          >
            <div class="text-xl font-bold text-primary sm:text-2xl md:text-3xl">200</div>
            <div class="text-sm font-semibold sm:text-base">People</div>
          </div>
          <!-- stat - end -->

          <!-- stat - start -->
          <div
            class="flex flex-col items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 md:p-8"
          >
            <div class="text-xl font-bold text-primary sm:text-2xl md:text-3xl">500+</div>
            <div class="text-sm font-semibold sm:text-base">People</div>
          </div>

          <!-- stat - start -->
          <div
            class="flex flex-col items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 md:p-8"
          >
            <div class="text-xl font-bold text-primary sm:text-2xl md:text-3xl">1000+</div>
            <div class="text-sm font-semibold sm:text-base">Customers</div>
          </div>
          <!-- stat - end -->

          <!-- stat - start -->
          <div
            class="flex flex-col items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 md:p-8"
          >
            <div class="text-xl font-bold text-primary sm:text-2xl md:text-3xl">A couple</div>
            <div class="text-sm font-semibold sm:text-base">Coffee breaks</div>
          </div>
          <!-- stat - end -->
        </div>
      </div>
    </div>
  `
};
