import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Blog',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

const heading = html`<!-- text - start -->
  <div class="mb-10 md:mb-16">
    <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title">
      <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
        >Headline</span
      >
      Latest news
    </h3>
    <p class="mx-auto max-w-screen-md text-center text-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.
    </p>
  </div>
  <!-- text - end -->`;

export const Blog1: StoryObj = {
  name: 'Blog 1',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}
        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8 mb-8">
          <!-- article - start -->
          <awc-card href="#" class="card-image" bordered shadow>
            <awc-image
              slot="image"
              aspectRatio="1.5"
              layout="constrained"
              width="600"
              src="https://placehold.co/600x400"
              class="transition duration-200 group-hover:scale-110 text-sm"
            ></awc-image>

            <div slot="header" class="flex justify-between border-0">
              <awc-tag variant="primary">Tag</awc-tag>
              <span class="flex items-center gap-2 text-neutral-600 text-sm ">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
            </div>

            <div class="flex flex-1 flex-col">
              <h2 class="mb-2 text-lg font-semibold">
                <a href="#" class="transition duration-100 text-title hover:text-primary active:text-primary-600"
                  >Lorem ipsum dolor sit</a
                >
              </h2>

              <p class="mb-4 text-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>

              <span class="flex items-center gap-2 text-neutral-600">
                <awc-icon name="pin-map"></awc-icon>
                <span>Lorem Ipsum</span>
              </span>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card href="#" class="card-image" bordered shadow>
            <awc-image
              slot="image"
              aspectRatio="1.5"
              layout="constrained"
              width="600"
              src="https://placehold.co/600x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>

            <div slot="header" class="flex justify-between border-0">
              <awc-tag variant="primary">Tag</awc-tag>
              <span class="flex items-center gap-2 text-neutral-600  text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
            </div>

            <div class="flex flex-1 flex-col">
              <h2 class="mb-2 text-lg font-semibold">
                <a href="#" class="transition duration-100 text-title hover:text-primary active:text-primary-600"
                  >Lorem ipsum dolor sit</a
                >
              </h2>

              <p class="mb-4 text-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>

              <span class="flex items-center gap-2 text-neutral-600">
                <awc-icon name="pin-map"></awc-icon>
                <span>Lorem Ipsum</span>
              </span>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card href="#" class="card-image" bordered shadow>
            <awc-image
              slot="image"
              aspectRatio="1.5"
              layout="constrained"
              width="600"
              src="https://placehold.co/600x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>

            <div slot="header" class="flex justify-between border-0">
              <awc-tag variant="primary">Tag</awc-tag>
              <span class="flex items-center gap-2 text-neutral-600  text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
            </div>

            <div class="flex flex-1 flex-col">
              <h2 class="mb-2 text-lg font-semibold">
                <a href="#" class="transition duration-100 text-title hover:text-primary active:text-primary-600"
                  >Lorem ipsum dolor sit</a
                >
              </h2>

              <p class="mb-4 text-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>

              <span class="flex items-center gap-2 text-neutral-600">
                <awc-icon name="pin-map"></awc-icon>
                <span>Lorem Ipsum</span>
              </span>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- article - end -->
        </div>
        <div class="text-center">
          <awc-button variant="primary" class="w-full md:w-auto" outline>View all news</awc-button>
        </div>
      </div>
    </div>
  `
};

export const Blog2: StoryObj = {
  name: 'Blog 2',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}
        <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16 mb-8">
          <!-- article - start -->
          <awc-card href="#" class="card-image" horizontal>
            <div
              slot="image"
              class="group block h-56 w-full shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-lg overflow-hidden"
            >
              <awc-image
                slot="image"
                aspectRatio="1"
                layout="filled"
                width="600"
                src="https://placehold.co/600"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div class="flex flex-col gap-2 -mt-4">
              <span class="flex items-center gap-2 text-neutral-600 text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date
                  month="long"
                  day="numeric"
                  year="numeric"
                  date="2020-07-15T09:17:00-04:00"
                ></awc-format-date>
              </span>

              <h2 class="text-xl font-bold">
                <a href="#" class="transition duration-100 text-title hover:text-primary active:text-primary-600"
                  >Lorem ipsum dolor sit</a
                >
              </h2>

              <p class="text-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <div class="flex items-center gap-2">
                <awc-button href="#" variant="text">Read more</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card href="#" class="card-image" horizontal>
            <div
              slot="image"
              class="group block h-56 w-full shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-lg overflow-hidden"
            >
              <awc-image
                slot="image"
                aspectRatio="1"
                layout="filled"
                width="600"
                src="https://placehold.co/600"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div class="flex flex-col gap-2 -mt-4">
              <span class="flex items-center gap-2 text-neutral-600 text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date
                  month="long"
                  day="numeric"
                  year="numeric"
                  date="2020-07-15T09:17:00-04:00"
                ></awc-format-date>
              </span>

              <h2 class="text-xl font-bold">
                <a href="#" class="transition duration-100 text-title hover:text-primary active:text-primary-600"
                  >Lorem ipsum dolor sit</a
                >
              </h2>

              <p class="text-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <div class="flex items-center gap-2">
                <awc-button href="#" variant="text">Read more</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card href="#" class="card-image" horizontal>
            <div
              slot="image"
              class="group block h-56 w-full shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-lg overflow-hidden"
            >
              <awc-image
                slot="image"
                aspectRatio="1"
                layout="filled"
                width="600"
                src="https://placehold.co/600"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div class="flex flex-col gap-2 -mt-4">
              <span class="flex items-center gap-2 text-neutral-600 text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date
                  month="long"
                  day="numeric"
                  year="numeric"
                  date="2020-07-15T09:17:00-04:00"
                ></awc-format-date>
              </span>

              <h2 class="text-xl font-bold">
                <a href="#" class="transition duration-100 text-title hover:text-primary active:text-primary-600"
                  >Lorem ipsum dolor sit</a
                >
              </h2>

              <p class="text-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <div class="flex items-center gap-2">
                <awc-button href="#" variant="text">Read more</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card href="#" class="card-image" horizontal>
            <div
              slot="image"
              class="group block h-56 w-full shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-lg overflow-hidden"
            >
              <awc-image
                slot="image"
                aspectRatio="1"
                layout="filled"
                width="600"
                src="https://placehold.co/600"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div class="flex flex-col gap-2 -mt-4">
              <span class="flex items-center gap-2 text-neutral-600 text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date
                  month="long"
                  day="numeric"
                  year="numeric"
                  date="2020-07-15T09:17:00-04:00"
                ></awc-format-date>
              </span>

              <h2 class="text-xl font-bold">
                <a href="#" class="transition duration-100 text-title hover:text-primary active:text-primary-600"
                  >Lorem ipsum dolor sit</a
                >
              </h2>

              <p class="text-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <div class="flex items-center gap-2">
                <awc-button href="#" variant="text">Read more</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- article - end -->
        </div>
        <div class="text-center">
          <awc-button variant="primary" class="w-full md:w-auto" outline>View all news</awc-button>
        </div>
      </div>
    </div>
  `
};

export const Blog3: StoryObj = {
  name: 'Blog 3',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}
        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8 mb-8">
          <!-- article - start -->
          <awc-card href="#" class="card-image group rounded-lg overflow-hidden h-48 md:h-64 xl:h-96" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="0.75"
                layout="filled"
                width="192"
                src="https://placehold.co/192x256"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class=" awc-theme-light pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-400 to-transparent opacity-75"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end gap-2 text-paragraph awc-theme-dark">
              <span class="flex items-center gap-2  text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
              <h2 class="mb-2 text-xl font-semibold text-title transition duration-100">Lorem ipsum dolor sit</h2>
              <div class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card href="#" class="card-image group rounded-lg overflow-hidden h-48 md:h-64 xl:h-96" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="0.75"
                layout="filled"
                width="192"
                src="https://placehold.co/192x256"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class=" awc-theme-light pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-400 to-transparent opacity-75"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end gap-2 text-paragraph awc-theme-dark">
              <span class="flex items-center gap-2  text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
              <h2 class="mb-2 text-xl font-semibold text-title transition duration-100">Lorem ipsum dolor sit</h2>
              <div class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card href="#" class="card-image group rounded-lg overflow-hidden h-48 md:h-64 xl:h-96" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="0.75"
                layout="filled"
                width="192"
                src="https://placehold.co/192x256"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class=" awc-theme-light pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-400 to-transparent opacity-75"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end gap-2 text-paragraph awc-theme-dark">
              <span class="flex items-center gap-2 text-sm">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
              <h2 class="mb-2 text-xl font-semibold text-title transition duration-100">Lorem ipsum dolor sit</h2>
              <div class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- article - end -->
        </div>
        <div class="text-center">
          <awc-button variant="primary" class="w-full md:w-auto" outline>View all news</awc-button>
        </div>
      </div>
    </div>
  `
};

export const Blog4: StoryObj = {
  name: 'Blog 4',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}
        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 md:grid-rows-3 xl:gap-8 mb-8">
          <!-- article - start -->
          <awc-card class="card-image group md:row-span-3" bordered shadow>
            <div slot="image" class="relative block h-48 w-full lg:h-auto shrink-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="600"
                src="https://placehold.co/600x800"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div slot="header" class="flex justify-between border-0">
              <awc-tag variant="primary">Tag</awc-tag>
              <span class="flex items-center gap-2 text-sm text-neutral-600">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
            </div>

            <div class="flex flex-col gap-2">
              <h2 class="mb-2 text-xl font-semibold transition duration-100">Lorem ipsum dolor sit</h2>

              <p>This is a section of some simple filler text, also known as placeholder text.</p>

              <span class="flex items-center gap-2 text-neutral-600">
                <awc-icon name="pin-map"></awc-icon>
                <span>Lorem Ipsum</span>
              </span>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card class="card-image group" horizontal bordered shadow>
            <div slot="image" class="relative block h-48 w-full md:h-full md:w-32 lg:w-48 shrink-0">
              <awc-image
                aspectRatio="0.75"
                layout="filled"
                width="600"
                src="https://placehold.co/600x800"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div slot="header" class="flex justify-between border-0">
              <awc-tag variant="primary">Tag</awc-tag>
              <span class="flex items-center gap-2 text-sm text-neutral-600">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
            </div>

            <div class="flex flex-col gap-2">
              <h2 class="mb-2 text-xl font-semibold transition duration-100">Lorem ipsum dolor sit</h2>

              <p>This is a section of some simple filler text, also known as placeholder text.</p>

              <span class="flex items-center gap-2 text-neutral-600">
                <awc-icon name="pin-map"></awc-icon>
                <span>Lorem Ipsum</span>
              </span>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card class="card-image group" horizontal bordered shadow>
            <div slot="image" class="relative block h-48 w-full md:h-full md:w-32 lg:w-48 shrink-0">
              <awc-image
                aspectRatio="0.75"
                layout="filled"
                width="600"
                src="https://placehold.co/600x800"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div slot="header" class="flex justify-between border-0">
              <awc-tag variant="primary">Tag</awc-tag>
              <span class="flex items-center gap-2 text-sm text-neutral-600">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
            </div>

            <div class="flex flex-col gap-2">
              <h2 class="mb-2 text-xl font-semibold transition duration-100">Lorem ipsum dolor sit</h2>

              <p>This is a section of some simple filler text, also known as placeholder text.</p>

              <span class="flex items-center gap-2 text-neutral-600">
                <awc-icon name="pin-map"></awc-icon>
                <span>Lorem Ipsum</span>
              </span>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- article - end -->
          <!-- article - start -->
          <awc-card class="card-image group" horizontal bordered shadow>
            <div slot="image" class="relative block h-48 w-full md:h-full md:w-32 lg:w-48 shrink-0">
              <awc-image
                aspectRatio="0.75"
                layout="filled"
                width="600"
                src="https://placehold.co/600x800"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div slot="header" class="flex justify-between border-0">
              <awc-tag variant="primary">Tag</awc-tag>
              <span class="flex items-center gap-2 text-sm text-neutral-600">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date date="2020-07-15T09:17:00-04:00"></awc-format-date>
              </span>
            </div>

            <div class="flex flex-col gap-2">
              <h2 class="mb-2 text-xl font-semibold transition duration-100">Lorem ipsum dolor sit</h2>

              <p>This is a section of some simple filler text, also known as placeholder text.</p>

              <span class="flex items-center gap-2 text-neutral-600">
                <awc-icon name="pin-map"></awc-icon>
                <span>Lorem Ipsum</span>
              </span>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- article - end -->
        </div>
        <div class="text-center">
          <awc-button variant="primary" class="w-full md:w-auto" outline>View all news</awc-button>
        </div>
      </div>
    </div>
  `
};
