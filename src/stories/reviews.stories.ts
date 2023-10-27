import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Reviews',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Reviews1: StoryObj = {
  name: 'Reviews 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-md px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h2" class="text-center mb-4">Customer Reviews</awc-typography>
          <awc-typography class="mx-auto max-w-screen-md text-center">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</awc-typography>
        </div>
        <!-- text - end -->
        <div class="mb-4 flex items-center justify-between border-t border-b py-4">
          <div class="flex flex-col gap-0.5">
            <span class="block font-bold">Total</span>

            <!-- stars - start -->
            <awc-rating label="Rating" readonly value="4.5"></awc-rating>
            <!-- stars - end -->

            <span class="block text-sm text-neutral-500 dark:text-neutral-200">Bases on 27 reviews</span>
          </div>

          <awc-button href="#" size="large">Write a review</awc-button>
        </div>

        <div class="divide-y">
          <!-- review - start -->
          <div class="flex flex-col gap-3 py-4 md:py-8">
            <div>
              <span class="block text-sm font-bold">John McCulling</span>
              <span class="block text-sm text-neutral-500 dark:text-neutral-200">
                <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
              </span>
            </div>

            <!-- stars - start -->
            <awc-rating label="Rating" readonly value="5"></awc-rating>
            <!-- stars - end -->

            <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
          </div>
          <!-- review - end -->

          <!-- review - start -->
          <div class="flex flex-col gap-3 py-4 md:py-8">
            <div>
              <span class="block text-sm font-bold">Kate Berg</span>
              <span class="block text-sm text-neutral-500 dark:text-neutral-200">
                <awc-format-date date="2021-07-21" month="long" day="numeric" year="numeric"></awc-format-date>
              </span>
            </div>

            <!-- stars - start -->
            <awc-rating label="Rating" readonly value="5"></awc-rating>
            <!-- stars - end -->

            <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
          </div>
          <!-- review - end -->

          <!-- review - start -->
          <div class="flex flex-col gap-3 py-4 md:py-8">
            <div>
              <span class="block text-sm font-bold">Greg Jackson</span>
              <span class="block text-sm text-neutral-500 dark:text-neutral-200">
                <awc-format-date date="2021-03-16" month="long" day="numeric" year="numeric"></awc-format-date>
              </span>
            </div>

            <!-- stars - start -->
            <awc-rating label="Rating" readonly value="3"></awc-rating>
            <!-- stars - end -->

            <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
          </div>
          <!-- review - end -->
        </div>
      </div>
    </div>
  `
};

export const Reviews2: StoryObj = {
  name: 'Reviews 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <!-- overview - start -->
          <div>
            <div class="rounded-lg border p-4">
              <h2 class="mb-3 text-lg font-bold lg:text-xl">Customer Reviews</h2>

              <div class="mb-0.5 flex items-center gap-2">
                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="4"></awc-rating>
                <!-- stars - end -->

                <span class="text-sm font-semibold">4/5</span>
              </div>

              <span class="block text-sm text-neutral-500 dark:text-neutral-200">Bases on 27 reviews</span>

              <div class="my-5 flex flex-col gap-2 border-t border-b py-5">
                <!-- star - start -->
                <div class="flex items-center gap-3">
                  <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500 dark:text-neutral-200">5 Star</span>

                  <div class="block h-4 flex-1">
                    <awc-progress-bar value="60" style="--indicator-color: var(--awc-color-amber-500)"></awc-progress-bar>
                  </div>
                </div>
                <!-- star - end -->

                <!-- star - start -->
                <div class="flex items-center gap-3">
                  <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500 dark:text-neutral-200">4 Star</span>

                  <div class="block h-4 flex-1">
                    <awc-progress-bar value="20" style="--indicator-color: var(--awc-color-amber-500)"></awc-progress-bar>
                  </div>
                </div>
                <!-- star - end -->

                <!-- star - start -->
                <div class="flex items-center gap-3">
                  <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500 dark:text-neutral-200">3 Star</span>

                  <div class="block h-4 flex-1">
                    <awc-progress-bar value="15" style="--indicator-color: var(--awc-color-amber-500)"></awc-progress-bar>
                  </div>
                </div>
                <!-- star - end -->

                <!-- star - start -->
                <div class="flex items-center gap-3">
                  <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500 dark:text-neutral-200">2 Star</span>

                  <div class="block h-4 flex-1">
                    <awc-progress-bar value="25" style="--indicator-color: var(--awc-color-amber-500)"></awc-progress-bar>
                  </div>
                </div>
                <!-- star - end -->

                <!-- star - start -->
                <div class="flex items-center gap-3">
                  <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500 dark:text-neutral-200">1 Star</span>

                  <div class="block h-4 flex-1">
                    <awc-progress-bar value="8" style="--indicator-color: var(--awc-color-amber-500)"></awc-progress-bar>
                  </div>
                </div>
                <!-- star - end -->
              </div>

              <awc-button href="#" size="large" class="w-full">Write a review</awc-button>
            </div>
          </div>
          <!-- overview - end -->

          <!-- reviews - start -->
          <div class="lg:col-span-2">
            <div class="border-b pb-4 md:pb-6">
              <h2 class="text-lg font-bold lg:text-xl">Top Reviews</h2>
            </div>

            <div class="divide-y">
              <!-- review - start -->
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">John McCulling</span>
                  <span class="block text-sm text-neutral-500 dark:text-neutral-200">
                    <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                  </span>
                </div>

                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="5"></awc-rating>
                <!-- stars - end -->

                <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
              </div>
              <!-- review - end -->

              <!-- review - start -->
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">Kate Berg</span>
                  <span class="block text-sm text-neutral-500 dark:text-neutral-200">
                    <awc-format-date date="2021-07-21" month="long" day="numeric" year="numeric"></awc-format-date>
                  </span>
                </div>

                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="5"></awc-rating>
                <!-- stars - end -->

                <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
              </div>
              <!-- review - end -->

              <!-- review - start -->
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">Greg Jackson</span>
                  <span class="block text-sm text-neutral-500 dark:text-neutral-200">
                    <awc-format-date date="2021-03-16" month="long" day="numeric" year="numeric"></awc-format-date>
                  </span>
                </div>

                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="3"></awc-rating>
                <!-- stars - end -->

                <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
              </div>
              <!-- review - end -->
            </div>

            <div class="border-t pt-6">
              <awc-button href="#" variant="text" >Read all reviews</awc-button>
            </div>
          </div>
          <!-- reviews - end -->
        </div>
      </div>
    </div>
  `
};

export const Reviews3: StoryObj = {
  name: 'Reviews 3',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h2" class="text-center mb-4">Customer Reviews</awc-typography>
          <awc-typography class="mx-auto max-w-screen-md text-center">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <!-- review - start -->
          <awc-card bordered>
            <div class="flex flex-col gap-3" >
              <div>
                <span class="block text-sm font-bold md:text-base">John McCulling</span>
                <span class="block text-sm text-neutral-500 dark:text-neutral-200">August 28, 2021</span>
              </div>

              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->

              <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
            </div>
          </awc-card>
          <!-- review - end -->

          <!-- review - start -->
          <awc-card bordered>
            <div class="flex flex-col gap-3" >
              <div>
                <span class="block text-sm font-bold md:text-base">Kate Berg</span>
                <span class="block text-sm text-neutral-500 dark:text-neutral-200">July 21, 2021</span>
              </div>

              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->

              <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
            </div>
          </awc-card>
          <!-- review - end -->

          <!-- review - start -->
          <awc-card bordered>
            <div class="flex flex-col gap-3" >
              <div>
                <span class="block text-sm font-bold md:text-base">Greg Jackson</span>
                <span class="block text-sm text-neutral-500 dark:text-neutral-200">March 16, 2021</span>
              </div>

              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="3"></awc-rating>
              <!-- stars - end -->

              <p class="text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
            </div>
          </awc-card>
          <!-- review - end -->
        </div>
      </div>
    </div>
  `
};
