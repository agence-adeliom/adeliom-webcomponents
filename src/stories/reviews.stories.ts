import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Reviews',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

const heading = html`<!-- text - start -->
  <div class="mb-8 md:mb-10">
    <awc-typography type="h2" class="text-center mb-4 text-title">
      <span class="text-base font-bold leading-dense text-paragraph uppercase block">Headline</span>
      Customer Reviews
    </awc-typography>
    <awc-typography class="mx-auto max-w-screen-md text-center text-paragraph"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</awc-typography
    >
  </div>
  <!-- text - end -->`;

export const Reviews1: StoryObj = {
  name: 'Reviews 1',
  render: () => html`
    <div class="container mx-auto">
      <div class="mx-auto max-w-screen-md">
        ${heading}
        <div class="mb-8 flex items-center justify-between border p-6">
          <div class="flex flex-col gap-0.5">
            <span class="block font-bold text-title">Total</span>

            <!-- stars - start -->
            <awc-rating label="Rating" readonly value="4.5"></awc-rating>
            <!-- stars - end -->

            <span class="block text-sm text-neutral-500">Bases on 27 reviews</span>
          </div>

          <awc-button href="#" variant="primary" outline>Write a review</awc-button>
        </div>

        <div class="grid gap-6">
          <!-- review - start -->
          <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
            <div slot="header" class="mb-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->
            </div>

            <div slot="footer" class="mt-4">
              <span class="block text-sm text-paragraph font-bold">John McCulling</span>
              <span class="block text-sm text-paragraph">
                <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
              </span>
            </div>

            <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
            <p class="text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing.
            </p>
          </awc-card>
          <!-- review - end -->

          <!-- review - start -->
          <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
            <div slot="header" class="mb-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->
            </div>

            <div slot="footer" class="mt-4">
              <span class="block text-sm text-paragraph font-bold">John McCulling</span>
              <span class="block text-sm text-paragraph">
                <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
              </span>
            </div>

            <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
            <p class="text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing.
            </p>
          </awc-card>
          <!-- review - end -->

          <!-- review - start -->
          <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
            <div slot="header" class="mb-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->
            </div>

            <div slot="footer" class="mt-4">
              <span class="block text-sm text-paragraph font-bold">John McCulling</span>
              <span class="block text-sm text-paragraph">
                <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
              </span>
            </div>

            <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
            <p class="text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing.
            </p>
          </awc-card>
          <!-- review - end -->

          <!-- review - start -->
          <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
            <div slot="header" class="mb-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->
            </div>

            <div slot="footer" class="mt-4">
              <span class="block text-sm text-paragraph font-bold">John McCulling</span>
              <span class="block text-sm text-paragraph">
                <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
              </span>
            </div>

            <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
            <p class="text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing.
            </p>
          </awc-card>
          <!-- review - end -->

          <!-- review - start -->
          <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
            <div slot="header" class="mb-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->
            </div>

            <div slot="footer" class="mt-4">
              <span class="block text-sm text-paragraph font-bold">John McCulling</span>
              <span class="block text-sm text-paragraph">
                <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
              </span>
            </div>

            <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
            <p class="text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing.
            </p>
          </awc-card>
          <!-- review - end -->
        </div>
      </div>
    </div>
  `
};

export const Reviews2: StoryObj = {
  name: 'Reviews 2',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <!-- overview - start -->
        <div>
          <div class="border border-[var(--awc-card-border-color)] p-6">
            <h2 class="mb-3 text-x-large font-bold lg:text-3x-large">Customer Reviews</h2>

            <div class="mb-0.5 flex items-center gap-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly show-rate value="4"></awc-rating>
              <!-- stars - end -->
            </div>

            <span class="block text-sm text-neutral-500">Bases on 27 reviews</span>

            <div class="my-5 flex flex-col gap-2 border-t border-b  border-[var(--awc-card-border-color)] py-5">
              <!-- star - start -->
              <div class="flex items-center gap-3">
                <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500">5 Star</span>

                <div class="block h-4 flex-1">
                  <awc-progress-bar value="60"></awc-progress-bar>
                </div>
              </div>
              <!-- star - end -->

              <!-- star - start -->
              <div class="flex items-center gap-3">
                <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500">4 Star</span>

                <div class="block h-4 flex-1">
                  <awc-progress-bar value="20"></awc-progress-bar>
                </div>
              </div>
              <!-- star - end -->

              <!-- star - start -->
              <div class="flex items-center gap-3">
                <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500">3 Star</span>

                <div class="block h-4 flex-1">
                  <awc-progress-bar value="15"></awc-progress-bar>
                </div>
              </div>
              <!-- star - end -->

              <!-- star - start -->
              <div class="flex items-center gap-3">
                <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500">2 Star</span>

                <div class="block h-4 flex-1">
                  <awc-progress-bar value="25"></awc-progress-bar>
                </div>
              </div>
              <!-- star - end -->

              <!-- star - start -->
              <div class="flex items-center gap-3">
                <span class="w-10 whitespace-nowrap text-right text-sm text-neutral-500">1 Star</span>

                <div class="block h-4 flex-1">
                  <awc-progress-bar value="8"></awc-progress-bar>
                </div>
              </div>
              <!-- star - end -->
            </div>

            <awc-button href="#" size="large" variant="primary" outline class="w-full">Write a review</awc-button>
          </div>
        </div>
        <!-- overview - end -->

        <!-- reviews - start -->
        <div class="lg:col-span-2">
          <div class="pb-4 md:pb-6 flex justify-end">
            <awc-select value="rating" class="w-auto">
              <awc-option value="rating">Best rating</awc-option>
              <awc-option value="date">Most recent</awc-option>
            </awc-select>
          </div>

          <div class="grid gap-6">
            <!-- review - start -->
            <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
              <div slot="header" class="mb-2">
                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="5"></awc-rating>
                <!-- stars - end -->
              </div>

              <div slot="footer" class="mt-4">
                <span class="block text-sm text-paragraph font-bold">John McCulling</span>
                <span class="block text-sm text-paragraph">
                  <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                </span>
              </div>

              <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
              <p class="text-paragraph">
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
              </p>
            </awc-card>
            <!-- review - end -->

            <!-- review - start -->
            <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
              <div slot="header" class="mb-2">
                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="5"></awc-rating>
                <!-- stars - end -->
              </div>

              <div slot="footer" class="mt-4">
                <span class="block text-sm text-paragraph font-bold">John McCulling</span>
                <span class="block text-sm text-paragraph">
                  <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                </span>
              </div>

              <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
              <p class="text-paragraph">
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
              </p>
            </awc-card>
            <!-- review - end -->

            <!-- review - start -->
            <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
              <div slot="header" class="mb-2">
                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="5"></awc-rating>
                <!-- stars - end -->
              </div>

              <div slot="footer" class="mt-4">
                <span class="block text-sm text-paragraph font-bold">John McCulling</span>
                <span class="block text-sm text-paragraph">
                  <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                </span>
              </div>

              <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
              <p class="text-paragraph">
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
              </p>
            </awc-card>
            <!-- review - end -->

            <!-- review - start -->
            <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
              <div slot="header" class="mb-2">
                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="5"></awc-rating>
                <!-- stars - end -->
              </div>

              <div slot="footer" class="mt-4">
                <span class="block text-sm text-paragraph font-bold">John McCulling</span>
                <span class="block text-sm text-paragraph">
                  <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                </span>
              </div>

              <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
              <p class="text-paragraph">
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
              </p>
            </awc-card>
            <!-- review - end -->

            <!-- review - start -->
            <awc-card class="border-b border-[var(--awc-card-border-color)] pb-6 px-6" style="--padding: 0">
              <div slot="header" class="mb-2">
                <!-- stars - start -->
                <awc-rating label="Rating" readonly value="5"></awc-rating>
                <!-- stars - end -->
              </div>

              <div slot="footer" class="mt-4">
                <span class="block text-sm text-paragraph font-bold">John McCulling</span>
                <span class="block text-sm text-paragraph">
                  <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                </span>
              </div>

              <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
              <p class="text-paragraph">
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
              </p>
            </awc-card>
            <!-- review - end -->
          </div>

          <div class="pt-6 text-center">
            <awc-button href="#" variant="text">Read all reviews</awc-button>
          </div>
        </div>
        <!-- reviews - end -->
      </div>
    </div>
  `
};

export const Reviews3: StoryObj = {
  name: 'Reviews 3',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}

        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <!-- review - start -->
          <awc-card bordered>
            <div slot="footer" class="flex items-center gap-3">
              <awc-avatar initials="JM" style="--size: 2.25rem"></awc-avatar>
              <div class="leading-dense">
                <span class="block text-sm text-paragraph font-bold">John McCulling</span>
                <span class="block text-sm text-paragraph">
                  <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                </span>
              </div>
            </div>

            <div class="mb-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->
            </div>
            <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
            <p class="text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing.
            </p>
          </awc-card>
          <!-- review - end -->
          <!-- review - start -->
          <awc-card bordered>
            <div slot="footer" class="flex items-center gap-3">
              <awc-avatar initials="JM" style="--size: 2.25rem"></awc-avatar>
              <div class="leading-dense">
                <span class="block text-sm text-paragraph font-bold">John McCulling</span>
                <span class="block text-sm text-paragraph">
                  <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                </span>
              </div>
            </div>

            <div class="mb-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->
            </div>
            <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
            <p class="text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing.
            </p>
          </awc-card>
          <!-- review - end -->
          <!-- review - start -->
          <awc-card bordered>
            <div slot="footer" class="flex items-center gap-3">
              <awc-avatar initials="JM" style="--size: 2.25rem"></awc-avatar>
              <div class="leading-dense">
                <span class="block text-sm text-paragraph font-bold">John McCulling</span>
                <span class="block text-sm text-paragraph">
                  <awc-format-date date="2021-08-28" month="long" day="numeric" year="numeric"></awc-format-date>
                </span>
              </div>
            </div>

            <div class="mb-2">
              <!-- stars - start -->
              <awc-rating label="Rating" readonly value="5"></awc-rating>
              <!-- stars - end -->
            </div>
            <h4 class="text-title font-bold mb-1">Lorem ipsum dolor</h4>
            <p class="text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing.
            </p>
          </awc-card>
          <!-- review - end -->
        </div>
      </div>
    </div>
  `
};
