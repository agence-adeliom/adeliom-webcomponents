import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Listing',
  parameters: {
    layout: 'padded'
  }
} satisfies Meta;

const heading = html`<!-- text - start -->
  <div class="mb-8 md:mb-10">
    <h3 class="text-3x-large md:text-4x-large xl:text-5x-large font-semibold leading-dense text-center mb-4 text-title">
      <span class="text-sm md:text-base font-semibold leading-normal text-paragraph uppercase block mb-1">Headline</span>
      Eiusmod tempor incididunt
    </h3>
    <p class="mx-auto max-w-screen-md text-center text-paragraph"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Porta lorem mollis aliquam ut porttitor leo a diam.</p
    >
  </div>
  <!-- text - end -->`;

const card = html`
    <awc-card class="col-span-full md:col-span-6 lg:col-span-4" shadow bordered >
        <img
            slot="image"
            alt="A kitten sits patiently between a terracotta pot and decorative grasses."
            src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80">

        <div class="flex flex-col gap-6">
            <span class="text-xl font-bold">
                Titre de la card
            </span>

            <span class="text-sm flex items-center text-paragraph gap-2">
                <awc-icon name="geo-alt"></awc-icon>
                Lorem ipsum
            </span>


        </div>

        <footer slot="footer">
            <awc-button variant="ghost" size="medium">
                <awc-icon slot="suffix" name="arrow-right"></awc-icon>
                Button
            </awc-button>
        </footer>
    </awc-card>
`;

const reviewCard = html`
    <!-- review - start -->
    <awc-card class="col-span-2 lg:col-span-1 border border-[var(--awc-card-border-color)] py-6 px-6 rounded" style="--padding: 0">
        <div slot="header" class="mb-2">
            <!-- stars - start -->
            <awc-rating label="Rating" readonly value="5"></awc-rating>
            <!-- stars - end -->
        </div>

        <div slot="footer" class="mt-4 flex items-center gap-3">
            <awc-avatar class="w-[37px] h-[37px]" image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"></awc-avatar>
            <div class="flex flex-col">
                <span class="block text-sm text-paragraph font-bold">Prénom Nom</span>
                <span class="block text-sm text-paragraph">
                    Lorem ipsum
                </span>
            </div>
        </div>

        <h4 class="text-title font-bold mb-1">Titre de la card</h4>

        <p class="text-paragraph">
            Accumsan egestas molestie dignissim bibendum leo nunc. Enim in amet amet amet orci.
        </p>
    </awc-card>
    <!-- review - end -->
`

const iconSelect = html`
    <awc-select
        multiple
        placeholder="Ex : Exemple"
        clearable>
        <awc-icon name="geo-alt" slot="prefix"></awc-icon>

        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
        <awc-option value="option-4">Option 4</awc-option>
        <awc-option value="option-5">Option 5</awc-option>
        <awc-option value="option-6">Option 6</awc-option>
    </awc-select>
`
const basicSelect = html`
    <awc-select
    placeholder="Ex : Exemple"
    multiple
    clearable>
        <awc-option value="option-1">Option 1</awc-option>
        <awc-option value="option-2">Option 2</awc-option>
        <awc-option value="option-3">Option 3</awc-option>
        <awc-option value="option-4">Option 4</awc-option>
        <awc-option value="option-5">Option 5</awc-option>
        <awc-option value="option-6">Option 6</awc-option>
    </awc-select>
`

export const Listing1: StoryObj = {
    name: 'Listing 1',
    render: () => html`
        <div class="container mx-auto px-4 md:px-8">
            ${heading}

            <!-- Filters start -->
            <div class="flex flex-row gap-2 items-center justify-center">
                <div class="hidden lg:flex flex-row gap-2 items-center justify-center">
                    <!-- Start select 1 -->
                        ${iconSelect}
                    <!-- End select 1 -->

                    <!-- Start select 2 -->
                        ${basicSelect}
                    <!-- End select 2 -->

                    <!-- Start select 3 -->
                        ${basicSelect}
                    <!-- End select 3 -->
                </div>
                <awc-button variant="primary" size="medium" outline class="filtersTab-opener w-full lg:w-fit">
                    <awc-icon slot="suffix" name="sliders"></awc-icon>
                    Tous les filtres
                </awc-button>
            </div>
            <!-- Filters end -->

            <!-- Start other filters tab -->
            <awc-drawer placement="start" class="filtersTab-drawer">
                <div slot="label">
                    Tous les filtres
                </div>
                <awc-details style="--border-width: 0; border-bottom-width:1px; --border-color: var(--awc-color-neutral-200);--background-color: transparent;" class="flex flex-col" summary="Lorem ipsum sit dolor">
                    <awc-checkbox class="w-full">Possible option</awc-checkbox>
                    <awc-checkbox class="w-full">Possible option</awc-checkbox>
                    <awc-checkbox class="w-full">Possible option</awc-checkbox>
                    <awc-checkbox class="w-full">Possible option</awc-checkbox>
                </awc-details>

                <awc-details style="--border-width: 0; border-bottom-width:1px; --border-color: var(--awc-color-neutral-200);--background-color: transparent;" summary="Lorem ipsum sit dolor">
                    <awc-radio-group name="radio">
                        <awc-radio value="1">Possible option</awc-radio>
                        <awc-radio value="2">Possible option</awc-radio>
                        <awc-radio value="3">Possible option</awc-radio>
                        <awc-radio value="4">Possible option</awc-radio>
                    </awc-radio-group>
                </awc-details>

                <div class="lg:hidden flex flex-col py-4 gap-4">
                    ${iconSelect}
                    ${basicSelect}
                    ${basicSelect}
                </div>
            </awc-drawer>
            <!-- End other filters tab -->

            <!-- Filters details start -->
            <div class="w-full flex items-center justify-between mt-6 lg:mt-12">
                <p class="text-paragraph">
                    <strong>XX</strong> résultats
                </p>
                <awc-dropdown>
                    <awc-button slot="trigger" caret variant="ghost">Dropdown</awc-button>
                    <awc-menu>
                        <awc-menu-item>Dropdown Item 1</awc-menu-item>
                        <awc-menu-item>Dropdown Item 2</awc-menu-item>
                        <awc-menu-item>Dropdown Item 3</awc-menu-item>
                    </awc-menu>
                </awc-dropdown>
            </div>
            <!-- Filters details end -->

            <!-- Grid start -->
            <div class="grid grid-cols-12 gap-6 mt-4 lg:mt-6 relative">
                ${card}
                ${card}
                ${card}
                ${card}
                ${card}
                ${card}
                ${card}
                ${card}
                ${card}
            </div>
            <!-- Grid end -->

            <!-- Pagination start -->
            <div class="mx-auto max-w-screen-sm py-10">
                <awc-pagination total="5" current="1" ></awc-pagination>
            </div>
            <!-- Pagination end -->
        </div>
    <script>
        const drawerMenu = document.querySelector('.filtersTab-drawer');
        const openButtonStart = document.querySelector('.filtersTab-opener');
        openButtonStart.addEventListener('click', () => drawerMenu.show());
    </script>`
}

export const Listing2: StoryObj = {
    name: 'Listing 2',
    render: () => html`
        <div class="container mx-auto px-4 md:px-8">
            ${heading}

            <!-- Filters details start -->
            <div class="w-full flex items-center justify-between">
                <p class="text-paragraph">
                  <strong>XX</strong> résultats
                </p>
                <awc-dropdown>
                    <awc-button slot="trigger" caret variant="ghost">Dropdown</awc-button>
                    <awc-menu>
                        <awc-menu-item>Dropdown Item 1</awc-menu-item>
                        <awc-menu-item>Dropdown Item 2</awc-menu-item>
                        <awc-menu-item>Dropdown Item 3</awc-menu-item>
                    </awc-menu>
                </awc-dropdown>
            </div>
            <!-- Filters details end -->

            <!-- Grid start -->
            <div class="grid grid-cols-2 gap-6 mt-4 lg:mt-6 relative">
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
                ${reviewCard}
            </div>            
            <!-- Grid end -->

            <!-- Pagination start -->
            <div class="mx-auto max-w-screen-sm py-10">
                <awc-pagination total="5" current="1" ></awc-pagination>
            </div>
            <!-- Pagination end -->            
        </div>
    `
}

export const Listing3: StoryObj = {
    name: 'Listing 3',
    render: () => html`
        <div class="container mx-auto px-4 md:px-8">
            ${heading}
        </div>
        <div class="grid grid-cols-12 gap-6 max-w-[1360px] mx-auto px-4 md:px-8">
            <div class="hidden lg:block col-span-3">
                <!-- Filters start -->
                <awc-details style="--border-width: 0; border-bottom-width:1px; --border-color: var(--awc-color-neutral-200);--background-color: transparent;" class="flex flex-col" summary="Lorem ipsum sit dolor" open>
                    <awc-checkbox class="w-full">Possible option</awc-checkbox>
                    <awc-checkbox class="w-full">Possible option</awc-checkbox>
                    <awc-checkbox class="w-full">Possible option</awc-checkbox>
                    <awc-checkbox class="w-full">Possible option</awc-checkbox>
                </awc-details>

                <awc-details style="--border-width: 0; border-bottom-width:1px; --border-color: var(--awc-color-neutral-200);--background-color: transparent;" summary="Lorem ipsum sit dolor" open>
                    <awc-radio-group name="radio">
                        <awc-radio value="1">Possible option</awc-radio>
                        <awc-radio value="2">Possible option</awc-radio>
                        <awc-radio value="3">Possible option</awc-radio>
                        <awc-radio value="4">Possible option</awc-radio>
                    </awc-radio-group>
                </awc-details>
                <!-- Filters end -->
            </div>

            <!-- Filters drawer CTA start -->
            <awc-button variant="primary" size="medium" outline class="filtersTab-opener col-span-full lg:hidden">
                <awc-icon slot="suffix" name="sliders"></awc-icon>
                Tous les filtres
            </awc-button>
            <!-- Filters drawer CTA end -->

            <!-- Filters drawer start -->
            <awc-drawer placement="start" class="filtersTab-drawer">
                <div slot="label">
                    Tous les filtres
                </div>
                <!-- Filters start -->
                <awc-details style="--border-width: 0; border-bottom-width:1px; --border-color: var(--awc-color-neutral-200);--background-color: transparent;" class="flex flex-col" summary="Lorem ipsum sit dolor" open>
                        <awc-checkbox class="w-full">Possible option</awc-checkbox>
                        <awc-checkbox class="w-full">Possible option</awc-checkbox>
                        <awc-checkbox class="w-full">Possible option</awc-checkbox>
                        <awc-checkbox class="w-full">Possible option</awc-checkbox>
                    </awc-details>

                    <awc-details style="--border-width: 0; border-bottom-width:1px; --border-color: var(--awc-color-neutral-200);--background-color: transparent;" summary="Lorem ipsum sit dolor" open>
                        <awc-radio-group name="radio">
                            <awc-radio value="1">Possible option</awc-radio>
                            <awc-radio value="2">Possible option</awc-radio>
                            <awc-radio value="3">Possible option</awc-radio>
                            <awc-radio value="4">Possible option</awc-radio>
                        </awc-radio-group>
                    </awc-details>
                    <!-- Filters end -->
                </awc-drawer>            
            <!-- Filters drawer end -->

            <div class="col-span-full lg:col-span-9">
                <!-- Filters details start -->
                <div class="w-full flex items-center justify-between">
                    <p class="text-paragraph">
                        <strong>XX</strong> résultats
                    </p>
                    <awc-dropdown>
                        <awc-button slot="trigger" caret variant="ghost">Dropdown</awc-button>
                        <awc-menu>
                            <awc-menu-item>Dropdown Item 1</awc-menu-item>
                            <awc-menu-item>Dropdown Item 2</awc-menu-item>
                            <awc-menu-item>Dropdown Item 3</awc-menu-item>
                        </awc-menu>
                    </awc-dropdown>
                </div>
                <!-- Filters details end -->

                <!-- Grid start -->
                <div class="grid grid-cols-12 gap-6 mt-4 lg:mt-6">
                    ${card}
                    ${card}
                    ${card}
                    ${card}
                    ${card}
                    ${card}
                    ${card}
                    ${card}
                    ${card}
                </div>
                <!-- Grid end -->

                <!-- Pagination start -->
                <div class="mx-auto max-w-screen-sm py-10">
                    <awc-pagination total="5" current="1" ></awc-pagination>
                </div>
                <!-- Pagination end -->
            </div>
        </div>
        <script>
            const drawerMenu = document.querySelector('.filtersTab-drawer');
            const openButtonStart = document.querySelector('.filtersTab-opener');
            openButtonStart.addEventListener('click', () => drawerMenu.show());
        </script>
    `
}
