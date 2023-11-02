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
          <awc-typography type="h2" class="text-title">
            <span class="text-base font-semibold text-paragraph leading-dense uppercase block">Headline</span>
            Erat suspendisse maecena
          </awc-typography>
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
          <awc-typography type="h2" class="text-center text-title">
            <span class="text-base font-semibold text-paragraph leading-dense uppercase block">Headline</span>
            Erat suspendisse maecena
          </awc-typography>
          <awc-typography class="mx-auto max-w-screen-md text-center text-paragraph"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</awc-typography
          >
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
              <awc-typography class="text-title" type="h3">Lorem ipsum dolor</awc-typography>
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
              <awc-typography class="text-title" type="h3">Lorem ipsum dolor</awc-typography>
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
                  <awc-typography type="h2" class="text-title">
                      <span class="text-base font-semibold text-paragraph leading-dense uppercase block">Headline</span>
                      Erat suspendisse maecena
                  </awc-typography>
              </div>
              <awc-carousel
                      navigation
                      class="card-collection mb-8"
                      style="--aspect-ratio: null;"
                      space-between="16"
                      breakpoints='{"480":{"slidesPerView":2},"1024":{"slidesPerView":3}}'
              >
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
              </awc-carousel>
          </div>
      </div>

      <style>
          .card-collection::part(base) {
              overflow: visible;
          }
          .card-collection::part(navigation-button) {
              position: absolute;
              top: 100%;
              left: 50%;
              right: auto;
              margin-top: 2rem;
          }
          .card-collection::part(navigation-button--previous) {
              transform: translate3d(-125%, -50%, 0);
          }
          .card-collection::part(navigation-button--next) {
              transform: translate3d(25%, -50%, 0);
          }
          @media screen and (min-width: 767px) {
              .card-collection::part(navigation-button) {
                  top: -4rem;
                  left: auto;
                  right: 0;
                  font-size: 1.5rem;
                  z-index: 1;
                  border: 1px solid var(--awc-color-primary-600);
                  color: var(--awc-color-primary-600);
                  border-radius: var(--awc-border-radius-none);
                  padding: 0.5rem;
                  margin: 0;
                  transform: translate3d(0, -50%, 0);
              }
              .card-collection::part(navigation-button--previous) {
                  right: 4rem;
                  left: auto;
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
                  <awc-typography type="h2" class="text-title">
                      <span class="text-base font-semibold text-paragraph leading-dense uppercase block">Headline</span>
                      Erat suspendisse maecena
                  </awc-typography>
              </div>
              <awc-carousel
                      navigation
                      class="card-collection mb-8"
                      style="--aspect-ratio: null;--navigation-sides-offset: -2.5rem;--navigation-disabled-opacity: 0"
                      space-between="16"
                      breakpoints='{"480":{"slidesPerView":2},"1024":{"slidesPerView":3}}'
              >
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
                  <!-- product - start -->
                  <awc-carousel-item>
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
                  </awc-carousel-item>
                  <!-- product - end -->
              </awc-carousel>
          </div>
      </div>

      <style>
          .card-collection::part(base) {
              overflow: visible;
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
          <awc-typography type="h2" class="text-title">
            <span class="text-base font-semibold text-paragraph leading-dense uppercase block">Headline</span>
            Erat suspendisse maecena
          </awc-typography>
        </div>
        <awc-carousel
          navigation
          class="card-collection mb-8"
          style="--aspect-ratio: null;"
          space-between="16"
          pagination="progressbar"
          breakpoints='{"480":{"slidesPerView":2},"1024":{"slidesPerView":3}}'
        >
          <!-- product - start -->
          <awc-carousel-item>
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
          </awc-carousel-item>
          <!-- product - end -->
          <!-- product - start -->
          <awc-carousel-item>
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
          </awc-carousel-item>
          <!-- product - end -->
          <!-- product - start -->
          <awc-carousel-item>
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
          </awc-carousel-item>
          <!-- product - end -->
          <!-- product - start -->
          <awc-carousel-item>
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
          </awc-carousel-item>
          <!-- product - end -->
          <!-- product - start -->
          <awc-carousel-item>
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
          </awc-carousel-item>
          <!-- product - end -->
        </awc-carousel>
      </div>
    </div>

    <style>
        .card-collection::part(base) {
            overflow: visible;
        }

        .card-collection::part(pagination) {
            top: 100%;
            margin-top: 1.5rem;
            right: 8rem;
            width: auto;
        }
        .card-collection::part(navigation-button) {
            top: 100%;
            left: auto;
            right: 0;
            font-size: 1.5rem;
            z-index: 1;
            border: 1px solid var(--awc-color-primary-600);
            color: var(--awc-color-primary-600);
            border-radius: var(--awc-border-radius-none);
            padding: 0.5rem;
            margin: 0;
            margin-top: 1.5rem;
            transform: translate3d(0, -50%, 0);
        }
        .card-collection::part(navigation-button--previous) {
            right: 4rem;
            left: auto;
        }
    </style>
  `
};
