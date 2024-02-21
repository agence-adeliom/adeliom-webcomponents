import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Collections',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Collections1: StoryObj = {
  name: 'Collections 1',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="mb-6 flex items-center justify-between gap-4">
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
              >Headline</span
            >
            Collections
          </h3>
          <awc-button href="#" variant="primary" outline class="hidden sm:block">Show more</awc-button>
        </div>

        <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 mb-8">
          <!-- product - start -->
          <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
            <div slot="image">
              <awc-image
                slot="image"
                layout="filled"
                width="600"
                height="400"
                src="https://placehold.co/600x400"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div class="flex flex-1 flex-col">
              <span class="text-base text-sm text-paragraph leading-dense uppercase block">Headline</span>
              <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- product - end -->
          <!-- product - start -->
          <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
            <div slot="image">
              <awc-image
                slot="image"
                layout="filled"
                width="600"
                height="400"
                src="https://placehold.co/600x400"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div class="flex flex-1 flex-col">
              <span class="text-base text-sm text-paragraph leading-dense uppercase block">Headline</span>
              <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- product - end -->
          <!-- product - start -->
          <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
            <div slot="image">
              <awc-image
                slot="image"
                layout="filled"
                width="600"
                height="400"
                src="https://placehold.co/600x400"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
            </div>

            <div class="flex flex-1 flex-col">
              <span class="text-base text-sm text-paragraph leading-dense uppercase block">Headline</span>
              <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
            </div>

            <div slot="footer" class="flex items-center gap-2">
              <awc-button variant="primary">Learn more</awc-button>
            </div>
          </awc-card>
          <!-- product - end -->
        </div>

        <div class="text-center block sm:hidden">
          <awc-button variant="primary" class="w-full md:w-auto" outline>Show more</awc-button>
        </div>
      </div>
    </div>
  `
};

export const Collections2: StoryObj = {
  name: 'Collections 2',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h3
            class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title"
          >
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
              >Headline</span
            >
            Erat suspendisse maecena
          </h3>
          <p class="mx-auto max-w-screen-md text-center text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.
          </p>
        </div>
        <!-- text - end -->

        <div class="grid gap-6 sm:grid-cols-2">
          <!-- product - start -->
          <awc-card href="#" class="card-image group overflow-hidden h-80 lg:h-96" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="750"
                src="https://placehold.co/750x500"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="awc-theme-light pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-400 to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end awc-theme-dark">
              <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
                Erat suspendisse maecena
              </h3>
              <div>
                <awc-button variant="primary">Button</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- product - end -->
          <!-- product - start -->
          <awc-card href="#" class="card-image group overflow-hidden h-80 lg:h-96" inner shadow>
            <div slot="image" class="absolute inset-0">
              <awc-image
                aspectRatio="1.5"
                layout="filled"
                width="750"
                src="https://placehold.co/750x500"
                class="transition duration-200 group-hover:scale-110"
              ></awc-image>
              <div
                class="awc-theme-light pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-400 to-transparent opacity-50"
              ></div>
            </div>

            <div class="flex flex-col h-full justify-end awc-theme-dark">
              <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
                Erat suspendisse maecena
              </h3>
              <div>
                <awc-button variant="primary">Button</awc-button>
              </div>
            </div>
          </awc-card>
          <!-- product - end -->
        </div>
      </div>
    </div>
  `
};

export const Collections3: StoryObj = {
  name: 'Collections 3',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12 overflow-hidden">
      <div class="container mx-auto px-4 md:px-8">
        <div class="mb-6 flex items-center justify-between gap-4">
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
              >Headline</span
            >
            Erat suspendisse maecena
          </h3>
        </div>
        <swiper-container
          navigation="true"
          class="card-collection-3 mb-8"
          space-between="16"
          breakpoints='{"480":{"slidesPerView":2},"1024":{"slidesPerView":3}}'
          navigation-prev-el="awc-button.navigation-prev"
          navigation-next-el="awc-button.navigation-next"
        >
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <div slot="container-end">
            <div class="navigation">
              <awc-button variant="secondary" class="navigation-prev" icon="square">
                <awc-icon library="system" name="chevron-left" aria-hidden="true" loading="eager"></awc-icon>
              </awc-button>
              <awc-button variant="secondary" class="navigation-next" icon="square">
                <awc-icon library="system" name="chevron-right" aria-hidden="true" loading="eager"></awc-icon>
              </awc-button>
            </div>
          </div>
        </swiper-container>
      </div>
    </div>

    <style>
      .card-collection-3::part(container) {
        overflow: visible;
      }

      .card-collection-3 .navigation {
        position: absolute;
        top: 100%;
        left: 50%;
        right: auto;
        margin-top: 1rem;
        transform: translate3d(-50%, 0, 0);
      }

      .card-collection-3 .navigation .swiper-button-disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      @media screen and (min-width: 767px) {
        .card-collection-3 .navigation {
          top: -4rem;
          left: auto;
          right: 0;
          z-index: 1;
          margin: 0;
          transform: translate3d(0, -50%, 0);
        }
      }
    </style>
  `
};

export const Collections4: StoryObj = {
  name: 'Collections 4',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12 overflow-hidden">
      <div class="container mx-auto px-4 md:px-8">
        <div class="mb-6 flex items-center justify-between gap-4">
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
              >Headline</span
            >
            Erat suspendisse maecena
          </h3>
        </div>
        <swiper-container
          navigation="true"
          class="card-collection-4 mb-8"
          space-between="16"
          breakpoints='{"480":{"slidesPerView":2},"1024":{"slidesPerView":3}}'
          navigation-prev-el="awc-button.navigation-prev"
          navigation-next-el="awc-button.navigation-next"
        >
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <div slot="container-end">
            <div class="navigation">
              <awc-button variant="secondary" class="navigation-prev" icon="square">
                <awc-icon library="system" name="chevron-left" aria-hidden="true" loading="eager"></awc-icon>
              </awc-button>
              <awc-button variant="secondary" class="navigation-next" icon="square">
                <awc-icon library="system" name="chevron-right" aria-hidden="true" loading="eager"></awc-icon>
              </awc-button>
            </div>
          </div>
        </swiper-container>
      </div>
    </div>

    <style>
      .card-collection-4::part(container) {
        --swiper-navigation-sides-offset: -20px;
        overflow: visible;
      }

      .card-collection-4 .navigation-prev,
      .card-collection-4 .navigation-next {
        position: absolute;
        top: var(--swiper-navigation-top-offset, 50%);
        z-index: 1;
        transform: translate3d(0, -50%, 0);
      }

      .card-collection-4 .navigation-prev {
        left: var(--swiper-navigation-sides-offset, 10px);
      }
      .card-collection-4 .navigation-next {
        right: var(--swiper-navigation-sides-offset, 10px);
      }

      .card-collection-4 .navigation .swiper-button-disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    </style>
  `
};

export const Collections5: StoryObj = {
  name: 'Collections 5',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12 overflow-hidden">
      <div class="container mx-auto px-4 md:px-8">
        <div class="mb-6 flex items-center justify-between gap-4">
          <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense mb-4 text-title">
            <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
              >Headline</span
            >
            Erat suspendisse maecena
          </h3>
        </div>
        <swiper-container
          navigation="true"
          pagination="true"
          class="card-collection-5 mb-8"
          space-between="16"
          pagination-type="progressbar"
          breakpoints='{"480":{"slidesPerView":2},"1024":{"slidesPerView":3}}'
          navigation-prev-el="awc-button.navigation-prev"
          navigation-next-el="awc-button.navigation-next"
        >
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <!-- product - start -->
          <swiper-slide>
            <awc-card href="#" class="card-collection group overflow-hidden" shadow bordered>
              <div slot="image">
                <awc-image
                  slot="image"
                  layout="filled"
                  width="600"
                  height="400"
                  src="https://placehold.co/600x400"
                  class="transition duration-200 group-hover:scale-110"
                ></awc-image>
              </div>

              <div class="flex flex-1 flex-col">
                <span class="text-base text-sm text-neutral-800 leading-dense text-paragraph uppercase block"
                  >Headline</span
                >
                <h2 class="mb-2 text-lg font-semibold text-title">Lorem ipsum dolor sit</h2>
              </div>

              <div slot="footer" class="flex items-center gap-2">
                <awc-button variant="primary">Learn more</awc-button>
              </div>
            </awc-card>
          </swiper-slide>
          <!-- product - end -->
          <div slot="container-end">
            <div class="navigation">
              <awc-button variant="secondary" class="navigation-prev" icon="square">
                <awc-icon library="system" name="chevron-left" aria-hidden="true" loading="eager"></awc-icon>
              </awc-button>
              <awc-button variant="secondary" class="navigation-next" icon="square">
                <awc-icon library="system" name="chevron-right" aria-hidden="true" loading="eager"></awc-icon>
              </awc-button>
            </div>
          </div>
        </swiper-container>
      </div>
    </div>

    <style>
      .card-collection-5::part(container) {
        --swiper-pagination-color: var(--awc-color-primary-600);
        --swiper-pagination-progressbar-bg-color: var(--awc-color-neutral-200);
        --swiper-pagination-progressbar-size: 4px;

        overflow: visible;
      }

      .card-collection-5::part(pagination) {
        top: 100%;
        margin-top: 1.5rem;
        right: 8rem;
        width: auto;
      }

      .card-collection-5 .navigation {
        position: absolute;
        top: 100%;
        left: auto;
        right: 0;
        z-index: 1;
        margin: 0;
        margin-top: 1.5rem;
        transform: translate3d(0, -50%, 0);
      }

      .card-collection-5 .navigation .swiper-button-disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    </style>
  `
};
