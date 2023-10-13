import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCButton from './button.ts';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-button');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: 'awc-button',
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
} satisfies Meta<AWCButton & typeof args>;

export default meta;

type Story = StoryObj<AWCButton & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    'default-slot': 'Button'
  }
};

export const Variants: Story = {
  name: 'Variants',
  args: {
    ...Primary.args
  },
  render: context => html`
    ${template({...context, variant: 'default' })}
    ${template({...context, variant: 'primary' })}
    ${template({...context, variant: 'secondary' })}
    ${template({...context, variant: 'tertiary' })}
    ${template({...context, variant: 'success' })}
    ${template({...context, variant: 'neutral' })}
    ${template({...context, variant: 'warning' })}
    ${template({...context, variant: 'danger' })}
    ${template({...context, variant: 'ghost' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Set the `variant` attribute to change the button's variant."
      }
    }
  }
};

export const Sizes: Story = {
  name: 'Sizes',
  args: {
    ...Primary.args
  },
  render: context => html`
    ${template({...context, size: 'small' })}
    ${template({...context, size: 'medium' })}
    ${template({...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Set the `size` attribute to change the button's variant."
      }
    }
  }
};

export const OutlineButtons: Story = {
  name: 'Outline Buttons',
  args: {
    ...Primary.args,
    outline: true
  },
  render: context => html`
    ${template({...context, variant: 'default' })}
    ${template({...context, variant: 'primary' })}
    ${template({...context, variant: 'secondary' })}
    ${template({...context, variant: 'tertiary' })}
    ${template({...context, variant: 'success' })}
    ${template({...context, variant: 'neutral' })}
    ${template({...context, variant: 'warning' })}
    ${template({...context, variant: 'danger' })}
    ${template({...context, variant: 'ghost' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `outline` attribute to draw outlined buttons with transparent backgrounds."
      }
    }
  }
};

export const PillButtons: Story = {
  name: 'Pill Buttons',
  args: {
    ...Primary.args,
    pill: true
  },
  render: context => html`
    ${template({...context, size: 'small' })}
    ${template({...context, size: 'medium' })}
    ${template({...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `pill` attribute to give buttons rounded edges."
      }
    }
  }
};

export const CircleButtons: Story = {
  name: 'Circle Buttons',
  render: () => html`<awc-button variant="default" size="small" circle>
  <awc-icon name="gear" label="Settings"></awc-icon>
</awc-button>

<awc-button variant="default" size="medium" circle>
  <awc-icon name="gear" label="Settings"></awc-icon>
</awc-button>

<awc-button variant="default" size="large" circle>
  <awc-icon name="gear" label="Settings"></awc-icon>
</awc-button>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<awc-icon>` in the default slot."
      }
    }
  }
};

export const TextButtons: Story = {
  name: 'Text Buttons',
  args: {
    ...Primary.args,
    variant: 'text'
  },
  render: context => html`
    ${template({...context, size: 'small' })}
    ${template({...context, size: 'medium' })}
    ${template({...context, size: 'large' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders."
      }
    }
  }
};

export const LinkButtons: Story = {
  name: 'Link Buttons',
  render: () => html`<awc-button href="https://example.com/">Link</awc-button>
<awc-button href="https://example.com/" target="_blank">New Window</awc-button>
<awc-button href="/assets/images/wordmark.svg" download="wordmark.svg">Download</awc-button>
<awc-button href="https://example.com/" disabled>Disabled</awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `It's often helpful to have a button that works like a link. This is possible by setting the \`href\` attribute, which will make the component render an \`<a>\` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the \`target\` and \`download\` attributes.

> When a \`target\` is set, the link will receive \`rel="noreferrer noopener"\` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).`
      }
    }
  }
};

export const CustomWidth: Story = {
  name: 'Setting a Custom Width',
  render: () => html`<awc-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</awc-button>
<awc-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</awc-button>
<awc-button variant="default" size="large" style="width: 100%;">Large</awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `As expected, buttons can be given a custom width by setting the \`width\` attribute. This is useful for making buttons span the full width of their container on smaller screens.`
      }
    }
  }
};

export const PrefixSuffix: Story = {
  name: 'Prefix and Suffix Icons',
  render: () => html`<awc-button variant="default" size="small">
  <awc-icon slot="prefix" name="gear"></awc-icon>
  Settings
</awc-button>

<awc-button variant="default" size="small">
  <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
  Refresh
</awc-button>

<awc-button variant="default" size="small">
  <awc-icon slot="prefix" name="link-45deg"></awc-icon>
  <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
  Open
</awc-button>

<br /><br />

<awc-button variant="default">
  <awc-icon slot="prefix" name="gear"></awc-icon>
  Settings
</awc-button>

<awc-button variant="default">
  <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
  Refresh
</awc-button>

<awc-button variant="default">
  <awc-icon slot="prefix" name="link-45deg"></awc-icon>
  <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
  Open
</awc-button>

<br /><br />

<awc-button variant="default" size="large">
  <awc-icon slot="prefix" name="gear"></awc-icon>
  Settings
</awc-button>

<awc-button variant="default" size="large">
  <awc-icon slot="suffix" name="arrow-counterclockwise"></awc-icon>
  Refresh
</awc-button>

<awc-button variant="default" size="large">
  <awc-icon slot="prefix" name="link-45deg"></awc-icon>
  <awc-icon slot="suffix" name="box-arrow-up-right"></awc-icon>
  Open
</awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`prefix\` and \`suffix\` slots to add icons.`
      }
    }
  }
};

export const Caret: Story = {
  name: 'Caret',
  render: () => html`<awc-button size="small" caret>Small</awc-button>
<awc-button size="medium" caret>Medium</awc-button>
<awc-button size="large" caret>Large</awc-button>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`caret\` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.`
      }
    }
  }
};

export const Loading: Story = {
  name: 'Loading',
  args: {
    ...Primary.args,
    loading: true
  },
  render: context => html`
    ${template({...context, variant: 'default' })}
    ${template({...context, variant: 'primary' })}
    ${template({...context, variant: 'secondary' })}
    ${template({...context, variant: 'tertiary' })}
    ${template({...context, variant: 'success' })}
    ${template({...context, variant: 'neutral' })}
    ${template({...context, variant: 'warning' })}
    ${template({...context, variant: 'danger' })}
    ${template({...context, variant: 'ghost' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed."
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    ...Primary.args,
    disabled: true
  },
  render: context => html`
    ${template({...context, variant: 'default' })}
    ${template({...context, variant: 'primary' })}
    ${template({...context, variant: 'secondary' })}
    ${template({...context, variant: 'tertiary' })}
    ${template({...context, variant: 'success' })}
    ${template({...context, variant: 'neutral' })}
    ${template({...context, variant: 'warning' })}
    ${template({...context, variant: 'danger' })}
    ${template({...context, variant: 'ghost' })}
  `,
  parameters: {
    docs: {
      description: {
        story: "Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed."
      }
    }
  }
};

export const Styling: Story = {
  name: 'Styling Buttons',
  render: () => html`<awc-button class="pink">Pink Button</awc-button>

<style>
  awc-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --awc-input-height-medium: 48px;
    --awc-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--awc-transition-medium) transform ease, var(--awc-transition-medium) border ease;
  }

  awc-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  awc-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  awc-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>`,
  parameters: {
    docs: {
      description: {
        story: "This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `awc-button[variant=\"primary\"]`)."
      }
    }
  }
};
