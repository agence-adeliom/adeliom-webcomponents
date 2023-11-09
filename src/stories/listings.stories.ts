import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Listing',
  parameters: {
    layout: ''
  }
} satisfies Meta;

const heading = html`<!-- text - start -->
  <div class="mb-8 md:mb-10">
    <awc-typography type="h2" class="text-center mb-4 text-title">
      <span class="text-base font-bold leading-dense text-paragraph uppercase block">Headline</span>
      Our Team
    </awc-typography>
    <awc-typography class="mx-auto max-w-screen-md text-center text-paragraph"
      >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a 
      real written text but is random or otherwise generated.</awc-typography
    >
  </div>
  <!-- text - end -->`;

const card = html`
    <awc-card class="col-span-full col-span lg:col-span-1 shadow-lg" bordered="">
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

            <footer>
                <awc-button variant="ghost" size="medium">
                    <awc-icon slot="suffix" name="arrow-right"></awc-icon>
                    Button
                </awc-button>
            </footer>
        </div>
    </awc-card>
`;

export const Listing1: StoryObj = {
    name: 'Listing 1',
    render: () => html`
        <div class="container mx-auto px-4 md:px-8">
            ${heading}

            <!-- Filters start -->
            <div class="flex flex-row gap-2 items-center justify-center">
                <!-- Start select 1 -->
                <awc-select
                multiple=""
                placeholder="Ex : Exemple"
                clearable="">
                    <awc-icon name="geo-alt" slot="prefix"></awc-icon>
                                    
                    <awc-option value="option-1">Option 1</awc-option>
                    <awc-option value="option-2">Option 2</awc-option>
                    <awc-option value="option-3">Option 3</awc-option>
                    <awc-option value="option-4">Option 4</awc-option>
                    <awc-option value="option-5">Option 5</awc-option>
                    <awc-option value="option-6">Option 6</awc-option>
                </awc-select>
                <!-- End select 1 -->

                <!-- Start select 2 -->                
                <awc-select
                placeholder="Ex : Exemple"
                multiple=""
                clearable="">
                    <awc-option value="option-1">Option 1</awc-option>
                    <awc-option value="option-2">Option 2</awc-option>
                    <awc-option value="option-3">Option 3</awc-option>
                    <awc-option value="option-4">Option 4</awc-option>
                    <awc-option value="option-5">Option 5</awc-option>
                    <awc-option value="option-6">Option 6</awc-option>
                </awc-select>
                <!-- End select 2 -->

                <!-- Start select 3 -->                
                <awc-select
                placeholder="Ex : Exemple"
                multiple=""
                clearable="">
                    <awc-option value="option-1">Option 1</awc-option>
                    <awc-option value="option-2">Option 2</awc-option>
                    <awc-option value="option-3">Option 3</awc-option>
                    <awc-option value="option-4">Option 4</awc-option>
                    <awc-option value="option-5">Option 5</awc-option>
                    <awc-option value="option-6">Option 6</awc-option>
                </awc-select>
                <!-- End select 3 -->

                <awc-button variant="primary" size="medium" outline="" class="filtersTab-opener">
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
            </awc-drawer>  
            <!-- End other filters tab -->

            <!-- Filters details start -->
            <div class="w-full flex items-center justify-between mt-12">
                <awc-typography class="text-paragraph">
                    <strong>XX</strong> résultats
                </awc-typography>
                <awc-dropdown>
                    <awc-button slot="trigger" caret="" variant="ghost">Dropdown</awc-button>
                    <awc-menu>
                        <awc-menu-item>Dropdown Item 1</awc-menu-item>
                        <awc-menu-item>Dropdown Item 2</awc-menu-item>
                        <awc-menu-item>Dropdown Item 3</awc-menu-item>
                    </awc-menu>
                </awc-dropdown>                
            </div>
            <!-- Filters details end -->

            <!-- Grid start -->
            <div class="grid grid-cols-3 gap-6 mt-8 relative">   
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
                <awc-pagination total="50" current="1" ></awc-pagination>
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
                <awc-typography class="text-paragraph">
                    <strong>XX</strong> résultats
                </awc-typography>
                <awc-dropdown>
                    <awc-button slot="trigger" caret="" variant="ghost">Dropdown</awc-button>
                    <awc-menu>
                        <awc-menu-item>Dropdown Item 1</awc-menu-item>
                        <awc-menu-item>Dropdown Item 2</awc-menu-item>
                        <awc-menu-item>Dropdown Item 3</awc-menu-item>
                    </awc-menu>
                </awc-dropdown>                
            </div>
            <!-- Filters details end -->            
        </div>
    `
}

export const Listing3: StoryObj = {
    name: 'Listing 3',
    render: () => html`
        <div class="container mx-auto px-4 md:px-8">
            ${heading}
        </div>
        <div class="grid grid-cols-12 gap-6 max-w-[1360px] mx-auto">
            <div class="col-span-3">
                <!-- Filters start -->
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
                <!-- Filters end -->
            </div>
            <div class="col-span-9">
                <!-- Filters details start -->
                <div class="w-full flex items-center justify-between">
                    <awc-typography class="text-paragraph">
                        <strong>XX</strong> résultats
                    </awc-typography>
                    <awc-dropdown>
                        <awc-button slot="trigger" caret="" variant="ghost">Dropdown</awc-button>
                        <awc-menu>
                            <awc-menu-item>Dropdown Item 1</awc-menu-item>
                            <awc-menu-item>Dropdown Item 2</awc-menu-item>
                            <awc-menu-item>Dropdown Item 3</awc-menu-item>
                        </awc-menu>
                    </awc-dropdown>                
                </div>
                <!-- Filters details end -->

                <!-- Grid start -->
                <div class="grid grid-cols-3 gap-6">
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
                    <awc-pagination total="50" current="1" ></awc-pagination>
                </div>
                <!-- Pagination end -->
            </div>
        </div>
    `
}