import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Testimonials',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

export const Testimonials1: StoryObj = {
  name: 'Testimonials 1',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-8 md:mb-12">
          <awc-typography type="h3" class="mb-4 text-center" noMargin >
            What others say about us
          </awc-typography>
          <awc-typography class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block" noMargin >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->
    
        <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          <!-- quote - start -->
          <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div class="text-center text-neutral-500 dark:text-neutral-200">“This is a section of some simple filler text, also known as placeholder text.”</div>
    
            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-14 md:w-14">
                <awc-avatar
                    image="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112"
                    style="--size: 100%"
                ></awc-avatar>
              </div>
    
              <div>
                <div class="text-center text-sm font-bold text-primary sm:text-left md:text-base">John McCulling</div>
                <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-sm">CEO / Datadrift</p>
              </div>
            </div>
          </div>
          <!-- quote - end -->
    
          <!-- quote - start -->
          <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div class="text-center text-neutral-500 dark:text-neutral-200">“This is a section of some simple filler text, also known as placeholder text.”</div>
    
            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-14 md:w-14">
                <awc-avatar
                    image="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                    style="--size: 100%"
                ></awc-avatar>
              </div>
    
              <div>
                <div class="text-center text-sm font-bold text-primary sm:text-left md:text-base">Kate Berg</div>
                <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-sm">CFO / Dashdash</p>
              </div>
            </div>
          </div>
          <!-- quote - end -->
    
          <!-- quote - start -->
          <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div class="text-center text-neutral-500 dark:text-neutral-200">“This is a section of some simple filler text, also known as placeholder text.”</div>
    
            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-14 md:w-14">
                <awc-avatar
                    image="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=112"
                    style="--size: 100%"
                ></awc-avatar>
              </div>
    
              <div>
                <div class="text-center text-sm font-bold text-primary sm:text-left md:text-base">Greg Jackson</div>
                <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-sm">CTO / Uptime</p>
              </div>
            </div>
          </div>
          <!-- quote - end -->
        </div>
      </div>
    </div>
  `
};

export const Testimonials2: StoryObj = {
  name: 'Testimonials 2',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">
        <!-- quote - start -->
        <div class="flex flex-col items-center gap-4 md:gap-6">
          <a href="#" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <svg class="h-6 w-auto sm:h-8" width="173" height="39" viewBox="0 0 173 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.2727 31C50.3636 31 54.6591 26.6136 54.6591 19.3409C54.6591 12.0909 50.3636 7.72727 43.3409 7.72727H35.0227V31H43.2727ZM39.9432 26.7841V11.9432H43.0795C47.4432 11.9432 49.75 14.1705 49.75 19.3409C49.75 24.5341 47.4432 26.7841 43.0682 26.7841H39.9432ZM63.1903 31.3295C65.7699 31.3295 67.4403 30.2045 68.2926 28.5795H68.429V31H73.0199V19.2273C73.0199 15.0682 69.4972 13.3182 65.6108 13.3182C61.429 13.3182 58.679 15.3182 58.0085 18.5L62.4858 18.8636C62.8153 17.7045 63.8494 16.8523 65.5881 16.8523C67.2358 16.8523 68.179 17.6818 68.179 19.1136V19.1818C68.179 20.3068 66.9858 20.4545 63.9517 20.75C60.4972 21.0682 57.3949 22.2273 57.3949 26.125C57.3949 29.5795 59.8608 31.3295 63.1903 31.3295ZM64.5767 27.9886C63.0881 27.9886 62.0199 27.2955 62.0199 25.9659C62.0199 24.6023 63.1449 23.9318 64.8494 23.6932C65.9062 23.5455 67.6335 23.2955 68.2131 22.9091V24.7614C68.2131 26.5909 66.7017 27.9886 64.5767 27.9886ZM86.0597 13.5455H82.7756V9.36364H77.9347V13.5455H75.5483V17.1818H77.9347V26.2727C77.9119 29.6932 80.2415 31.3864 83.7528 31.2386C85.0028 31.1932 85.8892 30.9432 86.3778 30.7841L85.6165 27.1818C85.3778 27.2273 84.8665 27.3409 84.4119 27.3409C83.446 27.3409 82.7756 26.9773 82.7756 25.6364V17.1818H86.0597V13.5455ZM94.1903 31.3295C96.7699 31.3295 98.4403 30.2045 99.2926 28.5795H99.429V31H104.02V19.2273C104.02 15.0682 100.497 13.3182 96.6108 13.3182C92.429 13.3182 89.679 15.3182 89.0085 18.5L93.4858 18.8636C93.8153 17.7045 94.8494 16.8523 96.5881 16.8523C98.2358 16.8523 99.179 17.6818 99.179 19.1136V19.1818C99.179 20.3068 97.9858 20.4545 94.9517 20.75C91.4972 21.0682 88.3949 22.2273 88.3949 26.125C88.3949 29.5795 90.8608 31.3295 94.1903 31.3295ZM95.5767 27.9886C94.0881 27.9886 93.0199 27.2955 93.0199 25.9659C93.0199 24.6023 94.1449 23.9318 95.8494 23.6932C96.9062 23.5455 98.6335 23.2955 99.2131 22.9091V24.7614C99.2131 26.5909 97.7017 27.9886 95.5767 27.9886ZM114.207 31.2841C117.026 31.2841 118.491 29.6591 119.162 28.2045H119.366V31H124.139V7.72727H119.31V16.4773H119.162C118.514 15.0568 117.116 13.3182 114.196 13.3182C110.366 13.3182 107.128 16.2955 107.128 22.2955C107.128 28.1364 110.23 31.2841 114.207 31.2841ZM115.741 27.4318C113.366 27.4318 112.071 25.3182 112.071 22.2727C112.071 19.25 113.344 17.1705 115.741 17.1705C118.094 17.1705 119.412 19.1591 119.412 22.2727C119.412 25.3864 118.071 27.4318 115.741 27.4318ZM128.119 31H132.96V21.125C132.96 18.9773 134.528 17.5 136.665 17.5C137.335 17.5 138.256 17.6136 138.71 17.7614V13.4659C138.278 13.3636 137.676 13.2955 137.188 13.2955C135.233 13.2955 133.631 14.4318 132.994 16.5909H132.812V13.5455H128.119V31ZM141.213 31H146.054V13.5455H141.213V31ZM143.645 11.2955C145.088 11.2955 146.27 10.1932 146.27 8.84091C146.27 7.5 145.088 6.39773 143.645 6.39773C142.213 6.39773 141.031 7.5 141.031 8.84091C141.031 10.1932 142.213 11.2955 143.645 11.2955ZM159.318 13.5455H155.852V12.375C155.852 11.1932 156.33 10.5 157.75 10.5C158.33 10.5 158.92 10.625 159.307 10.75L160.159 7.11364C159.557 6.93182 158.227 6.63636 156.739 6.63636C153.455 6.63636 151.011 8.48864 151.011 12.2841V13.5455H148.545V17.1818H151.011V31H155.852V17.1818H159.318V13.5455ZM171.56 13.5455H168.276V9.36364H163.435V13.5455H161.048V17.1818H163.435V26.2727C163.412 29.6932 165.741 31.3864 169.253 31.2386C170.503 31.1932 171.389 30.9432 171.878 30.7841L171.116 27.1818C170.878 27.2273 170.366 27.3409 169.912 27.3409C168.946 27.3409 168.276 26.9773 168.276 25.6364V17.1818H171.56V13.5455Z" />
              <rect y="26" width="24" height="5" />
              <rect x="9" y="17" width="15" height="5" />
            </svg>
          </a>
    
          <div class="max-w-md text-center text-neutral-500 dark:text-neutral-200 lg:text-lg">“This is a section of some simple filler text, also known as placeholder text.”</div>
    
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
            <div class="h-12 w-12 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg md:h-14 md:w-14">
              <awc-avatar
                image="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112"
                style="--size: 100%"
              ></awc-avatar>
            </div>
    
            <div>
              <div class="text-center text-sm font-bold text-primary sm:text-left md:text-base">John McCulling</div>
              <p class="text-center text-sm text-neutral-500 dark:text-neutral-200 sm:text-left md:text-sm">CEO / Datadrift</p>
            </div>
          </div>
        </div>
        <!-- quote - end -->
      </div>
    </div>
  `
};

export const Testimonials3: StoryObj = {
  name: 'Testimonials 3',
  render: () => html`
    <div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
      <div class="container mx-auto px-4 md:px-8">

        <!-- text - start -->
        <div class="mb-8 md:mb-12">
          <awc-typography type="h3" class="mb-4 text-center" noMargin >
            What others say about us
          </awc-typography>
          <awc-typography class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block" noMargin >
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
          </awc-typography>
        </div>
        <!-- text - end -->

        <div class="grid gap-4 md:grid-cols-2 md:gap-8">
          <!-- quote - start -->
          <div class="flex flex-col items-center gap-4 rounded-lg bg-primary px-8 py-6 md:gap-6">
            <div class="max-w-md text-center text-white lg:text-lg">“This is a section of some simple filler text, also known as placeholder text.”</div>

            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-primary-100 bg-neutral-100 dark:bg-neutral-800 md:h-14 md:w-14">
                <awc-avatar
                  image="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112"
                  style="--size: 100%"
                ></awc-avatar>
              </div>

              <div>
                <div class="text-center text-sm font-bold text-primary-50 sm:text-left md:text-base">John McCulling</div>
                <p class="text-center text-sm text-primary-200 sm:text-left md:text-sm">CEO / Datadrift</p>
              </div>
            </div>
          </div>
          <!-- quote - end -->

          <!-- quote - start -->
          <div class="flex flex-col items-center gap-4 rounded-lg bg-primary px-8 py-6 md:gap-6">
            <div class="max-w-md text-center text-white lg:text-lg">“This is a section of some simple filler text, also known as placeholder text.”</div>

            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-primary-100 bg-neutral-100 dark:bg-neutral-800 md:h-14 md:w-14">
                <awc-avatar
                  image="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                  style="--size: 100%"
                ></awc-avatar>
              </div>

              <div>
                <div class="text-center text-sm font-bold text-primary-50 sm:text-left md:text-base">Kate Berg</div>
                <p class="text-center text-sm text-primary-200 sm:text-left md:text-sm">CFO / Dashdash</p>
              </div>
            </div>
          </div>
          <!-- quote - end -->
        </div>
      </div>
    </div>
  `
};
