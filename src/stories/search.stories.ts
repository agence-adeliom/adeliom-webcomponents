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
    html`<div>
      <!-- search - start -->
      <awc-button variant="text" size="small" class="top-6 right-6 absolute">
        <awc-icon name="x-lg" class="text-base"></awc-icon>
      </awc-button>
      <div class="container md:mx-auto">
        <div class="mx-4 md:mx-auto md:w-8/12  py-6 md:py-20">
          <h2 class="pb-10 text-center text-title text-3x-large md:text-4x-large lg:text-5x-large font-semibold leading-dense"> Je recherche ... </h2>
          <div class="flex max-md:flex-col gap-2 md:gap-3 w-full">
            <!-- input - start -->
            <awc-input size="large" placeholder="Ex : Exemple" class="w-full">
              <awc-icon name="search" slot="suffix"></awc-icon>
            </awc-input>
            <!-- input - end -->
            <awc-button variant="primary" size="large">Rechercher</awc-button>
          </div>
        </div>
      </div>
      <div class="bg-neutral-200">
        <div class="container py-10 md:py-20 mx-auto">
          <div class="mx-4 md:mx-auto md:md:w-8/12 ">
            <div class="flex max-md:flex-col gap-6">
              <div class="w-full md:w-1/2 flex flex-col">
                <h3 class="text-x-large font-semibold mb-2">Besoin d'aide ?</h3>
                <p>
                  Nos conseillers restent à votre écoute pour analyser vos besoins, vous accompagner et répondre à
                  toutes vos questions.
                </p>
                <awc-button variant="primary" outline size="medium" class="md:w-fit mt-auto pt-6"
                  >Nous contacter</awc-button
                >
              </div>

              <div class="w-full md:w-1/2 flex flex-col">
                <h3 class="text-x-large font-semibold mb-2">Questions fréquentes</h3>

                <p>Consultez notre page de FAQ pour trouver les réponses à vos questions.</p>

                <awc-button variant="primary" outline size="medium" class="md:w-fit mt-auto pt-6"
                  >Consulter notre FAQ</awc-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- search - end -->
    </div>`
};
