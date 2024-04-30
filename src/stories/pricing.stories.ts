import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Pricing',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

const heading = html`<!-- text - start -->
  <div class="mb-8 md:mb-12">
    <h3 class="text-3xlarge md:text-4xlarge xl:text-5xlarge font-semibold leading-dense text-center mb-4 text-title">
      <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1"
        >Headline</span
      >
      Consectetur adipiscing elit
    </h3>
    <p class="mx-auto max-w-screen-md text-center text-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.
    </p>
  </div>
  <!-- text - end -->`;

export const Pricing1: StoryObj = {
  name: 'Pricing 1',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      ${heading}

      <div class="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
        <!-- plan - start -->
        <div class="flex flex-col rounded-lg border p-4 pt-6">
          <div class="mb-12">
            <div class="mb-2 text-center text-2xl font-bold text-title">Free</div>

            <p class="mx-auto mb-8 px-8 text-center text-paragraph">
              For individuals and organizations who want to try our system
            </p>

            <div class="space-y-2">
              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">1.000 MB file storage</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">2.000 MB bandwidth per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">200 tasks per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">Comunity support</span>
              </div>
              <!-- check - end -->
            </div>
          </div>

          <div class="mt-auto flex flex-col gap-8">
            <div class="flex items-end justify-center gap-1">
              <span class="self-start text-paragraph">$</span>
              <span class="text-4xl font-bold text-title">0</span>
              <span class="text-paragraph">per user/month</span>
            </div>

            <awc-button variant="neutral" size="large" class="w-full">Join for free</awc-button>
          </div>
        </div>
        <!-- plan - end -->

        <!-- plan - start -->
        <div class="relative flex flex-col rounded-lg border-2 border-primary p-4 pt-6">
          <div class="mb-12">
            <div class="absolute inset-x-0 -top-3 flex justify-center">
              <span
                class="flex h-6 items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"
                >most popular</span
              >
            </div>

            <div class="mb-2 text-center text-2xl font-bold text-title">Team</div>

            <p class="mx-auto mb-8 px-8 text-center text-paragraph">
              Avanced feaures for Individuals and organizations
            </p>

            <div class="space-y-2">
              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">Unlimited file storage</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">10 GB bandwidth per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">10.000 tasks per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">Email support</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">100 Webhooks</span>
              </div>
              <!-- check - end -->
            </div>
          </div>

          <div class="mt-auto flex flex-col gap-8">
            <div class="flex items-end justify-center gap-1">
              <span class="self-start text-paragraph">$</span>
              <span class="text-4xl font-bold text-title">19</span>
              <span class="text-paragraph">per user/month</span>
            </div>

            <awc-button variant="primary" size="large" class="w-full">Continue with Team</awc-button>
          </div>
        </div>
        <!-- plan - end -->

        <!-- plan - start -->
        <div class="flex flex-col rounded-lg border p-4 pt-6">
          <div class="mb-12">
            <div class="mb-2 text-center text-2xl font-bold text-title">Enterprise</div>

            <p class="mx-auto mb-8 px-8 text-center text-paragraph">Maximum performace for organisations</p>

            <div class="space-y-2">
              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">Unlimited file storage</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">Unlimited bandwidth per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">1.000.000 tasks per month</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">Email and phone support</span>
              </div>
              <!-- check - end -->

              <!-- check - start -->
              <div class="flex gap-2">
                <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
                <span class="text-neutral-600">Unlimited Webhooks</span>
              </div>
              <!-- check - end -->
            </div>
          </div>

          <div class="mt-auto flex flex-col gap-8">
            <div class="flex items-end justify-center gap-1">
              <span class="self-start text-paragraph">$</span>
              <span class="text-4xl font-bold text-title">49</span>
              <span class="text-paragraph">per user/month</span>
            </div>

            <awc-button variant="neutral" size="large" outline class="w-full">Contact Sales</awc-button>
          </div>
        </div>
        <!-- plan - end -->
      </div>
    </div>
  `
};

export const Pricing2: StoryObj = {
  name: 'Pricing 2',
  render: () => html`
    <div class="container mx-auto px-4 md:px-8">
      ${heading}

      <div class="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
        <!-- plan - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border border-[var(--awc-card-border-color)] sm:mt-8">
          <div class="h-2 bg-primary-400"></div>

          <div class="flex flex-1 flex-col p-6 pt-8">
            <div class="mb-12">
              <div class="mb-2 text-center text-2xl font-bold text-title">Free Trial</div>

              <p class="mb-8 px-8 text-center text-paragraph">
                For individuals and organizations who want to try our system
              </p>

              <div class="space-y-4">
                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>
                  <span class="text-paragraph">1.000 MB file storage</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">2.000 MB bandwidth per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">200 tasks per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">Comunity support</span>
                </div>
                <!-- check - end -->
              </div>
            </div>

            <div class="mt-auto">
              <awc-button variant="neutral" size="large" class="w-full">Free</awc-button>
            </div>
          </div>
        </div>
        <!-- plan - end -->

        <!-- plan - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border-2 border-primary">
          <div class="bg-primary py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">
            Popular choise
          </div>

          <div class="flex flex-1 flex-col p-6 pt-8">
            <div class="mb-12">
              <div class="mb-2 text-center text-2xl font-bold text-title">Team</div>

              <p class="mx-auto mb-8 px-8 text-center text-paragraph">
                Avanced feaures for Individuals and organizations
              </p>

              <div class="space-y-4">
                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">Unlimited file storage</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">10 GB bandwidth per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">10.000 tasks per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">Email support</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">100 Webhooks</span>
                </div>
                <!-- check - end -->
              </div>
            </div>

            <div class="mt-auto">
              <awc-button variant="primary" size="large" class="w-full">$19 / mounth</awc-button>
            </div>
          </div>
        </div>
        <!-- plan - end -->

        <!-- plan - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border border-[var(--awc-card-border-color)] lg:mt-8">
          <div class="h-2 bg-[var(--awc-card-border-color)]"></div>

          <div class="flex flex-1 flex-col p-6 pt-8">
            <div class="mb-12">
              <div class="mb-2 text-center text-2xl font-bold text-title">Enterprise</div>

              <p class="mx-auto mb-8 px-8 text-center text-paragraph">Maximum performace for organisations</p>

              <div class="space-y-4">
                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">Unlimited file storage</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">Unlimited bandwidth per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">1.000.000 tasks per month</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">Email and phone support</span>
                </div>
                <!-- check - end -->

                <!-- check - start -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="currentColor" class="text-neutral-300" />
                    <circle cx="8" cy="8" r="3" fill="currentColor" class="text-neutral-500" />
                  </svg>

                  <span class="text-paragraph">Unlimited Webhooks</span>
                </div>
                <!-- check - end -->
              </div>
            </div>

            <div class="mt-auto">
              <awc-button variant="neutral" size="large" outline class="w-full">$49 / month</awc-button>
            </div>
          </div>
        </div>
        <!-- plan - end -->
      </div>
    </div>
  `
};

export const Pricing3: StoryObj = {
  name: 'Pricing 3',
  render: () => html`
    <div class="container mx-auto max-w-screen-xl px-4 md:px-8">
      ${heading}

      <div class="mb-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8">
        <!-- plan - start -->
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col gap-4 rounded-lg border border-[var(--awc-card-border-color)] p-4 pt-6">
            <h3 class="text-center text-2xl font-semibold text-title">Free</h3>

            <div class="flex items-end justify-center gap-1">
              <span class="text-4xl font-bold text-title">$0</span>
              <span class="text-paragraph">/ month</span>
            </div>

            <div class="mb-4 flex items-center justify-center gap-1 text-sm text-paragraph">
              14-day money back guarantee
            </div>

            <awc-button variant="neutral" size="large" class="w-full">Select Free</awc-button>
          </div>

          <div class="flex-1 space-y-3 rounded-lg bg-neutral-100 px-4 py-6">
            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">1.000 MB file storage</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">2.000 MB bandwidth per month</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">200 tasks per month</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
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
              <span
                class="flex h-6 items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"
                >most popular</span
              >
            </div>

            <h3 class="text-center text-2xl font-semibold text-title">Team</h3>

            <div class="flex items-end justify-center gap-1">
              <span class="text-4xl font-bold text-title">$19</span>
              <span class="text-paragraph">/ month</span>
            </div>

            <div class="mb-4 flex items-center justify-center gap-1 text-sm text-paragraph">
              14-day money back guarantee
            </div>

            <awc-button variant="primary" size="large" outline class="w-full">Select Team</awc-button>
          </div>

          <div class="flex-1 space-y-3 rounded-lg bg-neutral-100 px-4 py-6">
            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">Unlimited file storage</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">10 GB bandwidth per month</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">10.000 tasks per month</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">Email support</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">100 Webhooks</span>
            </div>
            <!-- check - end -->
          </div>
        </div>
        <!-- plan - end -->

        <!-- plan - start -->
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col gap-4 rounded-lg border border-[var(--awc-card-border-color)] p-4 pt-6">
            <h3 class="text-center text-2xl font-semibold text-title">Enterprise</h3>

            <div class="flex items-end justify-center gap-1">
              <span class="text-4xl font-bold text-title">$49</span>
              <span class="text-paragraph">/ month</span>
            </div>

            <div class="mb-4 flex items-center justify-center gap-1 text-sm text-paragraph">
              14-day money back guarantee
            </div>

            <awc-button variant="neutral" size="large" outline class="w-full">Contact Sales</awc-button>
          </div>

          <div class="flex-1 space-y-3 rounded-lg bg-neutral-100 px-4 py-6">
            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">Unlimited file storage</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">Unlimited bandwidth per month</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">1.000.000 tasks per month</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">Email and phone support</span>
            </div>
            <!-- check - end -->

            <!-- check - start -->
            <div class="flex gap-2">
              <awc-icon name="check2" class="text-primary text-2xl"></awc-icon>
              <span class="text-neutral-600">Unlimited Webhooks</span>
            </div>
            <!-- check - end -->
          </div>
        </div>
        <!-- plan - end -->
      </div>
    </div>
  `
};
