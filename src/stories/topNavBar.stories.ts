import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Header/TopNavBar',
  parameters: {
    layout: ''
  }
} satisfies Meta;

export const TopNavBar1: StoryObj = {
    name: 'TopNavBar 1',
    render: () => html`
        <div class="w-full border-b border-inputTextColor">
            <div class="container mx-auto flex flex-col gap-4 lg:flex-row items-start lg:items-center lg:justify-end p-4 lg:py-2 lg:px-0">
                <a href="https://adeliom.com" class="text-sm font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700 flex items-center gap-1">
                    <awc-icon slot="prefix" name="telephone" class="mr-1"></awc-icon>
                    Link
                </a>
                <a href="https://adeliom.com" class="text-sm font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700 flex items-center gap-1">
                    <awc-icon slot="prefix" name="calendar" class="mr-1"></awc-icon>
                    Link
                </a>
                <a href="https://adeliom.com" class="text-sm font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700 flex items-center gap-1">
                    <awc-icon slot="prefix" name="search" class="mr-1"></awc-icon>
                    Link
                </a>
                <a href="https://adeliom.com" class="text-sm font-semibold text-paragraph transition duration-100 hover:text-primary active:text-primary-700 flex items-center gap-1">
                    <awc-icon slot="prefix" name="person" class="mr-1"></awc-icon>
                    Link
                </a>
            </div>
        </div>
    `
}

export const TopNavBar2: StoryObj = {
    name: 'TopNavBar 2',
    render: () => html`
        <div class="w-full border-b border-inputTextColor">
            <div class="container mx-auto flex flex-col gap-4 lg:flex-row items-start lg:items-center lg:justify-end p-4 lg:py-2 lg:px-0">
                <div class="flex items-center gap-1">
                    <awc-icon slot="prefix" name="truck" class="mr-1"></awc-icon>
                    <p class="text-paragraph font-semibold">
                        paragraph
                    </p>
                </div>
                <div class="flex items-center gap-1">
                    <awc-icon slot="prefix" name="star-fill" class="mr-1"></awc-icon>
                    <p class="text-paragraph font-semibold">
                        paragraph
                    </p>
                </div>
                <div class="flex items-center gap-1">
                    <awc-icon slot="prefix" name="credit-card-2-front" class="mr-1"></awc-icon>
                    <p class="text-paragraph font-semibold">
                        paragraph
                    </p>
                </div>
                <awc-rating label="Rating" readonly showRate value="5" class="mt-2 lg:mt-0"></awc-rating>
            </div>
        </div>
    `
}