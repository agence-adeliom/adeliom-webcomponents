import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCDrawer from './drawer.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-drawer');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Drawer',
  component: 'awc-drawer',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
    docs: {
      story: {
        height: '400px'
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCDrawer & typeof args>;

export default meta;

type Story = StoryObj<AWCDrawer & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-drawer label="Drawer" class="drawer-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawer = document.querySelector('.drawer-overview');
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector('awc-button[variant="primary"]');

        openButton.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());
      </script>`
};

export const SlideInFromStart: Story = {
  name: 'Slide in From Start',
  render: () =>
    html`<awc-drawer label="Drawer" placement="start" class="drawer-placement-start">
        This drawer slides in from the start.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawerStart = document.querySelector('.drawer-placement-start');
        const openButtonStart = drawerStart.nextElementSibling;
        const closeButtonStart = drawerStart.querySelector('awc-button[variant="primary"]');

        openButtonStart.addEventListener('click', () => drawerStart.show());
        closeButtonStart.addEventListener('click', () => drawerStart.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          'By default, drawers slide in from the end. To make the drawer slide in from the start, set the `placement` attribute to `start`.'
      }
    }
  }
};

export const SlideInFromTop: Story = {
  name: 'Slide in From Top',
  render: () =>
    html`<awc-drawer label="Drawer" placement="top" class="drawer-placement-top">
        This drawer slides in from the top.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawerTop = document.querySelector('.drawer-placement-top');
        const openButtonTop = drawerTop.nextElementSibling;
        const closeButtonTop = drawerTop.querySelector('awc-button[variant="primary"]');

        openButtonTop.addEventListener('click', () => drawerTop.show());
        closeButtonTop.addEventListener('click', () => drawerTop.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story: 'To make the drawer slide in from the top, set the `placement` attribute to `top`.'
      }
    }
  }
};

export const SlideInFromBottom: Story = {
  name: 'Slide in From Bottom',
  render: () =>
    html`<awc-drawer label="Drawer" placement="bottom" class="drawer-placement-bottom">
        This drawer slides in from the bottom.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawerBottom = document.querySelector('.drawer-placement-bottom');
        const openButtonBottom = drawerBottom.nextElementSibling;
        const closeButtonBottom = drawerBottom.querySelector('awc-button[variant="primary"]');

        openButtonBottom.addEventListener('click', () => drawerBottom.show());
        closeButtonBottom.addEventListener('click', () => drawerBottom.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story: 'To make the drawer slide in from the bottom, set the `placement` attribute to `bottom`.'
      }
    }
  }
};

export const ContainedElement: Story = {
  name: 'Contained to an Element',
  render: () =>
    html`<div
        style="position: relative; border: solid 2px var(--awc-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;"
      >
        The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer
        opens.

        <awc-drawer label="Drawer" contained class="drawer-contained" style="--size: 50%;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <awc-button slot="footer" variant="primary">Close</awc-button>
        </awc-drawer>
      </div>

      <awc-button>Toggle Drawer</awc-button>

      <script>
        const drawerContained = document.querySelector('.drawer-contained');
        const openButtonContained = drawerContained.parentElement.nextElementSibling;
        const closeButtonContained = drawerContained.querySelector('awc-button[variant="primary"]');

        openButtonContained.addEventListener('click', () => (drawerContained.open = !drawerContained.open));
        closeButtonContained.addEventListener('click', () => drawerContained.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          'By default, drawers slide out of their [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport. To make a drawer slide out of a parent element, add the `contained` attribute to the drawer and apply `position: relative` to its parent.<br><br>Unlike normal drawers, contained drawers are not modal. This means they do not show an overlay, they do not trap focus, and they are not dismissible with [[Escape]]. This is intentional to allow users to interact with elements outside of the drawer.'
      }
    }
  }
};

export const CustomSize: Story = {
  name: 'Custom Size',
  render: () =>
    html`<awc-drawer label="Drawer" class="drawer-custom-size" style="--size: 50vw;">
        This drawer is always 50% of the viewport.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawerCustomSize = document.querySelector('.drawer-custom-size');
        const openButtonCustomSize = drawerCustomSize.nextElementSibling;
        const closeButtonCustomSize = drawerCustomSize.querySelector('awc-button[variant="primary"]');

        openButtonCustomSize.addEventListener('click', () => drawerCustomSize.show());
        closeButtonCustomSize.addEventListener('click', () => drawerCustomSize.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          "Use the `--size` custom property to set the drawer's size. This will be applied to the drawer's width or height depending on its `placement`."
      }
    }
  }
};

export const Scrolling: Story = {
  name: 'Scrolling',
  render: () =>
    html`<awc-drawer label="Drawer" class="drawer-scrolling">
        <div style="height: 150vh; border: dashed 2px var(--awc-color-neutral-200); padding: 0 1rem;">
          <p>Scroll down and give it a try! 👇</p>
        </div>
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawerScrolling = document.querySelector('.drawer-scrolling');
        const openButtonScrolling = drawerScrolling.nextElementSibling;
        const closeButtonScrolling = drawerScrolling.querySelector('awc-button[variant="primary"]');

        openButtonScrolling.addEventListener('click', () => drawerScrolling.show());
        closeButtonScrolling.addEventListener('click', () => drawerScrolling.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          "By design, a drawer's height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user."
      }
    }
  }
};

export const HeaderActions: Story = {
  name: 'Header Actions',
  render: () =>
    html`<awc-drawer label="Drawer" class="drawer-header-actions">
        <awc-icon-button class="new-window" slot="header-actions" name="box-arrow-up-right"></awc-icon-button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawerHeaderActions = document.querySelector('.drawer-header-actions');
        const openButtonHeaderActions = drawerHeaderActions.nextElementSibling;
        const closeButtonHeaderActions = drawerHeaderActions.querySelector('awc-button[variant="primary"]');
        const newWindowButton = drawerHeaderActions.querySelector('.new-window');

        openButtonHeaderActions.addEventListener('click', () => drawerHeaderActions.show());
        closeButtonHeaderActions.addEventListener('click', () => drawerHeaderActions.hide());
        newWindowButton.addEventListener('click', () => window.open(location.href));
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          'The header shows a functional close button by default. You can use the `header-actions` slot to add additional [icon buttons](/docs/components-button-icon--docs) if needed.'
      }
    }
  }
};

export const PreventingDrawerFromClosing: Story = {
  name: 'Preventing the Drawer from Closing',
  render: () =>
    html`<awc-drawer label="Drawer" class="drawer-deny-close">
        This drawer will not close when you click on the overlay.
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawerPrevent = document.querySelector('.drawer-deny-close');
        const openButtonPrevent = drawerPrevent.nextElementSibling;
        const closeButtonPrevent = drawerPrevent.querySelector('awc-button[variant="primary"]');

        openButtonPrevent.addEventListener('click', () => drawerPrevent.show());
        closeButtonPrevent.addEventListener('click', () => drawerPrevent.hide());

        // Prevent the drawer from closing when the user clicks on the overlay
        drawerPrevent.addEventListener('awc-request-close', event => {
          if (event.detail.source === 'overlay') {
            event.preventDefault();
          }
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          "By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the [[Escape]] key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.<br><br>To keep the drawer open in such cases, you can cancel the `awc-request-close` event. When canceled, the drawer will remain open and pulse briefly to draw the user's attention to it.<br><br>You can use `event.detail.source` to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or [[Escape]] to dismiss it."
      }
    }
  }
};

export const CustomizingInitialFocus: Story = {
  name: 'Customizing Initial Focus',
  render: () =>
    html`<awc-drawer label="Drawer" class="drawer-focus">
        <awc-input autofocus placeholder="I will have focus when the drawer is opened"></awc-input>
        <awc-button slot="footer" variant="primary">Close</awc-button>
      </awc-drawer>

      <awc-button>Open Drawer</awc-button>

      <script>
        const drawerFocus = document.querySelector('.drawer-focus');
        const input = drawerFocus.querySelector('awc-input');
        const openButtonFocus = drawerFocus.nextElementSibling;
        const closeButtonFocus = drawerFocus.querySelector('awc-button[variant="primary"]');

        openButtonFocus.addEventListener('click', () => drawerFocus.show());
        closeButtonFocus.addEventListener('click', () => drawerFocus.hide());
      </script>`,
  parameters: {
    docs: {
      description: {
        story:
          "By default, the drawer's panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the drawer. If you want a different element to have focus, add the `autofocus` attribute to it as shown below.<br><br> >❗ You can further customize initial focus behavior by canceling the `awc-initial-focus` event and setting focus yourself inside the event handler."
      }
    }
  }
};
