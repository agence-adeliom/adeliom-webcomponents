import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCQrCode from './qr-code';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-qr-code');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/QR Code',
  component: 'awc-qr-code',
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
        component: `QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.`
      }
    }
  },
  render: context => template(context)
} satisfies Meta<AWCQrCode & typeof args>;

export default meta;

type Story = StoryObj<AWCQrCode & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    value: 'https://awc.a-dev.cloud/',
    label: 'Scan this code to visit Adeliom WebComponents on the web!'
  }
};

export const Colors: Story = {
  name: 'Colors',
  args: {
    ...Primary.args,
    fill: 'deeppink',
    background: 'white'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`fill\` and \`background\` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.`
      }
    }
  }
};

export const Size: Story = {
  name: 'Size',
  args: {
    ...Primary.args,
    size: '64'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`size\` attribute to change the size of the QR code.`
      }
    }
  }
};

export const Radius: Story = {
  name: 'Radius',
  args: {
    ...Primary.args,
    radius: '0.5'
  },
  parameters: {
    docs: {
      description: {
        story: `Create a rounded effect with the \`radius\` attribute.`
      }
    }
  }
};

export const ErrorCorrection: Story = {
  name: 'Error Correction',
  render: () => html`
    ${template({ ...Primary.args, errorCorrection: 'L' })} &nbsp;&nbsp;
    ${template({ ...Primary.args, errorCorrection: 'M' })} &nbsp;&nbsp;
    ${template({ ...Primary.args, errorCorrection: 'Q' })} &nbsp;&nbsp;
    ${template({ ...Primary.args, errorCorrection: 'H' })}
  `,
  parameters: {
    docs: {
      description: {
        story: `QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the \`error-correction\` attribute. This example generates four codes with the same value using different error correction levels.`
      }
    }
  }
};
