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
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-32">
          <div class="relative overflow-hidden shadow-lg aspect-ratio-4/3">
            <awc-image layout="filled" aspectRatio="1.33333" src="https://placehold.co/800x600"></awc-image>
          </div>

          <awc-typography no-margin>
            <h1 class="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left text-title">
              <span class="text-base font-semibold text-paragraph leading-dense uppercase block mb-2">Headline</span>
              Erat suspendisse maecena
            </h1>

            <p class="mb-6 md:mb-8 text-paragraph ">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to a real text.<br /><br />

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

            <h2 class="mb-2 text-center text-xl font-semibold text-title sm:text-2xl md:mb-4 md:text-left">About us</h2>

            <p class="mb-6 md:mb-8 text-paragraph ">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.
            </p>

            <div class="flex gap-4">
              <awc-button variant="primary">View all news</awc-button>
              <awc-button variant="primary" outline>View all news</awc-button>
            </div>
          </awc-typography>
        </div>
      </div>
    </div>
  `
};

export const Content2: StoryObj = {
  name: 'Content 2',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-32">
          <awc-typography no-margin>
            <h1 class="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left text-title">
              <span class="text-base font-semibold text-paragraph leading-dense uppercase block mb-2">Headline</span>
              Erat suspendisse maecena
            </h1>

            <p class="mb-6 md:mb-8 text-paragraph ">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to a real text.<br /><br />

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

            <h2 class="mb-2 text-center text-xl font-semibold text-title sm:text-2xl md:mb-4 md:text-left">About us</h2>

            <p class="mb-6 md:mb-8 text-paragraph ">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.
            </p>

            <div class="flex gap-4">
              <awc-button variant="primary">View all news</awc-button>
              <awc-button variant="primary" outline>View all news</awc-button>
            </div>
          </awc-typography>

          <div class="relative overflow-hidden shadow-lg aspect-ratio-4/3">
            <awc-image layout="filled" aspectRatio="1.33333" src="https://placehold.co/800x600"></awc-image>
          </div>
        </div>
      </div>
    </div>
  `
};

export const Content3: StoryObj = {
  name: 'Content 3',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col gap-8 justify-center max-w-3xl mx-auto">
          <awc-typography no-margin>
            <h1 class="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left text-title">
              <span class="text-base font-semibold text-paragraph leading-dense uppercase block mb-2">Headline</span>
              Erat suspendisse maecena
            </h1>

            <p class="mb-6 md:mb-8 text-paragraph ">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to a real text.<br /><br />

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

            <h2 class="mb-2 text-center text-xl font-semibold text-title sm:text-2xl md:mb-4 md:text-left">About us</h2>

            <p class="mb-6 md:mb-8 text-paragraph ">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to real text.
            </p>

            <div class="flex gap-4">
              <awc-button variant="primary">View all news</awc-button>
              <awc-button variant="primary" outline>View all news</awc-button>
            </div>
          </awc-typography>

          <div class="relative overflow-hidden shadow-lg aspect-ratio-16/9">
            <awc-image layout="filled" aspectRatio="1.77777" src="https://placehold.co/800x450"></awc-image>
          </div>
        </div>
      </div>
    </div>
  `
};

export const Content4: StoryObj = {
  name: 'Content 4',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid md:grid-cols-3">
          <awc-typography no-margin>
            <h1 class="mb-4 text-center text-2xl font-bold sm:text-3xl md:mb-6 md:text-left text-title">
              <span class="text-base font-semibold text-paragraph leading-dense uppercase block mb-2">Headline</span>
              Erat suspendisse maecena
            </h1>
          </awc-typography>

          <awc-typography no-margin class="md:col-span-2">
            <p class="mb-6 md:mb-8 text-paragraph ">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random or otherwise generated. It may be used to display a
              sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks
              very similar to a real text.<br /><br />

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

            <div class="flex gap-4">
              <awc-button variant="primary">View all news</awc-button>
              <awc-button variant="primary" outline>View all news</awc-button>
            </div>
          </awc-typography>
        </div>
      </div>
    </div>
  `
};
