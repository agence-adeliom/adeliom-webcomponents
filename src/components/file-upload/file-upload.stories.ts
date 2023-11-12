import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCFileUpload from './file-upload.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-file-upload');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/File Upload',
  component: 'awc-file-upload',
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
} satisfies Meta<AWCFileUpload & typeof args>;
export default meta;

type Story = StoryObj<AWCFileUpload & typeof args>;

export const Primary: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  args: {
    multiple: true,
    'help-text': "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: `Set the \`disabled\` attribute to disable the element.`
      }
    }
  },
  args: {
    disabled: true,
    multiple: true,
  }
};

export const WithoutButton: Story = {
  name: 'Without Button',
  parameters: {
    docs: {
      description: {
        story: `Set the \`no-button\` attribute to hide the button in the dropzone.`
      }
    }
  },
  args: {
    'no-button': true,
    multiple: true,
  }
};

export const ButtonOnly: Story = {
  name: 'Button only',
  parameters: {
    docs: {
      description: {
        story: `Set the \`button-only\` attribute to show only a file input button instead of a dropzone.`
      }
    }
  },
  args: {
    'button-only': true,
    multiple: true,
  }
};

export const HelpText: Story = {
  name: 'Help Text',
  parameters: {
    docs: {
      description: {
        story: `Set the \`help-text\` attribute to display a help text.`
      }
    }
  },
  args: {
    'help-text': 'The maximum file size is 3MB.',
    'max-file-size': 3 * 1024 * 1024,
    multiple: true,
  }
};



export const CustomizingLabels: Story = {
  name: 'Customizing Labels',
  parameters: {
    docs: {
      description: {
        story: `Set the \`label\` and \`button-label\` attribute to override the default labels.`
      }
    }
  },
  args: {
    multiple: true,
    label: "Please combine all documents into one PDF file.",
    'button-label': "Upload your CV or Resume"
  }
};

export const CustomizingButton: Story = {
  name: 'Customizing Button',
  parameters: {
    docs: {
      description: {
        story: `Use the \`button\` slot to customize the button appearance.`
      }
    }
  },
  args: {
    multiple: true,
    'button-slot': '<awc-button variant="primary" slot="button"> Custom Button </awc-button>'
  }
};

export const CustomizingImage: Story = {
  name: 'Customizing Image',
  parameters: {
    docs: {
      description: {
        story: `Use the \`image\` slot to customize the appearance of the image within the dropzone.`
      }
    }
  },
  args: {
    multiple: true,
    'image-slot': '<awc-qr-code slot="image" value="https://example.com/"></awc-qr-code>'
  }
};

export const CustomizingContent: Story = {
  name: 'Customizing Content',
  parameters: {
    docs: {
      description: {
        story: `Use the \`content\` slot to customize the appearance of the dropzone.`
      }
    }
  },
  render: () => html`<awc-file-upload multiple>
    <awc-card slot="content" bordered class="w-full text-center">
      This card is a dropzone. You can drag all sorts of things in it!
    </awc-card>
  </awc-file-upload>`
};

export const NoFileList: Story = {
  name: 'No File List',
  parameters: {
    docs: {
      description: {
        story: `Set the \`no-file-list\` attribute to hide the file list.`
      }
    }
  },
  args: {
    'no-file-list': true,
  }
};

export const MaximumFileSize: Story = {
  name: 'Maximum File Size',
  parameters: {
    docs: {
      description: {
        story: `Set the \`max-file-size\` attribute to set a maximum file size limit. The user will receive a error, when the selected file is too large.`
      }
    }
  },
  args: {
    'max-file-size': 100,
  }
};

export const MaximumNumberFiles: Story = {
  name: 'Maximum Number of Files',
  parameters: {
    docs: {
      description: {
        story: `Set the \`max-files\` attribute to limit the number of files that can be added. Only works together with the \`multiple\` attribute.`
      }
    }
  },
  args: {
    multiple: true,
    'max-files': 2,
  }
};

export const AcceptedFileTypes: Story = {
  name: 'Accepted File Types',
  parameters: {
    docs: {
      description: {
        story: `Set the \`accept\` attribute to set the accepted MIME-Type of the files. This attribute is consistent with the native file input. Visit the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept) for more information.`
      }
    }
  },
  args: {
    accept: "image/*",
  }
};

export const FormData: Story = {
  name: 'Form Usage with FormData',
  parameters: {
    docs: {
      description: {
        story: `The FileUpload component can be used inside a form as a replacement for \`<input type="file">\`. The files can be accessed using FormData. See [Form Control documentation](/?path=/docs/getting-started-form-controls--docs) for more details.`
      }
    }
  },
  render: () => html`<form class="file-upload">
    <awc-file-upload name="awc-file-upload" multiple></awc-file-upload>
    <div class="mt-4">
      <awc-button type="reset" variant="default">Reset</awc-button>
      <awc-button type="submit" variant="primary">Submit</awc-button>
    </div>
  </form>

  <script type="module">
    document.querySelector('.file-upload').addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(event.target);
      console.log(formData.getAll('awc-file-upload'));
    });
  </script>`
};

export const JSON: Story = {
  name: 'Form Usage with JSON',
  parameters: {
    docs: {
      description: {
        story: `The FileUpload component can be used inside a form as a replacement for \`<input type="file">\`. The files can be accessed using JSON. See [Form Control documentation](/?path=/docs/getting-started-form-controls--docs) for more details.`
      }
    }
  },
  render: () => html`<form class="file-upload">
    <awc-file-upload name="awc-file-upload" multiple></awc-file-upload>
    <div class="mt-4">
      <awc-button type="reset" variant="default">Reset</awc-button>
      <awc-button type="submit" variant="primary">Submit</awc-button>
    </div>
  </form>

  <script type="module">
    import { serialize } from 'https://cdn.jsdelivr.net/npm/@agence-adeliom/awc/dist/utilities/form.js';
    document.querySelector('.file-upload').addEventListener('submit', event => {
      event.preventDefault();
      const data = serialize(event.target);
      console.log(data);
    });
  </script>`
};

export const UploadFiles: Story = {
  name: 'Upload Files',
  parameters: {
    docs: {
      description: {
        story: `To upload a file, listen to the \`awc-change\` event and handle the received file. This example uses XMLHttpRequest, but the same could be achieved with axios or the fetch API.`
      }
    }
  },
  render: () => html`
    <awc-file-upload class="awc-file-upload-xmlhttprequest" multiple></awc-file-upload>

    <script type="module">
      document.querySelector('.awc-file-upload-xmlhttprequest').addEventListener('awc-change', event => {
        event.preventDefault();
        const fileInfo = event.detail;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://httpbin.org/post');
        xhr.setRequestHeader('Content-Type', fileInfo.file.type);
        xhr.send(fileInfo.file);
      });
    </script>`
};

export const UploadFilesLoading: Story = {
  name: 'Upload Files and indicate loading',
  parameters: {
    docs: {
      description: {
        story: `Set the \`loading\` attribute to \`true\` on the FileInfo object to add a loading indicator to the FileUploadItem.`
      }
    }
  },
  render: () => html`
    <awc-file-upload class="awc-file-upload-xmlhttprequest-loading" multiple></awc-file-upload>

    <script type="module">
      document.querySelector('.awc-file-upload-xmlhttprequest-loading').addEventListener('awc-change', async event => {
        event.preventDefault();
        const fileInfo = event.detail;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://httpbin.org/post');
        xhr.setRequestHeader('Content-Type', fileInfo.file.type);
        xhr.send(fileInfo.file);

        fileInfo.loading = true;

        setTimeout(() => {
          fileInfo.loading = false;
          event.target.requestUpdate();
        }, 3000);
      });
    </script>`
};

export const UploadFilesProgress: Story = {
  name: 'Upload Files and update progress',
  parameters: {
    docs: {
      description: {
        story: `The [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) provides an upload.onprogress callback that can be used to change the progress attribute on the FileInfo object.`
      }
    }
  },
  render: () => html`
    <awc-file-upload class="awc-file-upload-xmlhttprequest-progress" multiple></awc-file-upload>

    <script type="module">
      document.querySelector('.awc-file-upload-xmlhttprequest-progress').addEventListener('awc-change', async event => {
        event.preventDefault();
        const fileInfo = event.detail;
        const fileUpload = event.target;
        const xhr = new XMLHttpRequest();

        xhr.upload.onprogress = event => {
          if (event.lengthComputable) {
            console.log('progress: ', (event.loaded / event.total) * 100);
            fileInfo.progress = (event.loaded / event.total) * 100;
            fileUpload.requestUpdate();
          }
        };

        xhr.upload.onload = event => {
          console.log('complete: ', event);
          fileInfo.loading = false;
          fileUpload.requestUpdate();
        };

        xhr.open('POST', 'https://httpbin.org/post');
        var formData = new FormData();
        formData.append('file', fileInfo.file);
        xhr.send(formData);

        fileInfo.loading = true;
      });
    </script>`
};

export const UploadFilesErrors: Story = {
  name: 'Upload Files and handling Errors',
  parameters: {
    docs: {
      description: {
        story: `To handle errors in a [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) the upload.onerror callback can be used.`
      }
    }
  },
  render: () => html`
    <awc-file-upload class="awc-file-upload-xmlhttprequest-errors" multiple></awc-file-upload>

    <script type="module">
      document.querySelector('.awc-file-upload-xmlhttprequest-errors').addEventListener('awc-change', async event => {
        event.preventDefault();
        const fileInfo = event.detail;
        const fileUpload = event.target;
        const xhr = new XMLHttpRequest();

        xhr.upload.onerror = event => {
          console.error('error:', event);
          fileInfo.loading = false;
          fileInfo.error = 'Upload Failed';
          fileInfo.accepted = false;

          fileUpload.requestUpdate();
        };

        xhr.open('POST', 'https://example.com');
        xhr.setRequestHeader('Content-Type', fileInfo.file.type);
        xhr.send(fileInfo.file);

        fileInfo.loading = true;
      });
    </script>`
};
