import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/Object-3d',
  parameters: {
    layout: 'padded',
  }
} satisfies Meta;

export const Object3d: StoryObj = {
  name: 'Basic usage',
  render: () => html`
    <model-viewer
      alt="Ceci est une voiture"
      src="/assets/images/object-3d/car.glb"
      shadow-intensity="1"
      loading="eager"
      camera-controls
      touch-action="pan-y">
    </model-viewer>

    <style>
      model-viewer {
        width: 1000px;
        height: 1000px;
        margin: auto;
      }
    </style>

    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
  `
}

export const Object3d2: StoryObj = {
  name: 'With SkyBox image',
  render: () => html`
    <model-viewer
      alt="Ceci est une voiture"
      src="/assets/images/object-3d/car.glb"
      skybox-image="/assets/images/object-3d/sunrise.hdr"
      shadow-intensity="1"
      loading="eager"
      camera-controls
      touch-action="pan-y">
    </model-viewer>

    <style>
      model-viewer {
        width: 1000px;
        height: 1000px;
        margin: auto;
      }
    </style>

    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
  `
}

export const Object3d3: StoryObj = {
  name: 'With environment image',
  render: () => html`
    <model-viewer
      alt="Ceci est une voiture"
      src="/assets/images/object-3d/car.glb"
      environment-image="/assets/images/object-3d/environment.hdr"
      shadow-intensity="1"
      loading="eager"
      camera-controls
      touch-action="pan-y">
    </model-viewer>

    <style>
      model-viewer {
        width: 1000px;
        height: 1000px;
        margin: auto;
      }
    </style>

    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
  `
}
