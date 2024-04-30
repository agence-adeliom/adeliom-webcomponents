import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Hero',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Hero1: StoryObj = {
  name: 'Hero 1',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div class="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
          <div class="hidden sm:block mb-6 lg:mb-12 xl:mb-24">
            <awc-breadcrumb>
              <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
                >Web Design</awc-breadcrumb-item
              >
            </awc-breadcrumb>
          </div>

          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <p class="mb-8 md:mb-12 lg:w-4/5 xl:text-lg text-paragraph">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random.
          </p>

          <div class="flex w-full flex-row gap-2.5 justify-center lg:justify-start">
            <awc-button href="#" variant="primary" size="large" class="w-full md:w-auto">Start now</awc-button>
            <awc-button href="#" variant="ghost" size="large" class="w-full md:w-auto">Take tour</awc-button>
          </div>
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="h-48 overflow-hidden relative rounded-lg bg-neutral-100 shadow-lg lg:h-auto xl:w-5/12">
          <awc-image
            aspectRatio="1.3"
            layout="filled"
            width="1000"
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e"
          ></awc-image>
        </div>
        <!-- image - end -->
      </section>
    </div>
  `
};

export const Hero2: StoryObj = {
  name: 'Hero 2',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <div class="hidden sm:block mb-6">
        <awc-breadcrumb>
          <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
            >Web Design</awc-breadcrumb-item
          >
        </awc-breadcrumb>
      </div>
      <section
        class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-100 py-16 shadow-lg md:py-20 xl:py-48"
      >
        <!-- image - start -->
        <awc-image
          aspectRatio="1.5"
          layout="inset"
          width="1500"
          src="https://images.unsplash.com/photo-1618004652321-13a63e576b80"
        ></awc-image>
        <!-- image - end -->

        <!-- overlay - start -->
        <div class="absolute inset-0 bg-neutral-600 dark:bg-neutral-400 mix-blend-multiply"></div>
        <!-- overlay - end -->

        <!-- text start -->
        <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
          <h2
            class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-neutral-0 dark:text-neutral-1000 text-center mb-8 md:mb-12"
          >
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <div class="flex w-full flex-row gap-2.5 justify-center px-3">
            <awc-button href="#" variant="primary" size="large" class="w-full md:w-auto">Start now</awc-button>
            <awc-button
              href="#"
              variant="ghost"
              class="text-neutral-0 dark:text-neutral-1000 w-full md:w-auto"
              size="large"
              >Take tour</awc-button
            >
          </div>
        </div>
        <!-- text end -->
      </section>
    </div>
  `
};

export const Hero3: StoryObj = {
  name: 'Hero 3',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <div class="hidden sm:block mb-6">
        <awc-breadcrumb>
          <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
            >Web Design</awc-breadcrumb-item
          >
        </awc-breadcrumb>
      </div>
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div class="flex flex-col justify-between xl:w-5/12">
          <div></div>

          <div class="sm:text-center lg:py-12 lg:text-left xl:py-24">
            <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
              <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
                >Very proud to introduce</span
              >
              Revolutionary way to build the web
            </h2>

            <div class="flex w-full flex-row gap-2.5 justify-center lg:justify-start">
              <awc-button href="#" variant="primary" size="large" class="w-full md:w-auto">Start now</awc-button>
              <awc-button href="#" variant="ghost" size="large" class="w-full md:w-auto">Take tour</awc-button>
            </div>
          </div>

          <!-- social - start -->
          <div class="mt-8 flex items-center justify-center gap-4 sm:mt-16 lg:justify-start">
            <span class="text-sm font-semibold uppercase tracking-widest text-paragraph sm:text-base">Social</span>
            <span class="h-px w-12 bg-paragraph"></span>

            <div class="flex gap-2 text-xl leading-none">
              <awc-icon-button
                name="instagram"
                href="#"
                target="_blank"
                label="Instagram"
                class="text-primary"
              ></awc-icon-button>
              <awc-icon-button
                name="facebook"
                href="#"
                target="_blank"
                label="Facebook"
                class="text-primary"
              ></awc-icon-button>
              <awc-icon-button
                name="linkedin"
                href="#"
                target="_blank"
                label="LinkedIn"
                class="text-primary"
              ></awc-icon-button>
              <awc-icon-button
                name="twitter"
                href="#"
                target="_blank"
                label="Twitter"
                class="text-primary"
              ></awc-icon-button>
            </div>
          </div>
          <!-- social - end -->
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="h-48 overflow-hidden rounded-lg bg-neutral-100 shadow-lg lg:h-auto xl:w-5/12">
          <awc-image
            aspectRatio="1.5"
            layout="filled"
            width="1000"
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead"
          ></awc-image>
        </div>
        <!-- image - end -->
      </section>
    </div>
  `
};

export const Hero4: StoryObj = {
  name: 'Hero 4',
  render: () => html`
      <div class="container mx-auto px-4 md:px-8">
        <div class="hidden sm:block mb-6">
          <awc-breadcrumb>
            <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
            <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
            <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
            <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</awc-breadcrumb-item>
          </awc-breadcrumb>
        </div>
        <section class="flex flex-col items-center">
          <div class="flex w-full items-center justify-center bg-neutral-100 pb-14 pt-8 lg:py-32 lg:mb-10">
            <div class="max-w-xl flex flex-col items-center text-center">
              <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
                <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary">Very proud to introduce</span>
                Revolutionary way to build the web
              </h2>

              <div class="flex w-full flex-row gap-2.5 justify-center px-3">
                <awc-button href="#" variant="primary" size="large" class="w-full md:w-auto">Start now</awc-button>
                <awc-button href="#" variant="ghost" size="large" class="w-full md:w-auto">Take tour</awc-button>
              </div>
            </div>
          </div>

          <!-- social - start -->
          <div class="flex items-center justify-center gap-4 lg:justify-start">
            <span class="text-sm font-semibold uppercase tracking-widest text-paragraph sm:text-base">Social</span>
            <span class="h-px w-12 bg-paragraph"></span>

            <div class="flex gap-2 text-xl leading-none">
              <awc-icon-button name="instagram" href="#" target="_blank" label="Instagram" class="text-primary"></awc-icon-button>
              <awc-icon-button name="facebook" href="#" target="_blank" label="Facebook" class="text-primary"></awc-icon-button>
              <awc-icon-button name="linkedin" href="#" target="_blank" label="LinkedIn" class="text-primary"></awc-icon-button>
              <awc-icon-button name="twitter" href="#" target="_blank" label="Twitter" class="text-primary"></awc-icon-button>
            </div>
        </section>
      </div>
  `
};

export const Hero5: StoryObj = {
  name: 'Hero 5',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <div class="hidden sm:block mb-6">
        <awc-breadcrumb>
          <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
            >Web Design</awc-breadcrumb-item
          >
        </awc-breadcrumb>
      </div>
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div
          class="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24"
        >
          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <p class="mb-8 text-paragraph md:mb-12 lg:w-4/5 xl:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random.
          </p>

          <form class="flex w-full gap-2 md:max-w-md">
            <awc-input type="email" placeholder="Email" class="w-full flex-1"></awc-input>
            <awc-button variant="primary">Sign up</awc-button>
          </form>
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="h-48 overflow-hidden rounded-lg bg-neutral-100 shadow-lg lg:h-auto xl:w-5/12">
          <awc-image
            aspectRatio="1.5"
            layout="filled"
            width="1000"
            src="https://images.unsplash.com/photo-1620206343767-7da98185edd4"
          ></awc-image>
        </div>
        <!-- image - end -->
      </section>
    </div>
  `
};

export const Hero6: StoryObj = {
  name: 'Hero 6',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <div class="hidden sm:block mb-6">
        <awc-breadcrumb>
          <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
            >Web Design</awc-breadcrumb-item
          >
        </awc-breadcrumb>
      </div>
      <section class="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <div class="flex flex-row gap-2.5 justify-center lg:justify-start">
            <awc-button href="#" variant="primary" size="large" class="w-full md:w-auto">Start now</awc-button>
            <awc-button href="#" variant="ghost" size="large" class="w-full md:w-auto">Take tour</awc-button>
          </div>
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="h-48 overflow-hidden rounded-lg bg-neutral-100 shadow-lg lg:h-96 xl:w-5/12">
          <awc-image
            aspectRatio="1.5"
            layout="filled"
            width="1000"
            src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191"
            class="w-full h-full"
          ></awc-image>
        </div>
        <!-- image - end -->
      </section>

      <section class="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
        <!-- stats - start -->
        <div class="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
          <div class="px-6 md:px-8">
            <span class="block text-center text-lg font-bold text-primary md:text-left md:text-xl">200</span>
            <span class="block text-center text-sm font-semibold text-paragraph md:text-left md:text-base">People</span>
          </div>

          <div class="px-6 md:px-8">
            <span class="block text-center text-lg font-bold text-primary md:text-left md:text-xl">500+</span>
            <span class="block text-center text-sm font-semibold text-paragraph md:text-left md:text-base"
              >Projects</span
            >
          </div>

          <div class="px-6 md:px-8">
            <span class="block text-center text-lg font-bold text-primary md:text-left md:text-xl">250+</span>
            <span class="block text-center text-sm font-semibold text-paragraph md:text-left md:text-base"
              >Customers</span
            >
          </div>

          <div class="px-6 md:px-8">
            <span class="block text-center text-lg font-bold text-primary md:text-left md:text-xl">A couple</span>
            <span class="block text-center text-sm font-semibold text-paragraph md:text-left md:text-base"
              >Coffee breaks</span
            >
          </div>
        </div>
        <!-- stats - end -->

        <!-- social - start -->
        <div class="flex items-center justify-center gap-4 lg:justify-start">
          <span class="text-sm font-semibold uppercase tracking-widest text-paragraph sm:text-base">Social</span>
          <span class="h-px w-12 bg-paragraph"></span>

          <div class="flex gap-2 text-xl leading-none">
            <awc-icon-button
              name="instagram"
              href="#"
              target="_blank"
              label="Instagram"
              class="text-primary"
            ></awc-icon-button>
            <awc-icon-button
              name="facebook"
              href="#"
              target="_blank"
              label="Facebook"
              class="text-primary"
            ></awc-icon-button>
            <awc-icon-button
              name="linkedin"
              href="#"
              target="_blank"
              label="LinkedIn"
              class="text-primary"
            ></awc-icon-button>
            <awc-icon-button
              name="twitter"
              href="#"
              target="_blank"
              label="Twitter"
              class="text-primary"
            ></awc-icon-button>
          </div>
        </div>
        <!-- social - end -->
      </section>
    </div>
  `
};

export const Hero7: StoryObj = {
  name: 'Hero 7',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <div class="hidden sm:block mb-6">
        <awc-breadcrumb>
          <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
            >Web Design</awc-breadcrumb-item
          >
        </awc-breadcrumb>
      </div>
      <section class="flex flex-col items-center">
        <div class="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pt-16 lg:pb-32">
          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <p class="mb-8 text-paragraph md:mb-12 xl:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares characteristics of
            real text.
          </p>

          <div class="flex w-full flex-row gap-2.5 justify-center">
            <awc-button href="#" variant="primary" size="large" class="w-full md:w-auto">Start now</awc-button>
            <awc-button href="#" variant="ghost" size="large" class="w-full md:w-auto">Take tour</awc-button>
          </div>
        </div>
      </section>
    </div>
  `
};

export const Hero8: StoryObj = {
  name: 'Hero 8',
  render: () => html`
    <section class="container mx-auto px-4 md:px-8">
      <div class="hidden sm:block mb-6">
        <awc-breadcrumb>
          <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
            >Web Design</awc-breadcrumb-item
          >
        </awc-breadcrumb>
      </div>
      <div class="mb-8 flex flex-wrap justify-between md:mb-16">
        <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <p class="max-w-md text-paragraph xl:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares characteristics of
            real text.
          </p>
        </div>

        <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div
            class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-neutral-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
          >
            <awc-image
              aspectRatio="1"
              layout="filled"
              width="600"
              src="https://images.unsplash.com/photo-1542340916-951bb72c8f74"
              class="w-full h-full"
            ></awc-image>
          </div>

          <div class="overflow-hidden rounded-lg bg-neutral-100 shadow-lg">
            <awc-image
              aspectRatio="1"
              layout="filled"
              width="600"
              src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f"
              class="w-full h-full"
            ></awc-image>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
        <!-- social - start -->
        <div class="flex items-center justify-center gap-4 lg:justify-start">
          <span class="text-sm font-semibold uppercase tracking-widest text-paragraph sm:text-base">Social</span>
          <span class="h-px w-12 bg-paragraph"></span>

          <div class="flex gap-2 text-xl leading-none">
            <awc-icon-button
              name="instagram"
              href="#"
              target="_blank"
              label="Instagram"
              class="text-primary"
            ></awc-icon-button>
            <awc-icon-button
              name="facebook"
              href="#"
              target="_blank"
              label="Facebook"
              class="text-primary"
            ></awc-icon-button>
            <awc-icon-button
              name="linkedin"
              href="#"
              target="_blank"
              label="LinkedIn"
              class="text-primary"
            ></awc-icon-button>
            <awc-icon-button
              name="twitter"
              href="#"
              target="_blank"
              label="Twitter"
              class="text-primary"
            ></awc-icon-button>
          </div>
        </div>
        <!-- social - end -->
      </div>
    </section>
  `
};

export const Hero9: StoryObj = {
  name: 'Hero 9',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <div class="hidden sm:block mb-6">
        <awc-breadcrumb>
          <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
            >Web Design</awc-breadcrumb-item
          >
        </awc-breadcrumb>
      </div>
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div
          class="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-6/12 xl:py-24"
        >
          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <p class="mb-8 text-paragraph md:mb-12 lg:w-4/5 xl:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random.
          </p>

          <form class="flex flex-col sm:flex-row w-full gap-2 md:max-w-md items-end text-left">
            <awc-input type="email" placeholder="Email" label="Email" class="w-full flex-1"></awc-input>
            <awc-button variant="primary" class="w-full sm:w-auto">Sign up</awc-button>
          </form>
        </div>
        <!-- content - end -->
      </section>
    </div>
  `
};

export const Hero10: StoryObj = {
  name: 'Hero 10',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <div class="hidden sm:block mb-6">
        <awc-breadcrumb>
          <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
          <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
            >Web Design</awc-breadcrumb-item
          >
        </awc-breadcrumb>
      </div>
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div
          class="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-6/12 xl:py-24"
        >
          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <p class="mb-8 text-paragraph md:mb-12 lg:w-4/5 xl:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random.
          </p>

          <div class="flex flex-row gap-2.5 justify-center w-full md:w-auto lg:justify-start">
            <awc-button href="#" variant="primary" size="large" class="w-full md:w-auto">Start now</awc-button>
            <awc-button href="#" variant="ghost" size="large" class="w-full md:w-auto">Take tour</awc-button>
          </div>
        </div>
        <!-- content - end -->
      </section>
    </div>
  `
};

export const Hero11: StoryObj = {
  name: 'Hero 11',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div class="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
          <div class="hidden sm:block mb-6 lg:mb-12 xl:mb-24">
            <awc-breadcrumb>
              <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
                >Web Design</awc-breadcrumb-item
              >
            </awc-breadcrumb>
          </div>

          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <p class="mb-3  lg:w-4/5 xl:text-lg text-paragraph">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random.
          </p>
          <ul class="list-inside list-disc mb-8 md:mb-12">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          </ul>

          <div class="flex w-full flex-row gap-2.5 justify-center lg:justify-start">
            <awc-button href="#" variant="primary" size="large" class="w-full md:w-auto">Start now</awc-button>
            <awc-button href="#" variant="ghost" size="large" class="w-full md:w-auto">Take tour</awc-button>
          </div>
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="h-48 overflow-hidden relative rounded-lg bg-neutral-100 shadow-lg lg:h-auto xl:w-5/12">
          <awc-image
            aspectRatio="1.3"
            layout="filled"
            width="1000"
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e"
          ></awc-image>
        </div>
        <!-- image - end -->
      </section>
    </div>
  `
};

export const Hero12: StoryObj = {
  name: 'Hero 12',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div class="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-5/12 xl:pb-24">
          <div class="hidden sm:block mb-6 lg:mb-12 xl:mb-24">
            <awc-breadcrumb>
              <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
                >Web Design</awc-breadcrumb-item
              >
            </awc-breadcrumb>
          </div>

          <div>
            <awc-tag class="mb-2" variant="primary">Tag</awc-tag>
            <h2 class="text-3xlarge md:text-4xlarge xl:text-5xlarge font-bold leading-dense text-title mb-4 md:mb-6">
              Revolutionary way to build the web
            </h2>
            <p class="mb-4 text-paragraph">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text but is random.
            </p>
            <div class="flex items-center justify-center gap-4 lg:justify-start mb-8">
              <span class="text-sm flex items-center text-paragraph gap-2">
                <awc-icon name="clock"></awc-icon>
                <span>3 min</span>
              </span>
              <span class="h-px w-4 bg-paragraph"></span>
              <span class="text-sm flex items-center text-paragraph gap-2">
                <awc-icon name="calendar"></awc-icon>
                <awc-format-date month="long" day="numeric" year="numeric"></awc-format-date><br />
              </span>
            </div>
          </div>

          <!-- social - start -->
          <div class="flex items-center justify-center gap-4 lg:justify-start">
            <span class="text-sm font-semibold uppercase tracking-widest text-paragraph sm:text-base">Share</span>
            <span class="h-px w-8 bg-paragraph"></span>

            <div class="flex gap-2 text-xl leading-none">
              <awc-icon-button
                name="instagram"
                href="#"
                target="_blank"
                label="Instagram"
                class="text-primary"
              ></awc-icon-button>
              <awc-icon-button
                name="facebook"
                href="#"
                target="_blank"
                label="Facebook"
                class="text-primary"
              ></awc-icon-button>
              <awc-icon-button
                name="linkedin"
                href="#"
                target="_blank"
                label="LinkedIn"
                class="text-primary"
              ></awc-icon-button>
              <awc-icon-button
                name="twitter"
                href="#"
                target="_blank"
                label="Twitter"
                class="text-primary"
              ></awc-icon-button>
            </div>
          </div>
          <!-- social - end -->
        </div>
        <!-- content - end -->

        <!-- image - start -->
        <div class="h-48 overflow-hidden relative rounded-lg bg-neutral-100 shadow-lg lg:h-auto xl:w-5/12">
          <awc-image
            aspectRatio="1.3"
            layout="filled"
            width="1000"
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e"
          ></awc-image>
        </div>
        <!-- image - end -->
      </section>
    </div>
  `
};

export const Hero13: StoryObj = {
  name: 'Hero 13',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <!-- content - start -->
        <div class="flex flex-col justify-center sm:text-center lg:pb-12 lg:text-left xl:w-6/12 xl:pb-24">
          <div class="hidden sm:block mb-6 lg:mb-12 xl:mb-24">
            <awc-breadcrumb>
              <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
              <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design"
                >Web Design</awc-breadcrumb-item
              >
            </awc-breadcrumb>
          </div>

          <h2 class="text-4xlarge md:text-5xlarge xl:text-6xlarge font-bold leading-dense text-title mb-8 md:mb-12">
            <span class="text-base md:text-lg font-semibold leading-normal text-paragraph block mb-1 text-primary"
              >Very proud to introduce</span
            >
            Revolutionary way to build the web
          </h2>

          <p class="mb-3  lg:w-4/5 xl:text-lg text-paragraph">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random.
          </p>
          <ul class="list-inside list-disc mb-8">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          </ul>
        </div>
        <!-- content - end -->

        <!-- form - start -->
        <div class="relative rounded-lg border border-neutral-200 xl:w-6/12 p-4 md:p-8">
          <h5 class="text-2xlarge md:text-3xlarge xl:text-4xlarge font-bold leading-dense text-title mb-3 md:mb-4">
            Headline
          </h5>

          <p class="mb-3 text-paragraph">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random.
          </p>

          <form action="#" class="grid gap-4 sm:grid-cols-2">
            <awc-input type="text" placeholder="Name" label="Name"></awc-input>
            <awc-input type="text" placeholder="Surname" label="Surname"></awc-input>
            <awc-input type="text" placeholder="Company" label="Company"></awc-input>
            <awc-input type="email" placeholder="Email" label="Email"></awc-input>
            <awc-input type="tel" placeholder="Phone" label="Phone"></awc-input>
            <awc-input type="url" placeholder="Website" label="Website"></awc-input>

            <awc-checkbox>Possible option</awc-checkbox>
            <div class="flex w-full justify-center sm:justify-start sm:col-span-2">
              <awc-button type="submit" variant="primary" class="w-full md:w-auto">Button</awc-button>
            </div>
          </form>
        </div>
        <!-- form - end -->
      </section>
    </div>
  `
};
