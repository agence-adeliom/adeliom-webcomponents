import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

export default {
  title: 'Block/3D Objects',
  parameters: {
    layout: 'padded'
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
      touch-action="pan-y"
    >
    </model-viewer>

    <style>
      model-viewer {
        width: 100%;
        height: 1000px;
        margin: auto;
      }
    </style>

    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
  `
};

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
      touch-action="pan-y"
    >
    </model-viewer>

    <style>
      model-viewer {
        width: 100%;
        height: 1000px;
        margin: auto;
      }
    </style>

    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
  `
};

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
      touch-action="pan-y"
    >
    </model-viewer>

    <style>
      model-viewer {
        width: 100%;
        height: 1000px;
        margin: auto;
      }
    </style>

    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
  `
};

export const Object3d4: StoryObj = {
  name: 'With hotspots',
  render: () => html`
    <model-viewer
      alt="Ceci est une voiture"
      src="/assets/images/object-3d/car.glb"
      environment-image="/assets/images/object-3d/environment.hdr"
      shadow-intensity="1"
      loading="eager"
      camera-controls
      touch-action="pan-y"
    >
      <button class="hotspot" slot="hotspot-visor" data-position="1 0.85 -0.50" data-normal="1 0.85 -0.50">
        <div class="annotation">Ceci est un magnifique rétroviseur.</div>
      </button>
    </model-viewer>

    <style>
      model-viewer {
        width: 100%;
        height: 1000px;
        margin: auto;
      }
      .hotspot {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: none;
        background-color: blue;
        box-sizing: border-box;
        pointer-events: none;
      }

      .hotspot[slot='hotspot-hand'] {
        --min-hotspot-opacity: 0;
        background-color: red;
      }

      .hotspot[slot='hotspot-foot']:not([data-visible]) {
        background-color: transparent;
        border: 3px solid blue;
      }

      .annotation {
        background-color: #888888;
        position: absolute;
        transform: translate(10px, 10px);
        border-radius: 10px;
        padding: 10px;
      }
      /* This keeps child nodes hidden while the element loads */
      :not(:defined) > * {
        display: none;
      }
    </style>

    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>
  `
};

export const Object3d5: StoryObj = {
  name: 'With camera views',
  render: () => html`
    <model-viewer
      alt="Ceci est une voiture"
      src="/assets/images/object-3d/car.glb"
      environment-image="/assets/images/object-3d/environment.hdr"
      shadow-intensity="1"
      loading="eager"
      camera-controls
      touch-action="none"
      camera-orbit="-150deg 70deg 10m"
      field-of-view="45deg"
      min-field-of-view="25deg"
      max-field-of-view="45deg"
      interpolation-decay="200"
    >
      <button
        class="view-button"
        slot="hotspot-0"
        data-position="1 0.85 0"
        data-normal="1 0.85 -0.50"
        data-orbit="70.94862deg 70.56856deg 0.16545582m"
        data-target="1 0.85 -0.50"
      >
        La fenêtre
      </button>
    </model-viewer>

    <style>
      model-viewer {
        width: 100%;
        height: 1000px;
        margin: auto;
      }
      .view-button {
        background: #fff;
        border-radius: 4px;
        border: none;
        box-sizing: border-box;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        color: rgba(0, 0, 0, 0.8);
        display: block;
        font-family:
          Futura,
          Helvetica Neue,
          sans-serif;
        font-size: 12px;
        font-weight: 700;
        max-width: 128px;
        overflow-wrap: break-word;
        padding: 0.5em 1em;
        position: absolute;
        width: max-content;
        height: max-content;
        transform: translate3d(-50%, -50%, 0);
      }
    </style>

    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"></script>

    <script type="module">
      const modelViewer2 = document.querySelector('model-viewer');
      const annotationClicked = annotation => {
        let dataset = annotation.dataset;
        modelViewer2.cameraTarget = dataset.target;
        modelViewer2.cameraOrbit = dataset.orbit;
        modelViewer2.fieldOfView = '45deg';
      };

      modelViewer2.querySelectorAll('button').forEach(hotspot => {
        hotspot.addEventListener('click', () => annotationClicked(hotspot));
      });
    </script>
  `
};
