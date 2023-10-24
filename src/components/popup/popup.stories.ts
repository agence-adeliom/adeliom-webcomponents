import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCPopup from './popup';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-popup');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Popup',
  component: 'awc-popup',
  args,
  argTypes,
  parameters: {
    layout: '',
    actions: {
      handles: events
    },
  },
  render: context => template(context)
} satisfies Meta<AWCPopup & typeof args>;

export default meta;

type Story = StoryObj<AWCPopup & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`<div class="popup-overview p-4">
      <awc-popup placement="top" active>
          <span slot="anchor"></span>
          <div class="box"></div>
      </awc-popup>

      <div class="popup-overview-options">
          <awc-select label="Placement" name="placement" value="top" class="popup-overview-select">
              <awc-option value="top">top</awc-option>
              <awc-option value="top-start">top-start</awc-option>
              <awc-option value="top-end">top-end</awc-option>
              <awc-option value="bottom">bottom</awc-option>
              <awc-option value="bottom-start">bottom-start</awc-option>
              <awc-option value="bottom-end">bottom-end</awc-option>
              <awc-option value="right">right</awc-option>
              <awc-option value="right-start">right-start</awc-option>
              <awc-option value="right-end">right-end</awc-option>
              <awc-option value="left">left</awc-option>
              <awc-option value="left-start">left-start</awc-option>
              <awc-option value="left-end">left-end</awc-option>
          </awc-select>
          <awc-input type="number" name="distance" label="distance" value="0"></awc-input>
          <awc-input type="number" name="skidding" label="Skidding" value="0"></awc-input>
      </div>

      <div class="popup-overview-options">
          <awc-switch name="active" checked>Active</awc-switch>
          <awc-switch name="arrow">Arrow</awc-switch>
      </div>
  </div>

  <script>
      const containerOverview = document.querySelector('.popup-overview');
      const popupOverview = containerOverview.querySelector('awc-popup');
      const selectOverview = containerOverview.querySelector('awc-select[name="placement"]');
      const distanceOverview = containerOverview.querySelector('awc-input[name="distance"]');
      const skiddingOverview = containerOverview.querySelector('awc-input[name="skidding"]');
      const activeOverview = containerOverview.querySelector('awc-switch[name="active"]');
      const arrowOverview = containerOverview.querySelector('awc-switch[name="arrow"]');

      selectOverview.addEventListener('awc-change', () => (popupOverview.placement = selectOverview.value));
      distanceOverview.addEventListener('awc-input', () => (popupOverview.distance = distanceOverview.value));
      skiddingOverview.addEventListener('awc-input', () => (popupOverview.skidding = skiddingOverview.value));
      activeOverview.addEventListener('awc-change', () => (popupOverview.active = activeOverview.checked));
      arrowOverview.addEventListener('awc-change', () => (popupOverview.arrow = arrowOverview.checked));
  </script>

  <style>
      .popup-overview awc-popup {
          --arrow-color: var(--awc-color-primary-600);
      }

      .popup-overview span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 50px;
      }

      .popup-overview .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }

      .popup-overview-options {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          gap: 1rem;
      }

      .popup-overview-options awc-select {
          width: 160px;
      }

      .popup-overview-options awc-input {
          width: 100px;
      }

      .popup-overview-options + .popup-overview-options {
          margin-top: 1rem;
      }
  </style>`
};

export const Activating: Story = {
  name: 'Activating',
  parameters: {
    docs: {
      description: {
        story: `Popups are inactive and hidden until the \`active\` attribute is applied. Removing the attribute will tear down all positioning logic and listeners, meaning you can have many idle popups on the page without affecting performance.`
      }
    }
  },
  render: () => html`<div class="popup-active p-4">
      <awc-popup placement="top" active>
          <span slot="anchor"></span>
          <div class="box"></div>
      </awc-popup>

      <br />
      <awc-switch checked>Active</awc-switch>
  </div>

  <style>
      .popup-active span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 50px;
      }

      .popup-active .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }
  </style>

  <script>
      const containerActive = document.querySelector('.popup-active');
      const popupActive = containerActive.querySelector('awc-popup');
      const active = containerActive.querySelector('awc-switch');

      active.addEventListener('awc-change', () => (popupActive.active = active.checked));
  </script>`,
};

export const ExternalAnchors: Story = {
  name: 'External Anchors',
  parameters: {
    docs: {
      description: {
        story: `By default, anchors are slotted into the popup using the \`anchor\` slot. If your anchor needs to live outside of the popup, you can pass the anchor's \`id\` to the \`anchor\` attribute. Alternatively, you can pass an element reference to the \`anchor\` property to achieve the same effect without using an \`id\`.`
      }
    }
  },
  render: () => html`<div class="p-4">
    <span id="external-anchor"></span>

    <awc-popup anchor="external-anchor" placement="top" active>
        <div class="box"></div>
    </awc-popup>
  </div>

  <style>
      #external-anchor {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 50px 0 0 50px;
      }

      #external-anchor ~ awc-popup .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }
  </style>`,
};

export const Placement: Story = {
  name: 'Activating',
  parameters: {
    docs: {
      description: {
        story: `Use the \`placement\` attribute to tell the popup the preferred placement of the popup. Note that the actual position will vary to ensure the panel remains in the viewport if you're using positioning features such as \`flip\` and \`shift\`.

Since placement is preferred when using \`flip\`, you can observe the popup's current placement when it's active by looking at the \`data-current-placement\` attribute. This attribute will update as the popup flips to find available space and it will be removed when the popup is deactivated.`
      }
    }
  },
  render: () => html`<div class="popup-placement p-4">
      <awc-popup placement="top" active>
          <span slot="anchor"></span>
          <div class="box"></div>
      </awc-popup>

      <awc-select label="Placement" value="top">
          <awc-option value="top">top</awc-option>
          <awc-option value="top-start">top-start</awc-option>
          <awc-option value="top-end">top-end</awc-option>
          <awc-option value="bottom">bottom</awc-option>
          <awc-option value="bottom-start">bottom-start</awc-option>
          <awc-option value="bottom-end">bottom-end</awc-option>
          <awc-option value="right">right</awc-option>
          <awc-option value="right-start">right-start</awc-option>
          <awc-option value="right-end">right-end</awc-option>
          <awc-option value="left">left</awc-option>
          <awc-option value="left-start">left-start</awc-option>
          <awc-option value="left-end">left-end</awc-option>
      </awc-select>
  </div>

  <style>
      .popup-placement span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 50px;
      }

      .popup-placement .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }

      .popup-placement awc-select {
          max-width: 280px;
      }
  </style>

  <script>
      const containerPlacement = document.querySelector('.popup-placement');
      const popupPlacement = containerPlacement.querySelector('awc-popup');
      const select = containerPlacement.querySelector('awc-select');

      select.addEventListener('awc-change', () => (popupPlacement.placement = select.value));
  </script>`,
};

export const Distance: Story = {
  name: 'Activating',
  parameters: {
    docs: {
      description: {
        story: `Use the \`distance\` attribute to change the distance between the popup and its anchor. A positive value will move the popup further away and a negative value will move it closer.`
      }
    }
  },
  render: () => html`<div class="popup-distance p-4">
      <awc-popup placement="top" distance="0" active>
          <span slot="anchor"></span>
          <div class="box"></div>
      </awc-popup>

      <awc-range min="-50" max="50" step="1" value="0" label="Distance"></awc-range>
  </div>

  <style>
      .popup-distance span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 50px;
      }

      .popup-distance .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }

      .popup-distance awc-range {
          max-width: 260px;
      }
  </style>

  <script>
      const containerDistance = document.querySelector('.popup-distance');
      const popupDistance = containerDistance.querySelector('awc-popup');
      const distance = containerDistance.querySelector('awc-range');

      distance.addEventListener('awc-input', () => (popupDistance.distance = distance.value));
  </script>`,
};


export const Skidding: Story = {
  name: 'Skidding',
  parameters: {
    docs: {
      description: {
        story: `The \`skidding\` attribute is similar to \`distance\`, but instead allows you to offset the popup along the anchor's axis. Both positive and negative values are allowed.`
      }
    }
  },
  render: () => html`<div class="popup-skidding p-4">
      <awc-popup placement="top" skidding="0" active>
          <span slot="anchor"></span>
          <div class="box"></div>
      </awc-popup>

      <awc-range min="-50" max="50" step="1" value="0" label="Skidding"></awc-range>
  </div>

  <style>
      .popup-skidding span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 50px;
      }

      .popup-skidding .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }

      .popup-skidding awc-range {
          max-width: 260px;
      }
  </style>

  <script>
      const containerSkidding = document.querySelector('.popup-skidding');
      const popupSkidding = containerSkidding.querySelector('awc-popup');
      const skidding = containerSkidding.querySelector('awc-range');

      skidding.addEventListener('awc-input', () => (popupSkidding.skidding = skidding.value));
  </script>`,
};

export const Arrows: Story = {
  name: 'Arrows',
  parameters: {
    docs: {
      description: {
        story: `Add an arrow to your popup with the \`arrow\` attribute. It's usually a good idea to set a \`distance\` to make room for the arrow. To adjust the arrow's color and size, use the \`--arrow-color\` and \`--arrow-size\` custom properties, respectively. You can also target the \`arrow\` part to add additional styles such as shadows and borders.

By default, the arrow will be aligned as close to the center of the _anchor_ as possible, considering available space and \`arrow-padding\`. You can use the \`arrow-placement\` attribute to force the arrow to align to the start, end, or center of the _popup_ instead.`
      }
    }
  },
  render: () => html`<div class="popup-arrow p-4">
      <awc-popup placement="top" arrow arrow-placement="anchor" distance="8" active>
          <span slot="anchor"></span>
          <div class="box"></div>
      </awc-popup>

      <div class="popup-arrow-options">
          <awc-select label="Placement" name="placement" value="top" class="popup-overview-select">
              <awc-option value="top">top</awc-option>
              <awc-option value="top-start">top-start</awc-option>
              <awc-option value="top-end">top-end</awc-option>
              <awc-option value="bottom">bottom</awc-option>
              <awc-option value="bottom-start">bottom-start</awc-option>
              <awc-option value="bottom-end">bottom-end</awc-option>
              <awc-option value="right">right</awc-option>
              <awc-option value="right-start">right-start</awc-option>
              <awc-option value="right-end">right-end</awc-option>
              <awc-option value="left">left</awc-option>
              <awc-option value="left-start">left-start</awc-option>
              <awc-option value="left-end">left-end</awc-option>
          </awc-select>

          <awc-select label="Arrow Placement" name="arrow-placement" value="anchor">
              <awc-option value="anchor">anchor</awc-option>
              <awc-option value="start">start</awc-option>
              <awc-option value="end">end</awc-option>
              <awc-option value="center">center</awc-option>
          </awc-select>
      </div>

      <div class="popup-arrow-options">
          <awc-switch name="arrow" checked>Arrow</awc-switch>
      </div>

      <style>
          .popup-arrow awc-popup {
              --arrow-color: var(--awc-color-primary-600);
          }

          .popup-arrow span[slot='anchor'] {
              display: inline-block;
              width: 150px;
              height: 150px;
              border: dashed 2px var(--awc-color-neutral-600);
              margin: 50px;
          }

          .popup-arrow .box {
              width: 100px;
              height: 50px;
              background: var(--awc-color-primary-600);
              border-radius: var(--awc-border-radius-medium);
          }

          .popup-arrow-options {
              display: flex;
              flex-wrap: wrap;
              align-items: end;
              gap: 1rem;
          }

          .popup-arrow-options awc-select {
              width: 160px;
          }

          .popup-arrow-options + .popup-arrow-options {
              margin-top: 1rem;
          }
      </style>

      <script>
          const containerArrow = document.querySelector('.popup-arrow');
          const popupArrow = containerArrow.querySelector('awc-popup');
          const placementArrow = containerArrow.querySelector('[name="placement"]');
          const arrowPlacement = containerArrow.querySelector('[name="arrow-placement"]');
          const arrow = containerArrow.querySelector('[name="arrow"]');

          placementArrow.addEventListener('awc-change', () => (popupArrow.placement = placementArrow.value));
          arrowPlacement.addEventListener('awc-change', () => (popupArrow.arrowPlacement = arrowPlacement.value));
          arrow.addEventListener('awc-change', () => (popupArrow.arrow = arrow.checked));
      </script>
  </div>`,
};

export const Syncing: Story = {
  name: 'Syncing with the Anchor\'s Dimensions',
  parameters: {
    docs: {
      description: {
        story: `Use the \`sync\` attribute to make the popup the same width or height as the anchor element. This is useful for controls that need the popup to stay the same width or height as the trigger.`
      }
    }
  },
  render: () => html`<div class="popup-sync p-4">
      <awc-popup placement="top" sync="width" active>
          <span slot="anchor"></span>
          <div class="box"></div>
      </awc-popup>

      <awc-select value="width" label="Sync">
          <awc-option value="width">Width</awc-option>
          <awc-option value="height">Height</awc-option>
          <awc-option value="both">Both</awc-option>
          <awc-option value="">None</awc-option>
      </awc-select>
  </div>

  <style>
      .popup-sync span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 50px;
      }

      .popup-sync .box {
          width: 100%;
          height: 100%;
          min-width: 50px;
          min-height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }

      .popup-sync awc-select {
          width: 160px;
      }
  </style>

  <script>
      const containerSync = document.querySelector('.popup-sync');
      const popupSync = containerSync.querySelector('awc-popup');
      const sync = containerSync.querySelector('awc-select');

      sync.addEventListener('awc-change', () => (popupSync.sync = sync.value));
  </script>`,
};

export const Positioning: Story = {
  name: 'Positioning Strategy',
  parameters: {
    docs: {
      description: {
        story: `By default, the popup is positioned using an absolute positioning strategy. However, if your anchor is fixed or exists within a container that has \`overflow: auto|hidden\`, the popup risks being clipped. To work around this, you can use a fixed positioning strategy by setting the \`strategy\` attribute to \`fixed\`.

The fixed positioning strategy reduces jumpiness when the anchor is fixed and allows the popup to break out containers that clip. When using this strategy, it's important to note that the content will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a \`transform\`, \`perspective\`, or \`filter\`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

In this example, you can see how the popup breaks out of the overflow container when it's fixed. The fixed positioning strategy tends to be less performant than absolute, so avoid using it unnecessarily.

Toggle the switch and scroll the container to see the difference.`
      }
    }
  },
  render: () => html`<div class="popup-strategy p-4">
      <div class="overflow">
          <awc-popup placement="top" strategy="fixed" active>
              <span slot="anchor"></span>
              <div class="box"></div>
          </awc-popup>
      </div>

      <awc-switch checked>Fixed</awc-switch>
  </div>

  <style>
      .popup-strategy .overflow {
          position: relative;
          height: 300px;
          border: solid 2px var(--awc-color-neutral-200);
          overflow: auto;
      }

      .popup-strategy span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 150px 50px;
      }

      .popup-strategy .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }

      .popup-strategy awc-switch {
          margin-top: 1rem;
      }
  </style>

  <script>
      const containerStrategy = document.querySelector('.popup-strategy');
      const popupStrategy = containerStrategy.querySelector('awc-popup');
      const fixed = containerStrategy.querySelector('awc-switch');

      fixed.addEventListener('awc-change', () => (popupStrategy.strategy = fixed.checked ? 'fixed' : 'absolute'));
  </script>`,
};

export const Flip: Story = {
  name: 'Flip',
  parameters: {
    docs: {
      description: {
        story: `When the popup doesn't have enough room in its preferred placement, it can automatically flip to keep it in view. To enable this, use the \`flip\` attribute. By default, the popup will flip to the opposite placement, but you can configure preferred fallback placements using \`flip-fallback-placement\` and \`flip-fallback-strategy\`. Additional options are available to control the flip behavior's boundary and padding.

Scroll the container to see how the popup flips to prevent clipping.`
      }
    }
  },
  render: () => html`<div class="popup-flip p-4">
      <div class="overflow">
          <awc-popup placement="top" flip active>
              <span slot="anchor"></span>
              <div class="box"></div>
          </awc-popup>
      </div>

      <br />
      <awc-switch checked>Flip</awc-switch>
  </div>

  <style>
      .popup-flip .overflow {
          position: relative;
          height: 300px;
          border: solid 2px var(--awc-color-neutral-200);
          overflow: auto;
      }

      .popup-flip span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 150px 50px;
      }

      .popup-flip .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }
  </style>

  <script>
      const containerFlip = document.querySelector('.popup-flip');
      const popupFlip = containerFlip.querySelector('awc-popup');
      const flip = containerFlip.querySelector('awc-switch');

      flip.addEventListener('awc-change', () => (popupFlip.flip = flip.checked));
  </script>`,
};

export const FlipFallbacks: Story = {
  name: 'Flip Fallbacks',
  parameters: {
    docs: {
      description: {
        story: `While using the \`flip\` attribute, you can customize the placement of the popup when the preferred placement doesn't have room. For this, use \`flip-fallback-placements\` and \`flip-fallback-strategy\`.

If the preferred placement doesn't have room, the first suitable placement found in \`flip-fallback-placement\` will be used. The value of this attribute must be a string including any number of placements separated by a space, e.g. \`"right bottom"\`.

If no fallback placement works, the final placement will be determined by \`flip-fallback-strategy\`. This value can be either \`initial\` (default), where the placement reverts to the position in \`placement\`, or \`best-fit\`, where the placement is chosen based on available space.

Scroll the container to see how the popup changes it's fallback placement to prevent clipping.`
      }
    }
  },
  render: () => html`<div class="popup-flip-fallbacks p-4">
      <div class="overflow">
          <awc-popup placement="top" flip flip-fallback-placements="right bottom" flip-fallback-strategy="initial" active>
              <span slot="anchor"></span>
              <div class="box"></div>
          </awc-popup>
      </div>
  </div>

  <style>
      .popup-flip-fallbacks .overflow {
          position: relative;
          height: 300px;
          border: solid 2px var(--awc-color-neutral-200);
          overflow: auto;
      }

      .popup-flip-fallbacks span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 250px 50px;
      }

      .popup-flip-fallbacks .box {
          width: 100px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }
  </style>`,
};

export const Shift: Story = {
  name: 'Shift',
  parameters: {
    docs: {
      description: {
        story: `When a popup is longer than its anchor, it risks being clipped by an overflowing container. In this case, use the \`shift\` attribute to shift the popup along its axis and back into view. You can customize the shift behavior using \`shiftBoundary\` and \`shift-padding\`.

Toggle the switch to see the difference.`
      }
    }
  },
  render: () => html`<div class="popup-shift p-4">
      <div class="overflow">
          <awc-popup placement="top" shift shift-padding="10" active>
              <span slot="anchor"></span>
              <div class="box"></div>
          </awc-popup>
      </div>

      <awc-switch checked>Shift</awc-switch>
  </div>

  <style>
      .popup-shift .overflow {
          position: relative;
          border: solid 2px var(--awc-color-neutral-200);
          overflow: auto;
      }

      .popup-shift span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 60px 0 0 10px;
      }

      .popup-shift .box {
          width: 300px;
          height: 50px;
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);
      }
  </style>

  <script>
      const containerShift = document.querySelector('.popup-shift');
      const popupShift = containerShift.querySelector('awc-popup');
      const shift = containerShift.querySelector('awc-switch');

      shift.addEventListener('awc-change', () => (popupShift.shift = shift.checked));
  </script>`,
};

export const AutoSize: Story = {
  name: 'Auto-size',
  parameters: {
    docs: {
      description: {
        story: `Use the \`auto-size\` attribute to tell the popup to resize when necessary to prevent it from getting clipped. Possible values are \`horizontal\`, \`vertical\`, and \`both\`. You can use \`autoSizeBoundary\` and \`auto-size-padding\` to customize the behavior of this option. Auto-size works well with \`flip\`, but if you're using \`auto-size-padding\` make sure \`flip-padding\` is the same value.

When using \`auto-size\`, one or both of \`--auto-size-available-width\` and \`--auto-size-available-height\` will be applied to the host element. These values determine the available space the popover has before clipping will occur. Since they cascade, you can use them to set a max-width/height on your popup's content and easily control its overflow.

Scroll the container to see the popup resize as its available space changes.`
      }
    }
  },
  render: () => html`<div class="popup-auto-size p-4">
      <div class="overflow">
          <awc-popup placement="top" auto-size="both" auto-size-padding="10" active>
              <span slot="anchor"></span>
              <div class="box"></div>
          </awc-popup>
      </div>

      <br />
      <awc-switch checked>Auto-size</awc-switch>
  </div>

  <style>
      .popup-auto-size .overflow {
          position: relative;
          height: 300px;
          border: solid 2px var(--awc-color-neutral-200);
          overflow: auto;
      }

      .popup-auto-size span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--awc-color-neutral-600);
          margin: 250px 50px 100px 50px;
      }

      .popup-auto-size .box {
          background: var(--awc-color-primary-600);
          border-radius: var(--awc-border-radius-medium);

          /* This sets the preferred size of the popup's content */
          width: 100px;
          height: 200px;

          /* This sets the maximum dimensions and allows scrolling when auto-size kicks in */
          max-width: var(--auto-size-available-width);
          max-height: var(--auto-size-available-height);
          overflow: auto;
      }
  </style>

  <script>
      const containerAutoSize = document.querySelector('.popup-auto-size');
      const popupAutoSize = containerAutoSize.querySelector('awc-popup');
      const autoSize = containerAutoSize.querySelector('awc-switch');

      autoSize.addEventListener('awc-change', () => (popupAutoSize.autoSize = autoSize.checked ? 'both' : ''));
  </script>`,
};
