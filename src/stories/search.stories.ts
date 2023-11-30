import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Search',
  parameters: {
    layout: ''
  }
} satisfies Meta;

export const Search1: StoryObj = {
  name: 'Search 1',
  render: () =>
    html`<awc-drawer placement="top" open class="search-dialog">
        <!-- search - start -->
        <div class="container md:mx-auto">
          <div class="mx-4 md:mx-auto md:w-8/12  py-6 md:py-20">
            <h2
              class="pb-10 text-center text-title text-3x-large md:text-4x-large lg:text-5x-large font-semibold leading-dense"
            >
              My research ...
            </h2>
            <div class="flex max-md:flex-col gap-2 md:gap-3 w-full">
              <!-- input - start -->
              <awc-input size="large" placeholder="Ex : Example" class="w-full">
                <awc-icon name="search" slot="suffix"></awc-icon>
              </awc-input>
              <!-- input - end -->
              <awc-button variant="primary" size="large">Search</awc-button>
            </div>
          </div>
        </div>
        <div slot="footer" class="bg-neutral-200 text-start">
          <div class="container py-10 md:py-20 mx-auto">
            <div class="mx-4 md:mx-auto md:md:w-8/12 ">
              <div class="flex max-md:flex-col gap-6">
                <div class="w-full md:w-1/2 flex flex-col">
                  <h3 class="text-x-large font-semibold mb-2">Need help?</h3>
                  <p>Our advisors remain available to analyze your needs, support you and respond to your needs.</p>
                  <awc-button variant="primary" outline size="medium" class="md:w-fit mt-auto pt-6"
                    >Contact us</awc-button
                  >
                </div>

                <div class="w-full md:w-1/2 flex flex-col">
                  <h3 class="text-x-large font-semibold mb-2">Frequently Asked Questions</h3>

                  <p>Visit our FAQ page to find answers to your questions.</p>

                  <awc-button variant="primary" outline size="medium" class="md:w-fit mt-auto pt-6">
                    Consult our FAQ
                  </awc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- search - end -->
      </awc-drawer>
      <awc-button>Open search</awc-button>
      <style>
        .search-dialog {
          --body-spacing: 0;
          --footer-spacing: 0;
          --size: 'fit-content';
        }
        .search-dialog::part(body) {
          flex-shrink: 0;
        }
      </style>
      <script>
        const drawer = document.querySelector('.search-dialog');
        const openButton = drawer.nextElementSibling;

        openButton.addEventListener('click', () => drawer.show());
      </script>`
};
