import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Content',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Content1: StoryObj = {
  name: 'Content 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div class="relative h-64 overflow-hidden rounded-lg bg-neutral-100 shadow-lg md:h-auto">
              <awc-image
                layout="filled"
                aspectRatio="0.8"
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c"
              ></awc-image>
            </div>
          </div>

          <awc-typography noMargin>
            <p class="text-center font-bold text-primary md:text-left">Who we are</p>

            <h1 class="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left">
              Our competitive advantage
            </h1>

            <p class="mb-6 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.<br /><br />

              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is
              <a
                href="#"
                class="text-primary underline transition duration-100 hover:text-primary-600 active:text-primary-700"
                >random</a
              >
              or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar to real text.
            </p>

            <h2 class="mb-2 text-center text-xl font-semibold sm:text-2xl md:mb-4 md:text-left">About us</h2>

            <p class="mb-6 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.
            </p>
          </awc-typography>
        </div>
      </div>
    </div>
  `
};

export const Content2: StoryObj = {
  name: 'Content 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div class="md:order-1">
            <div class="relative h-64 overflow-hidden rounded-lg bg-neutral-100 shadow-lg md:h-auto">
              <awc-image
                layout="filled"
                aspectRatio="0.8"
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c"
              ></awc-image>
            </div>
          </div>

          <awc-typography noMargin>
            <p class="text-center font-bold text-primary md:text-left">Who we are</p>

            <h1 class="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left">
              Our competitive advantage
            </h1>

            <p class="mb-6 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.<br /><br />

              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is
              <a
                href="#"
                class="text-primary underline transition duration-100 hover:text-primary-600 active:text-primary-700"
                >random</a
              >
              or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar to real text.
            </p>

            <h2 class="mb-2 text-center text-xl font-semibold sm:text-2xl md:mb-4 md:text-left">About us</h2>

            <p class="mb-6 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.
            </p>
          </awc-typography>
        </div>
      </div>
    </div>
  `
};

export const Content3: StoryObj = {
  name: 'Content 3',
  render: () => html`
    <div class="bg-white dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid gap-8 lg:gap-12">
          <awc-typography noMargin>
            <p class="text-center font-bold text-primary md:text-left">Who we are</p>

            <h1 class="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left">
              Our competitive advantage
            </h1>

            <p class="mb-6 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.<br /><br />

              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is
              <a
                href="#"
                class="text-primary underline transition duration-100 hover:text-primary-600 active:text-primary-700"
                >random</a
              >
              or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar to real text.
            </p>

            <h2 class="mb-2 text-center text-xl font-semibold sm:text-2xl md:mb-4 md:text-left">About us</h2>

            <p class="mb-6 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.
            </p>
          </awc-typography>

          <div>
            <div class="relative h-64 overflow-hidden rounded-lg bg-neutral-100 shadow-lg md:h-auto md:aspect-[16/9]">
              <awc-image
                layout="filled"
                aspectRatio="1.5"
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c"
              ></awc-image>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};
