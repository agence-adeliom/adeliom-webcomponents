import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCCard from './card.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-card');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Card',
  component: 'awc-card',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  render: context => template(context)
} satisfies Meta<AWCCard & typeof args>;

export default meta;

type Story = StoryObj<AWCCard & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`
    <awc-card class="card-overview" bordered>
      <img
        slot="image"
        src="${'https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'}"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />

      <strong>Mittens</strong><br />
      This kitten is as cute as he is playful. Bring him home today!<br />
      <small>6 weeks old</small>

      <div slot="footer">
        <awc-button variant="primary" pill>More Info</awc-button>
        <awc-rating></awc-rating>
      </div>
    </awc-card>

    <style>
      .card-overview {
        max-width: 300px;
      }

      .card-overview small {
        color: var(--awc-color-neutral-500);
      }

      .card-overview [slot='footer'] {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    </style>
  `
};

export const BasicCard: Story = {
  name: 'Basic Card',
  render: () => html`
    <awc-card class="card-basic" bordered>
      This is just a basic card. No image, no header, and no footer. Just your content.
    </awc-card>

    <style>
      .card-basic {
        max-width: 300px;
      }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story: "Basic cards aren't very exciting, but they can display any content you want them to."
      }
    }
  }
};

export const CardWithHeader: Story = {
  name: 'Card with Header',
  render: () => html`
    <awc-card class="card-header" bordered>
      <div slot="header">
        Header Title
        <awc-icon-button name="gear" label="Settings"></awc-icon-button>
      </div>

      This card has a header. You can put all sorts of things in it!
    </awc-card>

    <style>
      .card-header {
        max-width: 300px;
      }

      .card-header [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .card-header h3 {
        margin: 0;
      }

      .card-header awc-icon-button {
        font-size: var(--awc-font-size-medium);
      }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Headers can be used to display titles and more.'
      }
    }
  }
};

export const CardWithFooter: Story = {
  name: 'Card with Footer',
  render: () => html`
    <awc-card class="card-footer" bordered>
      This card has a footer. You can put all sorts of things in it!

      <div slot="footer">
        <awc-rating></awc-rating>
        <awc-button variant="primary">Preview</awc-button>
      </div>
    </awc-card>

    <style>
      .card-footer {
        max-width: 300px;
      }

      .card-footer [slot='footer'] {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Footers can be used to display actions, summaries, or other relevant content.'
      }
    }
  }
};

export const Images: Story = {
  name: 'Images',
  render: () => html`
    <awc-card class="card-image" bordered>
      <img
        slot="image"
        src="${'https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'}"
        alt="A kitten walks towards camera on top of pallet."
      />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </awc-card>

    <style>
      .card-image {
        max-width: 300px;
      }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `pill` attribute to give buttons rounded edges.'
      }
    }
  }
};

export const LinkCards: Story = {
  name: 'Link Cards',
  render: () => html`
    <awc-card class="card-image" href="https://example.com/" bordered>
      <img
        slot="image"
        src="${'https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'}"
        alt="A kitten walks towards camera on top of pallet."
      />
      <strong>Open here</strong><br />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </awc-card>

    <awc-card class="card-image" href="https://example.com/" target="_blank" bordered>
      <img
        slot="image"
        src="${'https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'}"
        alt="A kitten walks towards camera on top of pallet."
      />
      <strong>Open in new window</strong><br />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </awc-card>

    <style>
      .card-image {
        max-width: 300px;
      }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes."
      }
    }
  }
};
