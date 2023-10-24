import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Banner',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Banner1: StoryObj = {
  name: 'Banner 1',
  render: () =>
    html`<div class="bg-white dark:bg-neutral-950 pb-5">
      <!-- banner - start -->
      <div
        class="relative flex flex-wrap bg-primary-800 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8"
      >
        <div
          class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base"
        >
          This is a section of some simple filler text, also known as placeholder text.
        </div>

        <awc-button href="#" variant="primary" class="order-last">Learn more</awc-button>

        <!-- close button - start -->
        <div
          class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3"
        >
          <awc-button type="button" variant="text">
            <awc-icon name="x-lg" class="text-white"></awc-icon>
          </awc-button>
        </div>
        <!-- close button - end -->
      </div>
      <!-- banner - end -->
    </div>`
};

export const Banner2: StoryObj = {
  name: 'Banner 2',
  render: () =>
    html`<div class="bg-white  dark:bg-neutral-950 py-5">
      <!-- banner - start -->
      <div class="container mx-auto px-4 md:px-8">
        <div
          class="relative flex flex-wrap rounded-lg bg-primary-950 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8"
        >
          <div
            class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base"
          >
            This is a section of some simple filler text, also known as placeholder text.
          </div>

          <awc-button href="#" variant="primary" class="order-last">Learn more</awc-button>

          <!-- close button - start -->
          <div
            class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3"
          >
            <awc-button type="button" variant="text">
              <awc-icon name="x-lg" class="text-white"></awc-icon>
            </awc-button>
          </div>
          <!-- close button - end -->
        </div>
      </div>
      <!-- banner - end -->
    </div>`
};
