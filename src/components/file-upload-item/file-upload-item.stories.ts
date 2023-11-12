import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCFileUploadItem from './file-upload-item.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-file-upload-item');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/File Upload/Item',
  component: 'awc-file-upload-item',
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
        component: ``
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-shadow
  render: context => template(context)
} satisfies Meta<AWCFileUploadItem & typeof args>;
export default meta;

type Story = StoryObj<AWCFileUploadItem & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`<awc-file-upload-item>
    filename_lorem_ipsum.jpg
    <awc-icon name="file-earmark" slot="image"></awc-icon>
  </awc-file-upload-item>`,
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  args: {}
};

export const Closable: Story = {
  name: 'Closable',
  render: () => html`<awc-file-upload-item closable>
    filename_lorem_ipsum.jpg
    <awc-icon name="file-earmark" slot="image"></awc-icon>
  </awc-file-upload-item>`,
  parameters: {
    docs: {
      description: {
        story: `Add the \`closable\` attribute to show a close button that will hide the element.`
      }
    }
  },
  args: {}
};

export const Filesize: Story = {
  name: 'Filesize',
  render: () => html`<awc-file-upload-item size="120000">
    filename_lorem_ipsum.jpg
    <awc-icon name="file-earmark" slot="image"></awc-icon>
  </awc-file-upload-item>`,
  parameters: {
    docs: {
      description: {
        story: `Set the \`size\` attribute to display the filesize of the item. The [Format Byte Component](/?path=/docs/components-format-bytes--docs) is used to convert the given bytes to a human-readable format.`
      }
    }
  },
  args: {}
};

export const Custom: Story = {
  name: 'Custom close button',
  render: () => html`<awc-file-upload-item closable>
    filename_lorem_ipsum.jpg
    <awc-icon name="file-earmark" slot="image"></awc-icon>
    <awc-icon-button name="trash" slot="close-button" class="icon-button-color"></awc-icon-button>
  </awc-file-upload-item>
  <style>
    .icon-button-color::part(base) {
      color: var(--awc-color-danger-600);
    }

    .icon-button-color::part(base):hover,
    .icon-button-color::part(base):focus {
      color: var(--awc-color-danger-800);
    }

    .icon-button-color::part(base):active {
      color: var(--awc-color-danger-800);
    }
  </style>`,
  parameters: {
    docs: {
      description: {
        story: `The close button can be customized by using the \`close-button\` slot and by styling the \`base\` part.`
      }
    }
  },
  args: {}
};

export const Loading: Story = {
  name: 'Loading',
  render: () => html`<awc-file-upload-item loading closable size="120000">
    filename_lorem_ipsum.jpg
    <awc-icon name="file-earmark" slot="image"></awc-icon>
  </awc-file-upload-item>`,
  parameters: {
    docs: {
      description: {
        story: `Show a loading bar by setting the \`loading\` attribute. Per default this will display a loading bar in an indeterminate state. The height of the element will be determined by whether the \`size\` attributes is set. This will ensure that the height of the item does not change when the file has finished loading.`
      }
    }
  },
  args: {}
};

export const LoadingProgress: Story = {
  name: 'Loading progress',
  render: () => html`<awc-file-upload-item loading progress="40" closable size="120000" class="file-item">
    filename_lorem_ipsum.jpg
    <awc-icon name="file-earmark" slot="image"></awc-icon>
  </awc-file-upload-item>

  <div class="mt-6">
    <awc-button circle class="subtract-button"><awc-icon name="dash" label="Decrease"></awc-icon></awc-button>
    <awc-button circle class="add-button"><awc-icon name="plus" label="Increase"></awc-icon></awc-button>
  </div>
  <script>
    const fileItem = document.querySelector('.file-item');
    const subtractButton = document.querySelector('.subtract-button');
    const addButton = document.querySelector('.add-button');

    addButton.addEventListener('click', () => {
      const value = Math.min(100, fileItem.progress + 10);
      fileItem.progress = value;

      if (fileItem.progress === 100) {
        fileItem.loading = false;
      }
    });

    subtractButton.addEventListener('click', () => {
      const value = Math.max(0, fileItem.progress - 10);
      fileItem.progress = value;

      if (fileItem.progress < 100) {
        fileItem.loading = true;
      }
    });
  </script>
  `,
  parameters: {
    docs: {
      description: {
        story: `Set the \`progress\` attribute to show the loading progress between \`0\` and \`100\`.`
      }
    }
  },
  args: {}
};

export const LoadingLabel: Story = {
  name: 'Loading label',
  render: () => html`<awc-file-upload-item loading progress="20" label="Uploading File" closable>
    filename_lorem_ipsum.jpg
    <awc-icon name="file-earmark" slot="image"></awc-icon>
  </awc-file-upload-item>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`label\` attribute to label the loading bar and tell assistive devices how to announce it.`
      }
    }
  },
  args: {}
};

export const Error: Story = {
  name: 'Error',
  render: () => html`<awc-file-upload-item error closable>
    filename_lorem_ipsum.jpg
    <div slot="error">File size exceeds 5MB limit</div>
    <awc-icon name="exclamation-triangle" slot="image"></awc-icon>
  </awc-file-upload-item>`,
  parameters: {
    docs: {
      description: {
        story: `Set the \`error\` attribute to change the color of the element.`
      }
    }
  },
  args: {}
};
