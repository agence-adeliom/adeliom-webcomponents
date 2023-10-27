import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Pricing',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Pricing1: StoryObj = {
  name: 'Pricing 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 class="mb-4 text-center text-2xl font-bold text-neutral-800 md:mb-8 lg:text-3xl xl:mb-12">Our plans for you</h2>

        <div class="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
          <!-- plan - start -->
          <div class="flex flex-col rounded-lg border p-4 pt-6">
            <div class="mb-12">
              <div class="mb-2 text-center text-2xl font-bold text-neutral-800">Free</div>

              <p class="mx-auto mb-8 px-8 text-center text-neutral-500">For individuals and organizations who want to try our system</p>

              <div class="space-y-2">
                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">1.000 MB file storage</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">2.000 MB bandwidth per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">200 tasks per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">Comunity support</span>
                </div>
                <!-- check - end -->
              </div>
            </div>

            <div class="mt-auto flex flex-col gap-8">
              <div class="flex items-end justify-center gap-1">
                <span class="self-start text-neutral-600">$</span>
                <span class="text-4xl font-bold text-neutral-800">0</span>
                <span class="text-neutral-500">per user/month</span>
              </div>

              <a href="#" class="block rounded-lg bg-neutral-200 px-8 py-3 text-center text-sm font-semibold text-neutral-500 outline-none ring-primary-300 transition duration-100 hover:bg-neutral-300 focus-visible:ring active:text-neutral-700 md:text-base">Join for free</a>
            </div>
          </div>
          <!-- plan - end -->

          <!-- plan - start -->
          <div class="relative flex flex-col rounded-lg border-2 border-primary p-4 pt-6">
            <div class="mb-12">
              <div class="absolute inset-x-0 -top-3 flex justify-center">
                <span class="flex h-6 items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
              </div>

              <div class="mb-2 text-center text-2xl font-bold text-neutral-800">Team</div>

              <p class="mx-auto mb-8 px-8 text-center text-neutral-500">Avanced feaures for Individuals and organizations</p>

              <div class="space-y-2">
                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">Unlimited file storage</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">10 GB bandwidth per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">10.000 tasks per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">Email support</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">100 Webhooks</span>
                </div>
                <!-- check - end -->
              </div>
            </div>

            <div class="mt-auto flex flex-col gap-8">
              <div class="flex items-end justify-center gap-1">
                <span class="self-start text-neutral-600">$</span>
                <span class="text-4xl font-bold text-neutral-800">19</span>
                <span class="text-neutral-500">per user/month</span>
              </div>

              <a href="#" class="block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Continue with Team</a>
            </div>
          </div>
          <!-- plan - end -->

          <!-- plan - start -->
          <div class="flex flex-col rounded-lg border p-4 pt-6">
            <div class="mb-12">
              <div class="mb-2 text-center text-2xl font-bold text-neutral-800">Enterprise</div>

              <p class="mx-auto mb-8 px-8 text-center text-neutral-500">Maximum performace for organisations</p>

              <div class="space-y-2">
                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">Unlimited file storage</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">Unlimited bandwidth per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">1.000.000 tasks per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">Email and phone support</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>

                  <span class="text-neutral-600">Unlimited Webhooks</span>
                </div>
                <!-- check - end -->
              </div>
            </div>

            <div class="mt-auto flex flex-col gap-8">
              <div class="flex items-end justify-center gap-1">
                <span class="self-start text-neutral-600">$</span>
                <span class="text-4xl font-bold text-neutral-800">49</span>
                <span class="text-neutral-500">per user/month</span>
              </div>

              <a href="#" class="block rounded-lg bg-neutral-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-neutral-700 focus-visible:ring active:bg-neutral-600 md:text-base">Contact Sales</a>
            </div>
          </div>
          <!-- plan - end -->
        </div>

        <div class="text-center text-sm text-neutral-500 sm:text-base">Need help deciding? <a href="#" class="text-neutral-500 underline transition duration-100 hover:text-primary active:text-primary-600">Get in touch</a>.</div>
      </div>
    </div>
  `
};

export const Pricing2: StoryObj = {
  name: 'Pricing 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-lg px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-neutral-800 md:mb-6 lg:text-3xl">Choose a Bundle</h2>

          <p class="mx-auto max-w-screen-md text-center text-neutral-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
        </div>
        <!-- text - end -->

        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
          <!-- left side - start -->
          <div class="w-full rounded-lg bg-neutral-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
            <div class="mb-4">
              <h3 class="text-2xl font-semibold text-neutral-100 sm:text-3xl">Basic Bundle</h3>
              <p class="text-neutral-300">Ebook</p>
            </div>

            <div class="mb-4 space-x-2">
              <span class="text-4xl font-bold text-neutral-100">$29</span>
              <span class="text-2xl text-neutral-300 line-through">$49</span>
            </div>

            <ul class="mb-6 space-y-2 text-neutral-300">
              <!-- feat - start -->
              <li class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>

                <span>Ebook</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>

                <span>Multiple examples</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>

                <span>Basic support</span>
              </li>
              <!-- feat - end -->
            </ul>

            <a href="#" class="block rounded-lg bg-neutral-500 px-8 py-3 text-center text-sm font-semibold text-neutral-100 outline-none ring-primary-300 transition duration-100 hover:bg-neutral-600 focus-visible:ring active:text-neutral-300 md:text-base">Get the Basic Bundle</a>
          </div>
          <!-- left side - end -->

          <!-- right side - start -->
          <div class="w-full rounded-lg bg-gradient-to-tr from-primary to-violet-400 p-6 shadow-xl sm:w-1/2 sm:p-8">
            <div class="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
              <div>
                <h3 class="text-2xl font-semibold text-white sm:text-3xl">Pro Bundle</h3>
                <p class="text-primary-100">Ebook + Video course</p>
              </div>

              <span class="order-first inline-block rounded-full bg-primary-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">Best value</span>
            </div>

            <div class="mb-4 space-x-2">
              <span class="text-4xl font-bold text-white">$49</span>
              <span class="text-2xl text-primary-100 line-through">$89</span>
            </div>

            <ul class="mb-6 space-y-2 text-primary-100">
              <!-- feat - start -->
              <li class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>

                <span>Ebook</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>

                <span>Video course</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>

                <span>Multiple examples</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>

                <span>Work sheets</span>
              </li>
              <!-- feat - end -->

              <!-- feat - start -->
              <li class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>

                <span>Premium support</span>
              </li>
              <!-- feat - end -->
            </ul>

            <a href="#" class="block rounded-lg bg-primary-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-300 focus-visible:ring active:bg-primary-400 md:text-base">Get the Pro Bundle</a>
          </div>
          <!-- right side - end -->
        </div>
      </div>
    </div>
  `
};

export const Pricing3: StoryObj = {
  name: 'Pricing 3',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 class="mb-4 text-center text-2xl font-bold text-neutral-800 md:mb-8 lg:text-3xl xl:mb-12">Pricing</h2>

        <div class="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
          <!-- plan - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border sm:mt-8">
            <div class="h-2 bg-pink-500"></div>

            <div class="flex flex-1 flex-col p-6 pt-8">
              <div class="mb-12">
                <div class="mb-2 text-center text-2xl font-bold text-neutral-800">Free Trial</div>

                <p class="mb-8 px-8 text-center text-neutral-500">For individuals and organizations who want to try our system</p>

                <div class="space-y-4">
                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">1.000 MB file storage</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">2.000 MB bandwidth per month</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">200 tasks per month</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">Comunity support</span>
                  </div>
                  <!-- check - end -->
                </div>
              </div>

              <div class="mt-auto">
                <a href="#" class="block rounded-lg bg-neutral-200 px-8 py-3 text-center text-sm font-semibold text-neutral-500 outline-none ring-primary-300 transition duration-100 hover:bg-neutral-300 focus-visible:ring active:text-neutral-700 md:text-base">$0 / Free</a>
              </div>
            </div>
          </div>
          <!-- plan - end -->

          <!-- plan - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border-2 border-primary">
            <div class="bg-primary py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">Popular choise</div>

            <div class="flex flex-1 flex-col p-6 pt-8">
              <div class="mb-12">
                <div class="mb-2 text-center text-2xl font-bold text-neutral-800">Team</div>

                <p class="mx-auto mb-8 px-8 text-center text-neutral-500">Avanced feaures for Individuals and organizations</p>

                <div class="space-y-4">
                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">Unlimited file storage</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">10 GB bandwidth per month</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">10.000 tasks per month</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">Email support</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">100 Webhooks</span>
                  </div>
                  <!-- check - end -->
                </div>
              </div>

              <div class="mt-auto">
                <a href="#" class="block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">$19</a>
              </div>
            </div>
          </div>
          <!-- plan - end -->

          <!-- plan - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border lg:mt-8">
            <div class="h-2 bg-neutral-800"></div>

            <div class="flex flex-1 flex-col p-6 pt-8">
              <div class="mb-12">
                <div class="mb-2 text-center text-2xl font-bold text-neutral-800">Enterprise</div>

                <p class="mx-auto mb-8 px-8 text-center text-neutral-500">Maximum performace for organisations</p>

                <div class="space-y-4">
                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">Unlimited file storage</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">Unlimited bandwidth per month</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">1.000.000 tasks per month</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">Email and phone support</span>
                  </div>
                  <!-- check - end -->

                  <!-- check - start -->
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                      <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                    </svg>

                    <span class="text-neutral-600">Unlimited Webhooks</span>
                  </div>
                  <!-- check - end -->
                </div>
              </div>

              <div class="mt-auto">
                <a href="#" class="block rounded-lg bg-neutral-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-neutral-700 focus-visible:ring active:bg-neutral-600 md:text-base">$49</a>
              </div>
            </div>
          </div>
          <!-- plan - end -->
        </div>
      </div>
    </div>
  `
};

export const Pricing4: StoryObj = {
  name: 'Pricing 4',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 class="mb-4 text-center text-2xl font-bold text-neutral-800 md:mb-8 lg:text-3xl xl:mb-12">Pick your plan</h2>

        <div class="mb-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8">
          <!-- plan - start -->
          <div class="flex flex-col space-y-4">
            <div class="flex flex-col gap-4 rounded-lg border p-4 pt-6">
              <h3 class="text-center text-2xl font-semibold text-neutral-800">Free</h3>

              <div class="flex items-end justify-center gap-1">
                <span class="text-4xl font-bold text-neutral-800">$0</span>
                <span class="text-neutral-500">/ month</span>
              </div>

              <div class="mb-4 flex items-center justify-center gap-1 text-sm text-neutral-500">
                14-day money backguarantee

                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>

              <a href="#" class="block rounded-lg bg-neutral-200 px-8 py-3 text-center text-sm font-semibold text-neutral-500 outline-none ring-primary-300 transition duration-100 hover:bg-neutral-300 focus-visible:ring active:text-neutral-700 md:text-base">Select Free</a>
            </div>

            <div class="flex-1 space-y-3 rounded-lg bg-neutral-100 px-4 py-6">
              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">1.000 MB file storage</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">2.000 MB bandwidth per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">200 tasks per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">Comunity support</span>
              </div>
              <!-- check - end -->
            </div>
          </div>
          <!-- plan - end -->

          <!-- plan - start -->
          <div class="flex flex-col space-y-4">
            <div class="relative flex flex-col gap-4 rounded-lg border border-primary p-4 pt-6">
              <div class="absolute inset-x-0 -top-3 flex justify-center">
                <span class="flex h-6 items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
              </div>

              <h3 class="text-center text-2xl font-semibold text-neutral-800">Team</h3>

              <div class="flex items-end justify-center gap-1">
                <span class="text-4xl font-bold text-neutral-800">$19</span>
                <span class="text-neutral-500">/ month</span>
              </div>

              <div class="mb-4 flex items-center justify-center gap-1 text-sm text-neutral-500">
                14-day money backguarantee

                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>

              <a href="#" class="block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Select Team</a>
            </div>

            <div class="flex-1 space-y-3 rounded-lg bg-neutral-100 px-4 py-6">
              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">Unlimited file storage</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">10 GB bandwidth per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">10.000 tasks per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">Email support</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">100 Webhooks</span>
              </div>
              <!-- check - end -->
            </div>
          </div>
          <!-- plan - end -->

          <!-- plan - start -->
          <div class="flex flex-col space-y-4">
            <div class="flex flex-col gap-4 rounded-lg border p-4 pt-6">
              <h3 class="text-center text-2xl font-semibold text-neutral-800">Enterprise</h3>

              <div class="flex items-end justify-center gap-1">
                <span class="text-4xl font-bold text-neutral-800">$49</span>
                <span class="text-neutral-500">/ month</span>
              </div>

              <div class="mb-4 flex items-center justify-center gap-1 text-sm text-neutral-500">
                14-day money backguarantee

                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>

              <a href="#" class="block rounded-lg bg-neutral-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-neutral-700 focus-visible:ring active:bg-neutral-600 md:text-base">Select Enterprise</a>
            </div>

            <div class="flex-1 space-y-3 rounded-lg bg-neutral-100 px-4 py-6">
              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">Unlimited file storage</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">Unlimited bandwidth per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">1.000.000 tasks per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">Email and phone support</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>

                <span class="text-neutral-600">Unlimited Webhooks</span>
              </div>
              <!-- check - end -->
            </div>
          </div>
          <!-- plan - end -->
        </div>
      </div>
    </div>
  `
};
