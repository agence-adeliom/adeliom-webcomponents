import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCBreadcrumb from './breadcrumb.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-breadcrumb');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Breadcrumb',
  component: 'awc-breadcrumb',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
    docs: {
      description: {
        component: `Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.`
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCBreadcrumb & typeof args>;

export default meta;

type Story = StoryObj<AWCBreadcrumb & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () =>
    html`<awc-breadcrumb>
      <awc-breadcrumb-item>Catalog</awc-breadcrumb-item>
      <awc-breadcrumb-item>Clothing</awc-breadcrumb-item>
      <awc-breadcrumb-item>Women's</awc-breadcrumb-item>
      <awc-breadcrumb-item>Shirts &amp; Tops</awc-breadcrumb-item>
    </awc-breadcrumb>`
};

export const BreadcrumbLinks: Story = {
  name: 'Breadcrumb Links',
  render: () =>
    html`<awc-breadcrumb>
      <awc-breadcrumb-item href="https://example.com/home">Homepage</awc-breadcrumb-item>
      <awc-breadcrumb-item href="https://example.com/home/services">Our Services</awc-breadcrumb-item>
      <awc-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</awc-breadcrumb-item>
      <awc-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</awc-breadcrumb-item>
    </awc-breadcrumb>`,
  parameters: {
    docs: {
      description: {
        story: `By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an \`href\` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.`
      }
    }
  }
};

export const CustomSeparators: Story = {
  name: 'Custom Separators',
  render: () =>
    html`<awc-breadcrumb>
        <awc-icon name="dot" slot="separator"></awc-icon>
        <awc-breadcrumb-item>First</awc-breadcrumb-item>
        <awc-breadcrumb-item>Second</awc-breadcrumb-item>
        <awc-breadcrumb-item>Third</awc-breadcrumb-item>
      </awc-breadcrumb>

      <br />

      <awc-breadcrumb>
        <awc-icon name="arrow-right" slot="separator"></awc-icon>
        <awc-breadcrumb-item>First</awc-breadcrumb-item>
        <awc-breadcrumb-item>Second</awc-breadcrumb-item>
        <awc-breadcrumb-item>Third</awc-breadcrumb-item>
      </awc-breadcrumb>

      <br />

      <awc-breadcrumb>
        <span slot="separator">/</span>
        <awc-breadcrumb-item>First</awc-breadcrumb-item>
        <awc-breadcrumb-item>Second</awc-breadcrumb-item>
        <awc-breadcrumb-item>Third</awc-breadcrumb-item>
      </awc-breadcrumb>`,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.'
      }
    }
  }
};

export const Prefixes: Story = {
  name: 'Prefixes',
  render: () =>
    html`<awc-breadcrumb>
      <awc-breadcrumb-item>
        <awc-icon slot="prefix" name="house"></awc-icon>
        Home
      </awc-breadcrumb-item>
      <awc-breadcrumb-item>Articles</awc-breadcrumb-item>
      <awc-breadcrumb-item>Traveling</awc-breadcrumb-item>
    </awc-breadcrumb>`,
  parameters: {
    docs: {
      description: {
        story: 'Use the `prefix` slot to add content before any breadcrumb item.'
      }
    }
  }
};

export const Suffixes: Story = {
  name: 'Suffixes',
  render: () =>
    html`<awc-breadcrumb>
      <awc-breadcrumb-item>Documents</awc-breadcrumb-item>
      <awc-breadcrumb-item>Policies</awc-breadcrumb-item>
      <awc-breadcrumb-item>
        Security
        <awc-icon slot="suffix" name="shield-lock"></awc-icon>
      </awc-breadcrumb-item>
    </awc-breadcrumb>`,
  parameters: {
    docs: {
      description: {
        story: 'Use the `suffix` slot to add content after any breadcrumb item.'
      }
    }
  }
};

export const WithDropdowns: Story = {
  name: 'With Dropdowns',
  render: () =>
    html`<awc-breadcrumb>
      <awc-breadcrumb-item>Homepage</awc-breadcrumb-item>
      <awc-breadcrumb-item>Our Services</awc-breadcrumb-item>
      <awc-breadcrumb-item>Digital Media</awc-breadcrumb-item>
      <awc-breadcrumb-item>
        Web Design
        <awc-dropdown slot="suffix">
          <awc-button slot="trigger" size="small" circle>
            <awc-icon label="More options" name="three-dots"></awc-icon>
          </awc-button>
          <awc-menu>
            <awc-menu-item type="checkbox" checked>Web Design</awc-menu-item>
            <awc-menu-item type="checkbox">Web Development</awc-menu-item>
            <awc-menu-item type="checkbox">Marketing</awc-menu-item>
          </awc-menu>
        </awc-dropdown>
      </awc-breadcrumb-item>
    </awc-breadcrumb>`,
  parameters: {
    docs: {
      description: {
        story: `Dropdown menus can be placed in a prefix or suffix slot to provide additional options.`
      }
    }
  }
};
