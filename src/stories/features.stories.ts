import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Features',
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
      Porta lorem mollis aliquam
    </h3>
    <p class="mx-auto max-w-screen-md text-center text-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.
    </p>
  </div>
  <!-- text - end -->`;

export const Features1: StoryObj = {
  name: 'Features 1',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}

        <div class="feature-1 grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none" horizontal>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none" horizontal>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none" horizontal>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none" horizontal>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none" horizontal>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none" horizontal>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
        </div>
      </div>
    </div>

    <style>
      .feature-1 awc-card {
        --padding: 0;
        text-align: center;
      }

      .feature-1 awc-card::part(image) {
        margin: 0 auto 1rem;
      }

      .feature-1 awc-card awc-button {
        --awc-button-font-size-medium: var(--awc-font-size-medium);
      }

      @media (min-width: 768px) {
        .feature-1 awc-card {
          --padding: 0 0 1rem 1.5rem;
          text-align: left;
        }
      }
    </style>
  `
};

export const Features2: StoryObj = {
  name: 'Features 2',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}

        <div class="feature-2 grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
        </div>
      </div>
    </div>

    <style>
      .feature-2 awc-card {
        --padding: 0;
      }
      .feature-2 awc-card::part(image) {
        margin: 0 auto 1rem;
      }
      .feature-2 awc-card awc-button {
        --awc-button-font-size-medium: var(--awc-font-size-medium);
      }
    </style>
  `
};

export const Features3: StoryObj = {
  name: 'Features 3',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}

        <div class="feature-3 grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-primary md:h-14 md:w-14">
              <awc-icon name="graph-up-arrow" class="text-5xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-primary md:h-14 md:w-14">
              <awc-icon name="graph-up-arrow" class="text-5xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-primary md:h-14 md:w-14">
              <awc-icon name="graph-up-arrow" class="text-5xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-primary md:h-14 md:w-14">
              <awc-icon name="graph-up-arrow" class="text-5xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-primary md:h-14 md:w-14">
              <awc-icon name="graph-up-arrow" class="text-5xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-primary md:h-14 md:w-14">
              <awc-icon name="graph-up-arrow" class="text-5xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
        </div>
      </div>
    </div>

    <style>
      .feature-3 awc-card {
        --padding: 0;
      }
      .feature-3 awc-card::part(image) {
        margin: 0 auto 1rem;
      }
      .feature-3 awc-card awc-button {
        --awc-button-font-size-medium: var(--awc-font-size-medium);
      }
    </style>
  `
};

export const Features4: StoryObj = {
  name: 'Features 4',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}

        <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          <!-- feature - start -->
          <awc-card bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
        </div>
      </div>
    </div>
  `
};

export const Features5: StoryObj = {
  name: 'Features 5',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}

        <div class="feature-5">
          <awc-carousel
            navigation
            slides-per-view="1"
            slides-per-group="1"
            space-between="16"
            breakpoints='{"480":{"slidesPerView":2},"1024":{"slidesPerView":3}}'
            class="mb-8"
            style="--navigation-sides-offset: -2.5rem;"
          >
            <!-- feature - start -->
            <awc-carousel-item>
              <awc-card class="relative rounded-lg bg-none text-center">
                <div
                  slot="image"
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
                >
                  <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
                </div>
                <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
                <p class="text-paragraph">
                  Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <awc-button href="#" variant="text">More</awc-button>
              </awc-card>
            </awc-carousel-item>
            <!-- feature - end -->
            <!-- feature - start -->
            <awc-carousel-item>
              <awc-card class="relative rounded-lg bg-none text-center">
                <div
                  slot="image"
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
                >
                  <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
                </div>
                <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
                <p class="text-paragraph">
                  Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <awc-button href="#" variant="text">More</awc-button>
              </awc-card>
            </awc-carousel-item>
            <!-- feature - end -->
            <!-- feature - start -->
            <awc-carousel-item>
              <awc-card class="relative rounded-lg bg-none text-center">
                <div
                  slot="image"
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
                >
                  <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
                </div>
                <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
                <p class="text-paragraph">
                  Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <awc-button href="#" variant="text">More</awc-button>
              </awc-card>
            </awc-carousel-item>
            <!-- feature - end -->
            <!-- feature - start -->
            <awc-carousel-item>
              <awc-card class="relative rounded-lg bg-none text-center">
                <div
                  slot="image"
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
                >
                  <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
                </div>
                <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
                <p class="text-paragraph">
                  Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <awc-button href="#" variant="text">More</awc-button>
              </awc-card>
            </awc-carousel-item>
            <!-- feature - end -->
            <!-- feature - start -->
            <awc-carousel-item>
              <awc-card class="relative rounded-lg bg-none text-center">
                <div
                  slot="image"
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
                >
                  <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
                </div>
                <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
                <p class="text-paragraph">
                  Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <awc-button href="#" variant="text">More</awc-button>
              </awc-card>
            </awc-carousel-item>
            <!-- feature - end -->
            <!-- feature - start -->
            <awc-carousel-item>
              <awc-card class="relative rounded-lg bg-none text-center">
                <div
                  slot="image"
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
                >
                  <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
                </div>
                <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
                <p class="text-paragraph">
                  Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <awc-button href="#" variant="text">More</awc-button>
              </awc-card>
            </awc-carousel-item>
            <!-- feature - end -->
            <!-- feature - start -->
            <awc-carousel-item>
              <awc-card class="relative rounded-lg bg-none text-center">
                <div
                  slot="image"
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 md:rounded-xl"
                >
                  <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
                </div>
                <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
                <p class="text-paragraph">
                  Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <awc-button href="#" variant="text">More</awc-button>
              </awc-card>
            </awc-carousel-item>
            <!-- feature - end -->
          </awc-carousel>
        </div>
      </div>
    </div>

    <style>
      .feature-5 awc-card {
        --padding: 0;
      }
      .feature-5 awc-card::part(image) {
        margin: 0 auto 1rem;
      }
      .feature-5 awc-card awc-button {
        --awc-button-font-size-medium: var(--awc-font-size-medium);
      }
    </style>
  `
};

export const Features6: StoryObj = {
  name: 'Features 6',
  render: () => html`
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        ${heading}

        <div class="feature-6 grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
          <!-- feature - start -->
          <awc-card class="relative" horizontal bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative" horizontal bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative" horizontal bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative" horizontal bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative" horizontal bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
          <!-- feature - start -->
          <awc-card class="relative" horizontal bordered shadow>
            <div
              slot="image"
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-title shadow-lg md:h-14 md:w-14 ml-[var(--awc-card-padding)] mt-[var(--awc-card-padding)] md:rounded-xl"
            >
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <h6 class="mb-2 font-semibold text-title text-large">Lorem ipsum</h6>
            <p class="text-paragraph">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <awc-button href="#" variant="text">More</awc-button>
          </awc-card>
          <!-- feature - end -->
        </div>
      </div>
    </div>

    <style></style>
  `
};
