import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Gallery',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Gallery1: StoryObj = {
  name: 'Gallery 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h2" class="mb-4 text-center" noMargin> Gallery </awc-typography>
          <awc-typography
            class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block"
            noMargin
          >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-96" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-end gap-2">
              <span
                class="relative mr-3 mb-3 inline-block rounded-lg border border-neutral-500 px-2 py-1 text-xs text-neutral-200 backdrop-blur md:px-3 md:text-sm"
                >VR</span
              >
            </div>
          </awc-card>
          <!-- image - end -->

          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-96" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-end gap-2">
              <span
                class="relative mr-3 mb-3 inline-block rounded-lg border border-neutral-500 px-2 py-1 text-xs text-neutral-200 backdrop-blur md:px-3 md:text-sm"
                >Retro</span
              >
            </div>
          </awc-card>
          <!-- image - end -->

          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-96" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-end gap-2">
              <span
                class="relative mr-3 mb-3 inline-block rounded-lg border border-neutral-500 px-2 py-1 text-xs text-neutral-200 backdrop-blur md:px-3 md:text-sm"
                >Tech</span
              >
            </div>
          </awc-card>
          <!-- image - end -->
        </div>
      </div>
    </div>
  `
};

export const Gallery2: StoryObj = {
  name: 'Gallery 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div class="flex items-center gap-12">
            <awc-typography type="h2" noMargin> Gallery </awc-typography>
            <awc-typography class="hidden max-w-screen-sm text-neutral-500 dark:text-neutral-200 md:block" noMargin>
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text.
            </awc-typography>
          </div>

          <awc-button href="#" size="large">More</awc-button>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-80" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-start gap-2">
              <span class="relative inline-block text-sm text-white md:text-lg">VR</span>
            </div>
          </awc-card>
          <!-- image - end -->

          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:col-span-2 md:h-80" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="1000"
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-start gap-2">
              <span class="relative inline-block text-sm text-white md:text-lg">Tech</span>
            </div>
          </awc-card>
          <!-- image - end -->

          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:col-span-2 md:h-80" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="1000"
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-start gap-2">
              <span class="relative inline-block text-sm text-white md:text-lg">Dev</span>
            </div>
          </awc-card>
          <!-- image - end -->

          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-80" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-start gap-2">
              <span class="relative inline-block text-sm text-white md:text-lg">Retro</span>
            </div>
          </awc-card>
          <!-- image - end -->
        </div>
      </div>
    </div>
  `
};

export const Gallery3: StoryObj = {
  name: 'Gallery 3',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <awc-typography type="h2" class="mb-4 md:mb-8 xl:mb-12 text-center" noMargin> Gallery </awc-typography>

        <div class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-80" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-start gap-2">
              <span class="relative inline-block text-sm text-white md:text-lg">VR</span>
            </div>
          </awc-card>
          <!-- image - end -->

          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-80" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-start gap-2">
              <span class="relative inline-block text-sm text-white md:text-lg">Tech</span>
            </div>
          </awc-card>
          <!-- image - end -->

          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-80" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-start gap-2">
              <span class="relative inline-block text-sm text-white md:text-lg">Dev</span>
            </div>
          </awc-card>
          <!-- image - end -->

          <!-- image - start -->
          <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-80" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1"
                layout="filled"
                width="600"
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                class="transition duration-200 group-hover:scale-110 absolute inset-0"
              ></awc-image>
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end items-start gap-2">
              <span class="relative inline-block text-sm text-white md:text-lg">Retro</span>
            </div>
          </awc-card>
          <!-- image - end -->
        </div>

        <div class="flex items-start justify-between gap-8 sm:items-center">
          <awc-typography class="max-w-screen-sm text-neutral-500 dark:text-neutral-200" noMargin>
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text.
          </awc-typography>
          <awc-button href="#" size="large">More</awc-button>
        </div>
      </div>
    </div>
  `
};
