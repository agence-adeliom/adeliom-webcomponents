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

          <div>
            <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 md:mb-6 text-title">
              <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
              Erat suspendisse maecena
            </h3>

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

            <h4 class="text-2x-large md:text-3x-large xl:text-4x-large font-semibold leading-dense mb-4 md:mb-6 text-title">
              About us
            </h4>

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
          </div>
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
          <div>
            <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 md:mb-6 text-title">
              <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
              Erat suspendisse maecena
            </h3>

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

            <h4 class="text-2x-large md:text-3x-large xl:text-4x-large font-semibold leading-dense mb-4 md:mb-6 text-title">
              About us
            </h4>

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
          </div>

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
          <div>
            <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 md:mb-6 text-title">
              <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
              Erat suspendisse maecena
            </h3>

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

            <h4 class="text-2x-large md:text-3x-large xl:text-4x-large font-semibold leading-dense mb-4 md:mb-6 text-title">
              About us
            </h4>

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
          </div>

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
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 md:mb-6 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
            Erat suspendisse maecena
          </h3>

          <div class="md:col-span-2">
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
          </div>
        </div>
      </div>
    </div>
  `
};
