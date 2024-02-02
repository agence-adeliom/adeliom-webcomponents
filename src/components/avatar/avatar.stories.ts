/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCAvatar from './avatar.js';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-avatar');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Avatar',
  component: 'awc-avatar',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCAvatar & typeof args>;

export default meta;

type Story = StoryObj<AWCAvatar & typeof args>;

export const Primary: Story = {
  name: 'Default avatar',
  args: {
    label: 'User avatar'
  }
};

export const Images: Story = {
  name: 'Images',
  render: () => html`
    ${template({
      image:
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      label: 'Avatar of a gray tabby kitten looking down'
    })}
    ${template({
      image:
        'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      label: 'Avatar of a white and grey kitten on grey textile',
      lazy: true
    })}
  `,
  parameters: {
    docs: {
      description: {
        story: `To use an image for the avatar, set the \`image\` and \`label\` attributes. This will take priority and be shown over initials and icons.
Avatar images can be lazily loaded by setting the \`loading\` attribute to \`lazy\`.`
      }
    }
  }
};

export const Initials: Story = {
  name: 'Initials',
  args: {
    initials: 'AC',
    label: 'Avatar with initials: AC'
  },
  parameters: {
    docs: {
      description: {
        story: `When you don't have an image to use, you can set the \`initials\` attribute to show something more personalized than an icon.`
      }
    }
  }
};

export const CustomIcons: Story = {
  name: 'Custom Icons',
  render: () => html`
    ${template({
      'icon-slot': `<awc-icon slot="icon" name="image"></awc-icon>`
    })}
    <awc-avatar label="Avatar with an image icon">
      <awc-icon slot="icon" name="image"></awc-icon>
    </awc-avatar>

    <awc-avatar label="Avatar with an archive icon">
      <awc-icon slot="icon" name="archive"></awc-icon>
    </awc-avatar>

    <awc-avatar label="Avatar with a briefcase icon">
      <awc-icon slot="icon" name="briefcase"></awc-icon>
    </awc-avatar>
  `,
  parameters: {
    docs: {
      description: {
        story: `When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the \`icon\` slot.`
      }
    }
  }
};

export const Shapes: Story = {
  name: 'Shapes',
  render: () => html`
    <awc-avatar shape="square" label="Square avatar"></awc-avatar>
    <awc-avatar shape="rounded" label="Rounded avatar"></awc-avatar>
    <awc-avatar shape="circle" label="Circle avatar"></awc-avatar>
  `,
  parameters: {
    docs: {
      description: {
        story: `Avatars can be shaped using the \`shape\` attribute.`
      }
    }
  }
};

export const AvatarGroups: Story = {
  name: 'Avatar Groups',
  render: () =>
    html`<div class="avatar-group">
        <awc-avatar
          image="${'https://images.unsplash.com/photo-1490150028299-bf57d78394e0?&auto=format&fit=crop&w=256&h=256&crop=top&q=80'}"
          label="Avatar 1 of 4"
        ></awc-avatar>
        <awc-avatar
          image="${'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?&auto=format&fit=crop&w=256&h=256&crop=top&q=80'}"
          label="Avatar 2 of 4"
        ></awc-avatar>
        <awc-avatar
          image="${'https://images.unsplash.com/photo-1456439663599-95b042d50252?&auto=format&fit=crop&w=256&h=256&crop=top&q=80'}"
          label="Avatar 3 of 4"
        ></awc-avatar>
        <awc-avatar
          image="${'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?&auto=format&fit=crop&w=256&h=256&crop=top&q=80'}"
          label="Avatar 4 of 4"
        ></awc-avatar>
      </div>

      <style>
        .avatar-group awc-avatar:not(:first-of-type) {
          margin-left: -1rem;
        }

        .avatar-group awc-avatar::part(base) {
          border: solid 2px var(--awc-color-neutral-0);
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `Avatars can be shaped using the \`shape\` attribute.`
      }
    }
  }
};
