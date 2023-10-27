import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Footer',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Footer1: StoryObj = {
  name: 'Footer 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 pt-4 sm:pt-10 lg:pt-12">
      <footer class="container mx-auto px-4 md:px-8">
        <div class="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div class="col-span-full lg:col-span-2">
            <!-- logo - start -->
            <div class="mb-4 lg:-mt-2">
              <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
              </a>
            </div>
            <!-- logo - end -->

            <p class="mb-6 text-neutral-500 dark:text-neutral-200 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>

            <!-- social - start -->
            <div class="flex gap-4 text-xl">
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="instagram"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="facebook"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="linkedin"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="twitter"></awc-icon>
              </a>
            </div>
            <!-- social - end -->
          </div>

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Products</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Overview</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Solutions</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Pricing</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Customers</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Company</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">About</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Investor Relations</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Jobs</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Press</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Blog</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Support</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Contact</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Documentation</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Chat</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">FAQ</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Legal</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Terms of Service</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Cookie settings</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->
        </div>

        <div class="border-t py-8 text-center text-sm text-neutral-400">© 2021 - Present Adeliom. All rights reserved.</div>
      </footer>
    </div>
  `
};

export const Footer2: StoryObj = {
  name: 'Footer 2',
  render: () => html`
    <div class="bg-neutral-900">
      <footer class="container mx-auto px-4 md:px-8">
        <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div class="col-span-full lg:col-span-2">
            <!-- logo - start -->
            <div class="mb-4 lg:-mt-2">
              <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-neutral-100 md:text-2xl" aria-label="logo">
                <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
              </a>
            </div>
            <!-- logo - end -->

            <p class="mb-6 text-neutral-400 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>

            <!-- social - start -->
            <div class="flex gap-4 text-xl">
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="instagram"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="facebook"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="linkedin"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="twitter"></awc-icon>
              </a>
            </div>
            <!-- social - end -->
          </div>

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-100">Products</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Overview</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Solutions</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Pricing</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Customers</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-100">Company</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">About</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Investor Relations</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Jobs</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Press</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Blog</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-100">Support</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Contact</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Documentation</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Chat</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">FAQ</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-100">Legal</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Terms of Service</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>
              </div>

              <div>
                <a href="#" class="text-neutral-400 transition duration-100 hover:text-primary active:text-primary-600">Cookie settings</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->
        </div>

        <div class="border-t border-neutral-800 py-8 text-center text-sm text-neutral-400">© 2021 - Present Adeliom. All rights reserved.</div>
      </footer>
    </div>
  `
};

export const Footer3: StoryObj = {
  name: 'Footer 3',
  render: () => html`
    <footer class="bg-white  dark:bg-neutral-950">
      <div class="pb-16 pt-4 sm:pt-10 lg:pt-12">
        <div class="container mx-auto px-4 md:px-8">
          <div class="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div class="col-span-full lg:col-span-2">
              <!-- logo - start -->
              <div class="mb-4 lg:-mt-2">
                <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                  <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
                </a>
              </div>
              <!-- logo - end -->

              <p class="text-neutral-500 dark:text-neutral-200 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            </div>

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Products</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Overview</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Solutions</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Pricing</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Customers</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Company</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">About</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Investor Relations</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Jobs</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Press</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Blog</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Support</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Contact</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Documentation</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Chat</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">FAQ</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Legal</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Terms of Service</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Cookie settings</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->
          </div>
        </div>
      </div>

      <div class="bg-neutral-100 dark:bg-neutral-800">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex items-center justify-between gap-4 py-8">
            <span class="text-sm text-neutral-400"> © 2021 - Present AWC. All rights reserved. </span>

            <!-- social - start -->
            <div class="flex gap-4 text-xl">
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="instagram"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="facebook"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="linkedin"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="twitter"></awc-icon>
              </a>
            </div>
            <!-- social - end -->
          </div>
        </div>
      </div>
    </footer>
  `
};

export const Footer4: StoryObj = {
  name: 'Footer 4',
  render: () => html`
    <footer class="bg-white  dark:bg-neutral-950 pb-10 pt-4 sm:py-10 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:pt-12">
          <div class="col-span-full lg:col-span-1 lg:row-span-2">
            <!-- logo - start -->
            <div class="mb-4 lg:-mt-2">
              <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
              </a>
            </div>
            <!-- logo - end -->

            <p class="mb-6 text-neutral-500 dark:text-neutral-200 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text</p>

            <!-- social - start -->
            <div class="flex gap-4 text-xl mb-6">
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="instagram"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="facebook"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="linkedin"></awc-icon>
              </a>
              <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                <awc-icon name="twitter"></awc-icon>
              </a>
            </div>
            <!-- social - end -->

            <p class="text-sm text-neutral-500 dark:text-neutral-200">© 2021 - Present AWC. All rights reserved.</p>
          </div>

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Products</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Overview</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Solutions</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Pricing</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Customers</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Company</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">About</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Investor Relations</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Jobs</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Press</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Blog</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Support</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Contact</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Documentation</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Chat</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">FAQ</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->

          <!-- nav - start -->
          <div>
            <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Legal</div>

            <nav class="flex flex-col gap-4">
              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Terms of Service</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>
              </div>

              <div>
                <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Cookie settings</a>
              </div>
            </nav>
          </div>
          <!-- nav - end -->
        </div>
      </div>
    </footer>
  `
};

export const Footer5: StoryObj = {
  name: 'Footer 5',
  render: () => html`
    <footer class="bg-white  dark:bg-neutral-950">
      <div class="bg-primary py-6">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex flex-col items-center justify-between gap-2 md:flex-row">
            <div class="mb-3 text-center md:mb-0 md:text-left">
              <span class="font-bold uppercase tracking-widest text-neutral-100">Newsletter</span>
              <p class="text-primary-200">Subscribe to our newsletter</p>
            </div>

            <form class="flex w-full gap-2 md:max-w-md">
              <awc-input type="email" placeholder="Email" class="w-full flex-1"></awc-input>
              <awc-button variant="default">Sign up</awc-button>
            </form>
          </div>
        </div>
      </div>

      <div class="pt-12 lg:pt-16">
        <div class="container mx-auto px-4 md:px-8">
          <div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div class="col-span-full lg:col-span-2">
              <!-- logo - start -->
              <div class="mb-4 lg:-mt-2">
                <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                  <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
                </a>
              </div>
              <!-- logo - end -->

              <p class="mb-6 text-neutral-500 dark:text-neutral-200 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl">
                <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                  <awc-icon name="instagram"></awc-icon>
                </a>
                <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                  <awc-icon name="facebook"></awc-icon>
                </a>
                <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Products</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Overview</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Solutions</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Pricing</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Customers</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Company</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">About</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Investor Relations</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Jobs</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Press</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Blog</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Support</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Contact</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Documentation</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Chat</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">FAQ</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Legal</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Terms of Service</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Cookie settings</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->
          </div>

          <div class="border-t py-8 text-center text-sm text-neutral-400">© 2021 - Present AWC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `
};

export const Footer6: StoryObj = {
  name: 'Footer 6',
  render: () => html`
    <footer class="bg-white  dark:bg-neutral-950 pt-4 sm:pt-6 lg:pt-8">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col items-center justify-between gap-2 border-b border-t py-6 md:flex-row">
          <div class="mb-3 text-center md:mb-0 md:text-left">
            <span class="font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Newsletter</span>
            <p class="text-neutral-500 dark:text-neutral-200">Subscribe to our newsletter</p>
          </div>

          <form class="flex w-full gap-2 md:max-w-md">
            <input placeholder="Email" class="w-full flex-1 rounded border bg-neutral-50 px-3 py-2 text-neutral-800 dark:text-neutral-200 placeholder-neutral-500 outline-none ring-primary-300 transition duration-100 focus:ring" />

            <button class="inline-block rounded bg-primary px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Send</button>
          </form>
        </div>
      </div>

      <div class="pt-12">
        <div class="container mx-auto px-4 md:px-8">
          <div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div class="col-span-full lg:col-span-2">
              <!-- logo - start -->
              <div class="mb-4 lg:-mt-2">
                <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
                  <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
                </a>
              </div>
              <!-- logo - end -->

              <p class="mb-6 text-neutral-500 dark:text-neutral-200 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl">
                <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                  <awc-icon name="instagram"></awc-icon>
                </a>
                <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                  <awc-icon name="facebook"></awc-icon>
                </a>
                <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Products</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Overview</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Solutions</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Pricing</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Customers</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Company</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">About</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Investor Relations</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Jobs</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Press</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Blog</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Support</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Contact</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Documentation</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Chat</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">FAQ</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->

            <!-- nav - start -->
            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">Legal</div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Terms of Service</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>
                </div>

                <div>
                  <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Cookie settings</a>
                </div>
              </nav>
            </div>
            <!-- nav - end -->
          </div>

          <div class="border-t py-8 text-center text-sm text-neutral-400">© 2021 - Present AWC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `
};

export const Footer7: StoryObj = {
  name: 'Footer 7',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 pt-4 sm:pt-10 lg:pt-12">
      <footer class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
          <!-- nav - start -->
          <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">About</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Investor Relations</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Jobs</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Press</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Blog</a>
          </nav>
          <!-- nav - end -->

          <!-- social - start -->
          <div class="flex gap-4 text-xl">
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="instagram"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="facebook"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="linkedin"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="twitter"></awc-icon>
            </a>
          </div>
          <!-- social - end -->
        </div>

        <div class="py-8 text-center text-sm text-neutral-400">© 2021 - Present Adeliom. All rights reserved.</div>
      </footer>
    </div>
  `
};

export const Footer8: StoryObj = {
  name: 'Footer 8',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 pt-4 sm:pt-10 lg:pt-12">
      <footer class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col items-center border-t pt-6">
          <!-- nav - start -->
          <nav class="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">About</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Investor Relations</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Jobs</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Press</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-200 transition duration-100 hover:text-primary active:text-primary-600">Blog</a>
          </nav>
          <!-- nav - end -->

          <!-- social - start -->
          <div class="flex gap-4 text-xl">
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="instagram"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="facebook"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="linkedin"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="twitter"></awc-icon>
            </a>
          </div>
          <!-- social - end -->
        </div>

        <div class="py-8 text-center text-sm text-neutral-400">© 2021 - Present Adeliom. All rights reserved.</div>
      </footer>
    </div>
  `
};
