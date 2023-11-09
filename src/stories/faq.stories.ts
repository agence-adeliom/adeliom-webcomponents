import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/FAQ',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Faq1: StoryObj = {
  name: 'FAQ 1',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-5 md:mb-8">
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
            Frequently asked questions
          </h3>
          <p class="mx-auto max-w-screen-md text-center text-paragraph"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
          >
        </div>
        <!-- text - end -->

        <div class="flex md:justify-center gap-4 mb-5 md:mb-10">
          <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
          <awc-button variant="primary" class="w-full md:w-auto" outline>Button</awc-button>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
          <!-- question - start -->
          <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
            <span
              class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl"
            >
              <awc-icon name="question"></awc-icon>
            </span>
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
            <span
              class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl"
            >
              <awc-icon name="question"></awc-icon>
            </span>
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
            <span
              class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl"
            >
              <awc-icon name="question"></awc-icon>
            </span>
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
            <span
              class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl"
            >
              <awc-icon name="question"></awc-icon>
            </span>
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
            <span
              class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl"
            >
              <awc-icon name="question"></awc-icon>
            </span>
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
            <span
              class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl"
            >
              <awc-icon name="question"></awc-icon>
            </span>
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
        </div>
      </div>
    </div>
  `
};

export const Faq2: StoryObj = {
  name: 'FAQ 2',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-5 md:mb-8">
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
            Frequently asked questions
          </h3>
          <p class="mx-auto max-w-screen-md text-center text-paragraph"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
          >
        </div>
        <!-- text - end -->

        <div class="flex md:justify-center gap-4 mb-5 md:mb-10">
          <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
          <awc-button variant="primary" class="w-full md:w-auto" outline>Button</awc-button>
        </div>

        <div class="faq-group mx-auto flex max-w-screen-md flex-col gap-4">
          <!-- question - start -->
          <awc-details class="faq-detail">
            <p slot="summary">Lorem ipsum sit dolor</p>
            <p>
              Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
            </p>
          </awc-details>
          <!-- question - end -->
          <!-- question - start -->
          <awc-details class="faq-detail">
            <p slot="summary">Lorem ipsum sit dolor</p>
            <p>
              Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
            </p>
          </awc-details>
          <!-- question - end -->
          <!-- question - start -->
          <awc-details class="faq-detail">
            <p slot="summary">Lorem ipsum sit dolor</p>
            <p>
              Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
            </p>
          </awc-details>
          <!-- question - end -->
          <!-- question - start -->
          <awc-details class="faq-detail">
            <p slot="summary">Lorem ipsum sit dolor</p>
            <p>
              Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
            </p>
          </awc-details>
          <!-- question - end -->
        </div>
      </div>
    </div>

    <script>
      const container = document.querySelector('.faq-group');

      // Close all other details when one is shown
      container.addEventListener('awc-show', event => {
        [...container.querySelectorAll('awc-details')].map(details => (details.open = event.target === details));
      });
    </script>
  `
};

export const Faq3: StoryObj = {
  name: 'FAQ 3',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-5 md:mb-8">
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
            Frequently asked questions
          </h3>
          <p class="mx-auto max-w-screen-md text-center text-paragraph"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
          >
        </div>
        <!-- text - end -->

        <div class="flex md:justify-center gap-4 mb-5 md:mb-10">
          <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
          <awc-button variant="primary" class="w-full md:w-auto" outline>Button</awc-button>
        </div>

        <div class="grid gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-x-12 md:gap-y-10 xl:grid-cols-3 xl:gap-x-16 xl:gap-y-12">
          <!-- question - start -->
          <awc-card style="--padding: 0">
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card style="--padding: 0">
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card style="--padding: 0">
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card style="--padding: 0">
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card style="--padding: 0">
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
          <!-- question - start -->
          <awc-card style="--padding: 0">
            <h5 class="mb-3 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
            <p class="text-paragraph">Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.</p>
          </awc-card>
          <!-- question - end -->
        </div>
      </div>
    </div>
  `
};
export const Faq4: StoryObj = {
  name: 'FAQ 4',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-5 md:mb-8">
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
            Frequently asked questions
          </h3>
          <p class="mx-auto max-w-screen-md text-center text-paragraph"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
          >
        </div>
        <!-- text - end -->

        <div class="flex md:justify-center gap-4 mb-5 md:mb-10">
          <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
          <awc-button variant="primary" class="w-full md:w-auto" outline>Button</awc-button>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 md:gap-8">
          <!-- question - start -->
          <awc-card
            class="rounded-lg bg-neutral-100 dark:bg-neutral-700 p-5"
            style="--padding: 0; --background-color: transparent"
          >
            <div slot="header" class="border-b flex items-center justify-between pb-3">
              <h5 class="m-0 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
              <span
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200 text-2xl"
              >
                <awc-icon name="question"></awc-icon>
              </span>
            </div>
            <p class="pt-4 text-neutral-500 dark:text-neutral-200">
              Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.
            </p>
          </awc-card>
          <!-- question - end -->

          <!-- question - start -->
          <awc-card
            class="rounded-lg bg-neutral-100 dark:bg-neutral-700 p-5"
            style="--padding: 0; --background-color: transparent"
          >
            <div slot="header" class="border-b flex items-center justify-between pb-3">
              <h5 class="m-0 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
              <span
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200 text-2xl"
              >
                <awc-icon name="question"></awc-icon>
              </span>
            </div>
            <p class="pt-4 text-neutral-500 dark:text-neutral-200">
              Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.
            </p>
          </awc-card>
          <!-- question - end -->

          <!-- question - start -->
          <awc-card
            class="rounded-lg bg-neutral-100 dark:bg-neutral-700 p-5"
            style="--padding: 0; --background-color: transparent"
          >
            <div slot="header" class="border-b flex items-center justify-between pb-3">
              <h5 class="m-0 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
              <span
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200 text-2xl"
              >
                <awc-icon name="question"></awc-icon>
              </span>
            </div>
            <p class="pt-4 text-neutral-500 dark:text-neutral-200">
              Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.
            </p>
          </awc-card>
          <!-- question - end -->

          <!-- question - start -->
          <awc-card
            class="rounded-lg bg-neutral-100 dark:bg-neutral-700 p-5"
            style="--padding: 0; --background-color: transparent"
          >
            <div slot="header" class="border-b flex items-center justify-between pb-3">
              <h5 class="m-0 text-large font-semibold text-primary">Lorem ipsum sit dolor</h5>
              <span
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200 text-2xl"
              >
                <awc-icon name="question"></awc-icon>
              </span>
            </div>
            <p class="pt-4 text-neutral-500 dark:text-neutral-200">
              Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
              massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas
              ut.
            </p>
          </awc-card>
          <!-- question - end -->
        </div>
      </div>
    </div>
  `
};

export const Faq5: StoryObj = {
  name: 'FAQ 5',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-5 lg:gap-32">
          <div class="md:col-span-2">
            <!-- text - start -->
            <div class="mb-5 md:mb-8">
              <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
                <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
                Frequently asked questions
              </h3>
              <p class="max-w-screen-md text-paragraph"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
              >
            </div>
            <!-- text - end -->

            <div class="flex gap-4 mb-5 md:mb-10">
              <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
              <awc-button variant="primary" class="w-full md:w-auto" outline>Button</awc-button>
            </div>
          </div>

          <div class="faq-group flex flex-col gap-4  md:col-span-3">
            <!-- question - start -->
            <awc-details class="faq-detail">
              <p slot="summary">Lorem ipsum sit dolor</p>
              <p>
                Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
                massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
              </p>
            </awc-details>
            <!-- question - end -->
            <!-- question - start -->
            <awc-details class="faq-detail">
              <p slot="summary">Lorem ipsum sit dolor</p>
              <p>
                Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
                massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
              </p>
            </awc-details>
            <!-- question - end -->
            <!-- question - start -->
            <awc-details class="faq-detail">
              <p slot="summary">Lorem ipsum sit dolor</p>
              <p>
                Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
                massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
              </p>
            </awc-details>
            <!-- question - end -->
            <!-- question - start -->
            <awc-details class="faq-detail">
              <p slot="summary">Lorem ipsum sit dolor</p>
              <p>
                Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
                massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
              </p>
            </awc-details>
            <!-- question - end -->
            <!-- question - start -->
            <awc-details class="faq-detail">
              <p slot="summary">Lorem ipsum sit dolor</p>
              <p>
                Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed. Velit
                massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
              </p>
            </awc-details>
            <!-- question - end -->
          </div>
        </div>
      </div>
    </div>

    <script>
      const container = document.querySelector('.faq-group');

      // Close all other details when one is shown
      container.addEventListener('awc-show', event => {
        [...container.querySelectorAll('awc-details')].map(details => (details.open = event.target === details));
      });
    </script>
  `
};

export const Faq6: StoryObj = {
  name: 'FAQ 6',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-5">
          <div class="md:col-span-3">
            <!-- text - start -->
            <div class="mb-5 md:mb-8">
              <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
                <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
                Frequently asked questions
              </h3>
              <p class="max-w-screen-md text-paragraph"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
              >
            </div>
            <!-- text - end -->

            <div class="flex gap-4 mb-5 md:mb-10">
              <awc-button variant="primary" class="w-full md:w-auto">Button</awc-button>
              <awc-button variant="primary" class="w-full md:w-auto" outline>Button</awc-button>
            </div>

            <div class="faq-group flex flex-col gap-4">
              <!-- question - start -->
              <awc-details class="faq-detail" open>
                <p slot="summary">Lorem ipsum sit dolor</p>
                <p>
                  Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed.
                  Velit massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
                </p>
              </awc-details>
              <!-- question - end -->
              <!-- question - start -->
              <awc-details class="faq-detail">
                <p slot="summary">Lorem ipsum sit dolor</p>
                <p>
                  Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed.
                  Velit massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
                </p>
              </awc-details>
              <!-- question - end -->
              <!-- question - start -->
              <awc-details class="faq-detail">
                <p slot="summary">Lorem ipsum sit dolor</p>
                <p>
                  Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed.
                  Velit massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
                </p>
              </awc-details>
              <!-- question - end -->
              <!-- question - start -->
              <awc-details class="faq-detail">
                <p slot="summary">Lorem ipsum sit dolor</p>
                <p>
                  Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed.
                  Velit massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
                </p>
              </awc-details>
              <!-- question - end -->
              <!-- question - start -->
              <awc-details class="faq-detail">
                <p slot="summary">Lorem ipsum sit dolor</p>
                <p>
                  Urna pulvinar morbi dis tincidunt. Quam nulla tempus eros diam diam egestas ornare dignissim sed.
                  Velit massa faucibus enim amet a. Vulputate tempor dui sed tempor. Risus adipiscing luctus egestas ut.
                </p>
              </awc-details>
              <!-- question - end -->
            </div>
          </div>

          <div class="md:col-span-2">
            <!-- product - start -->
            <awc-card href="#" class="w-full h-full" inner shadow>
              <div slot="image" class="absolute inset-0">
                <awc-image
                  aspectRatio="1.5"
                  layout="filled"
                  width="750"
                  src="https://placehold.co/750x500/264de4/ebebeb"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800 via-neutral-800 to-transparent opacity-50"
                ></div>
              </div>

              <div class="flex flex-col h-full awc-theme-dark text-paragraph">
                <h2 class="mb-4 text-xl text-title font-semibold transition duration-100">Lorem ipsum dolor sit</h2>

                <p>This is a section of some simple filler text, also known as placeholder text.</p>

                <span class="flex items-center gap-2 text-sm">
                  <awc-icon name="pin-map"></awc-icon>
                  <span>Lorem Ipsum</span>
                </span>

                <div slot="footer" class="flex items-center gap-2 mt-4">
                  <awc-button variant="primary" class="w-full md:w-auto">Learn more</awc-button>
                </div>
              </div>
            </awc-card>
            <!-- product - end -->
          </div>
        </div>
      </div>
    </div>

    <script>
      const container = document.querySelector('.faq-group');

      // Close all other details when one is shown
      container.addEventListener('awc-show', event => {
        [...container.querySelectorAll('awc-details')].map(details => (details.open = event.target === details));
      });
    </script>
  `
};
