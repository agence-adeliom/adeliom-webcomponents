import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Header/NavBar',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const NavBar1: StoryObj = {
  name: 'NavBar 1',
  render: () => html`
    <div class="container mx-auto bg-white dark:bg-neutral-950 py-4 flex items-center justify-between">
        <!-- Logo start -->
        <a
        href="/"
        class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
        aria-label="logo"
        >
            <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            class="h-auto w-6 text-primary"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
        
            Flowrift
        </a>

        <!-- Nav start -->
        <nav class="hidden gap-12 lg:flex">
            <a
            href="#"
            class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
            >Home</a>
            <a
            href="#"
            class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
            >Home</a>
            <a
            href="#"
            class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
            >Home</a>
            <a
            href="#"
            class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
            >Home</a>
        </nav>

        <!-- buttons - start -->
        <div class="hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
            <a
              href="#"
              class="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-800 focus-visible:ring active:bg-primary-700 md:text-base"
              >Button</a
            >

            <a
              href="#"
              class="inline-block rounded-lg bg-tertiary-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-tertiary-800 focus-visible:ring active:bg-primary-700 md:text-base"
              >Button</a
            >
        </div>

        <!-- Burger icon start -->
        <div class="text-lg lg:hidden">
            <awc-icon name="list"></awc-icon>
        </div>
    </div>
  `
};

export const NavBar2: StoryObj = {
    name: 'NavBar 2',
    render: () => html`
      <div class="container mx-auto bg-white dark:bg-neutral-950 py-4 flex items-center justify-between">
          <!-- Logo start -->
          <a
          href="/"
          class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
          >
              <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              class="h-auto w-6 text-primary"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
          
              Flowrift
          </a>
  
          <!-- Nav start -->
          <div class="w-full flex items-center justify-between px-10">
            <div class="hidden lg:block">
                <awc-button variant="text" size="large">
                    <awc-icon slot="prefix" name="list"></awc-icon>
                    Menu
                </awc-button>
            </div>
            <nav class="hidden gap-12 lg:flex">
              <a
              href="#"
              class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
              >Home</a>
              <a
              href="#"
              class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
              >Home</a>
              <a
              href="#"
              class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
              >Home</a>
              <a
              href="#"
              class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
              >Home</a>
          </nav>
          </div>
  
          <!-- buttons - start -->
          <div class="hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <a
                href="#"
                class="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-800 focus-visible:ring active:bg-primary-700 md:text-base"
                >Button</a
              >
  
              <a
                href="#"
                class="inline-block rounded-lg bg-tertiary-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-tertiary-800 focus-visible:ring active:bg-primary-700 md:text-base"
                >Button</a
              >
          </div>
  
          <!-- Burger icon start -->
          <div class="text-lg lg:hidden">
              <awc-icon name="list"></awc-icon>
          </div>
      </div>

      <style>
        awc-button::part(base) {
            margin: 0;
            padding: 0;
            gap: 8px;
            display: flex;
            align-items:center;
        }
      </style>`
  };

  export const NavBar3: StoryObj = {
    name: 'NavBar 3',
    render: () => html`
      <div class="container mx-auto bg-white dark:bg-neutral-950 py-4 flex items-center justify-between">
          <!-- Logo start -->
          <a
          href="/"
          class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
          >
              <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              class="h-auto w-6 text-primary"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
          
              Flowrift
          </a>
  
          <!-- buttons - start -->
          <div class="hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <a
                href="#"
                class="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-800 focus-visible:ring active:bg-primary-700 md:text-base"
                >Button</a
              >
  
              <a
                href="#"
                class="inline-block rounded-lg bg-tertiary-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-tertiary-800 focus-visible:ring active:bg-primary-700 md:text-base"
                >Button</a
              >
          </div>
  
          <!-- Burger icon start -->
          <div class="text-lg lg:hidden">
              <awc-icon name="list"></awc-icon>
          </div>
      </div>
        <div class="bg-neutral-100 dark:bg-neutral-950 w-full">
    <div class="container mx-auto  py-4 flex items-center justify-between">
        <div class="flex items-center gap-10">
            <div class="hidden lg:block">
                <awc-button variant="text" size="large">
                    <awc-icon slot="prefix" name="list"></awc-icon>
                    Menu
                </awc-button>
            </div>
            <nav class="hidden gap-12 lg:flex">
              <a
              href="#"
              class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
              >Home</a>
              <a
              href="#"
              class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
              >Home</a>
              <a
              href="#"
              class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
              >Home</a>
              <a
              href="#"
              class="text-base font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700"
              >Home</a>
              </nav>
        </div>
        <div class="flex items-center gap-6">
            <awc-icon name="search"></awc-icon>
            <awc-icon name="person"></awc-icon>
            <awc-icon name="bag"></awc-icon>
        </div>
      </div>
    </div>
      
      <style>
        awc-button::part(base) {
            margin: 0;
            padding: 0;
            gap: 8px;
            display: flex;
            align-items:center;
        }
      </style>`
  };