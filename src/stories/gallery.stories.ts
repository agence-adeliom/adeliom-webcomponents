import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Gallery',
  parameters: {
    layout: ''
  }
} satisfies Meta;

const heading = html`<!-- text - start -->
  <div class="mb-10 md:mb-16">
    <awc-typography type="h2" class="text-center mb-4 text-title">
      <span class="text-base font-bold leading-dense text-paragraph uppercase block">Headline</span>
      Our image gallery
    </awc-typography>
    <awc-typography class="mx-auto max-w-screen-md text-center text-paragraph"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</awc-typography
    >
  </div>
  <!-- text - end -->`;

export const Gallery1: StoryObj = {
  name: 'Gallery 1',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      ${heading}

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        <!-- image - start -->
        <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-96" inner shadow>
          <div slot="image" class="absolute inset-0">
            <awc-image
              aspectRatio="1.5"
              layout="filled"
              width="600"
              src="https://placehold.co/600x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>
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
              src="https://placehold.co/600x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>
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
              src="https://placehold.co/600x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>
          </div>
        </awc-card>
        <!-- image - end -->
      </div>
    </div>
  `
};

export const Gallery2: StoryObj = {
  name: 'Gallery 2',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      ${heading}

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        <!-- image - start -->
        <awc-card class="group relative flex h-48 items-end overflow-hidden md:h-80" inner shadow>
          <div slot="image" class="absolute inset-0">
            <awc-image
              aspectRatio="1.5"
              layout="filled"
              width="600"
              src="https://placehold.co/600x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>
          </div>
        </awc-card>
        <!-- image - end -->

        <!-- image - start -->
        <awc-card class="group relative flex h-48 items-end overflow-hidden md:col-span-2 md:h-80" inner shadow>
          <div slot="image" class="absolute inset-0">
            <awc-image
              aspectRatio="1.5"
              layout="filled"
              width="1200"
              src="https://placehold.co/1200x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>
          </div>
        </awc-card>
        <!-- image - end -->

        <!-- image - start -->
        <awc-card class="group relative flex h-48 items-end overflow-hidden md:col-span-2 md:h-80" inner shadow>
          <div slot="image" class="absolute inset-0">
            <awc-image
              aspectRatio="1.5"
              layout="filled"
              width="1200"
              src="https://placehold.co/1200x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>
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
              src="https://placehold.co/600x400"
              class="transition duration-200 group-hover:scale-110"
            ></awc-image>
          </div>
        </awc-card>
        <!-- image - end -->
      </div>
    </div>
  `
};
