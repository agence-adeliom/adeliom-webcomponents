import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Team',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Team1: StoryObj = {
  name: 'Team 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h3" class="mb-4 text-center" noMargin> Meet our Team </awc-typography>
          <awc-typography
            class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block"
            noMargin
          >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <!-- person - start -->
          <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
            <awc-image
              slot="image"
              layout="filled"
              aspectRatio="1.5"
              width="500"
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e"
              class="transition duration-200 group-hover:scale-110 mb-2 h-48 overflow-hidden rounded-lg shadow-lg sm:mb-4 sm:h-60 md:h-80"
            ></awc-image>

            <div>
              <div class="font-bold text-primary md:text-lg">John McCulling</div>
              <p class="mb-3 text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">Founder / CEO</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </awc-card>
          <!-- person - end -->

          <!-- person - start -->
          <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
            <awc-image
              slot="image"
              layout="filled"
              aspectRatio="1.5"
              width="500"
              src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1"
              class="transition duration-200 group-hover:scale-110 mb-2 h-48 overflow-hidden rounded-lg shadow-lg sm:mb-4 sm:h-60 md:h-80"
            ></awc-image>

            <div>
              <div class="font-bold text-primary md:text-lg">Kate Berg</div>
              <p class="mb-3 text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">CFO</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </awc-card>
          <!-- person - end -->

          <!-- person - start -->
          <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
            <awc-image
              slot="image"
              layout="filled"
              aspectRatio="1.5"
              width="500"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556"
              class="transition duration-200 group-hover:scale-110 mb-2 h-48 overflow-hidden rounded-lg shadow-lg sm:mb-4 sm:h-60 md:h-80"
            ></awc-image>

            <div>
              <div class="font-bold text-primary md:text-lg">Greg Jackson</div>
              <p class="mb-3 text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">CTO</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </awc-card>
          <!-- person - end -->

          <!-- person - start -->
          <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
            <awc-image
              slot="image"
              layout="filled"
              aspectRatio="1.5"
              width="500"
              src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8"
              class="transition duration-200 group-hover:scale-110 mb-2 h-48 overflow-hidden rounded-lg shadow-lg sm:mb-4 sm:h-60 md:h-80"
            ></awc-image>

            <div>
              <div class="font-bold text-primary md:text-lg">Robert Greyson</div>
              <p class="mb-3 text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">Creative Director</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </awc-card>
          <!-- person - end -->

          <!-- person - start -->
          <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
            <awc-image
              slot="image"
              layout="filled"
              aspectRatio="1.5"
              width="500"
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6"
              class="transition duration-200 group-hover:scale-110 mb-2 h-48 overflow-hidden rounded-lg shadow-lg sm:mb-4 sm:h-60 md:h-80"
            ></awc-image>

            <div>
              <div class="font-bold text-primary md:text-lg">John Roberts</div>
              <p class="mb-3 text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">Investor Relations</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </awc-card>
          <!-- person - end -->

          <!-- person - start -->
          <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
            <awc-image
              slot="image"
              layout="filled"
              aspectRatio="1.5"
              width="500"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
              class="transition duration-200 group-hover:scale-110 mb-2 h-48 overflow-hidden rounded-lg shadow-lg sm:mb-4 sm:h-60 md:h-80"
            ></awc-image>

            <div>
              <div class="font-bold text-primary md:text-lg">Judy Amandez</div>
              <p class="mb-3 text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Senior Art Director
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </awc-card>
          <!-- person - end -->
        </div>
      </div>
    </div>
  `
};

export const Team2: StoryObj = {
  name: 'Team 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h3" class="mb-4 text-center" noMargin> Meet our Team </awc-typography>
          <awc-typography
            class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block"
            noMargin
          >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div
              class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:mb-4 md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">John McCulling</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Founder / CEO
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div
              class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:mb-4 md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Kate Berg</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">CFO</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div
              class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:mb-4 md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Greg Jackson</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">CTO</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div
              class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:mb-4 md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Robert Greyson</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Creative Director
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div
              class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:mb-4 md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">John Roberts</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Investor Relations
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div
              class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:mb-4 md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Judy Amandez</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Senior Art Director
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div
              class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:mb-4 md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Rahul Williams</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Creative Director
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center">
            <div
              class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:mb-4 md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Ari Ferris</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Marketing Analyst
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->
        </div>
      </div>
    </div>
  `
};

export const Team3: StoryObj = {
  name: 'Team 3',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h3" class="mb-4 text-center" noMargin> Meet our Team </awc-typography>
          <awc-typography
            class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block"
            noMargin
          >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <!-- person - start -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary sm:text-left md:text-lg">John McCulling</div>
              <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-base">
                Founder / CEO
              </p>
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary sm:text-left md:text-lg">Kate Berg</div>
              <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-base">CFO</p>
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary sm:text-left md:text-lg">Greg Jackson</div>
              <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-base">CTO</p>
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary sm:text-left md:text-lg">Robert Greyson</div>
              <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-base">
                Creative Director
              </p>
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary sm:text-left md:text-lg">John Roberts</div>
              <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-base">
                Investor Relations
              </p>
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-32 md:w-32"
            >
              <awc-avatar
                image="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary sm:text-left md:text-lg">Judy Amandez</div>
              <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-base">
                Senior Art Director
              </p>
            </div>
          </div>
          <!-- person - end -->
        </div>
      </div>
    </div>
  `
};

export const Team4: StoryObj = {
  name: 'Team 4',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <awc-typography type="h3" class="mb-4 text-center" noMargin> Meet our Team </awc-typography>
          <awc-typography
            class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block"
            noMargin
          >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          <!-- person - start -->
          <div class="flex flex-col items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <awc-avatar
                image="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">John McCulling</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Founder / CEO
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <awc-avatar
                image="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Kate Berg</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">CFO</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <awc-avatar
                image="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Greg Jackson</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">CTO</p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <awc-avatar
                image="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Robert Greyson</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Creative Director
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <awc-avatar
                image="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">John Roberts</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Investor Relations
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <awc-avatar
                image="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Judy Amandez</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Senior Art Director
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <awc-avatar
                image="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Rahul Williams</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Creative Director
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->

          <!-- person - start -->
          <div class="flex flex-col items-center rounded-lg bg-neutral-100 dark:bg-neutral-800 p-4 lg:p-8">
            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-neutral-200 shadow-lg md:mb-4 md:h-32 md:w-32">
              <awc-avatar
                image="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256"
                style="--size: 100%"
              ></awc-avatar>
            </div>

            <div>
              <div class="text-center font-bold text-primary md:text-lg">Ari Ferris</div>
              <p class="mb-3 text-center text-sm text-neutral-500 dark:text-neutral-200 md:mb-4 md:text-base">
                Marketing Analyst
              </p>

              <!-- social - start -->
              <div class="flex gap-4 text-xl justify-center">
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="linkedin"></awc-icon>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                >
                  <awc-icon name="twitter"></awc-icon>
                </a>
              </div>
              <!-- social - end -->
            </div>
          </div>
          <!-- person - end -->
        </div>
      </div>
    </div>
  `
};
