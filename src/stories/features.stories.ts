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
    <h3 class="text-3xlarge md:text-4xlarge xl:text-5xlarge font-semibold leading-dense text-center mb-4 text-title">
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
          <swiper-container
            navigation="true"
            space-between="16"
            breakpoints='{"480":{"slidesPerView":2},"1024":{"slidesPerView":3}}'
            navigation-prev-el="awc-button.navigation-prev"
            navigation-next-el="awc-button.navigation-next"
            class="mb-8"
          >
            <!-- feature - start -->
            <swiper-slide>
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
            </swiper-slide>
            <!-- feature - end -->
            <!-- feature - start -->
            <swiper-slide>
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
            </swiper-slide>
            <!-- feature - end -->
            <!-- feature - start -->
            <swiper-slide>
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
            </swiper-slide>
            <!-- feature - end -->
            <!-- feature - start -->
            <swiper-slide>
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
            </swiper-slide>
            <!-- feature - end -->
            <!-- feature - start -->
            <swiper-slide>
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
            </swiper-slide>
            <!-- feature - end -->
            <!-- feature - start -->
            <swiper-slide>
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
            </swiper-slide>
            <!-- feature - end -->
            <!-- feature - start -->
            <swiper-slide>
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
            </swiper-slide>
            <!-- feature - end -->
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

      .feature-5 swiper-container::part(container) {
        --swiper-navigation-sides-offset: -20px;
        overflow: visible;
      }

      .feature-5 swiper-container .navigation {
        position: absolute;
        top: 100%;
        left: 50%;
        right: auto;
        margin-top: 1rem;
        transform: translate3d(-50%, 0, 0);
      }

      .feature-5 swiper-container .navigation .swiper-button-disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      @media screen and (min-width: 767px) {
        .feature-5 swiper-container .navigation {
          position: static;
          transform: none;
          left: auto;
          right: auto;
          margin: 0;
        }
        .feature-5 swiper-container .navigation .navigation-prev,
        .feature-5 swiper-container .navigation .navigation-next {
          position: absolute;
          top: 50%;
          z-index: 1;
          margin: 0;
          transform: translate3d(0, -50%, 0);
        }

        .feature-5 swiper-container .navigation .navigation-prev {
          left: var(--swiper-navigation-sides-offset, 20px);
        }

        .feature-5 swiper-container .navigation .navigation-next {
          right: var(--swiper-navigation-sides-offset, 20px);
        }
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
