import { getWcStorybookHelpers } from '../../../.storybook/wc-helper/index.js';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCRating from './rating.js';
const { events, args, argTypes, template } = getWcStorybookHelpers<AWCRating>('awc-rating');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Rating',
  component: 'awc-rating',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    },
    docs: {}
  },

  render: context => template(context)
} satisfies Meta<AWCRating>;

export default meta;

type Story = StoryObj<AWCRating & typeof args>;

export const Primary: Story = {
  name: 'Default',
  args: {
    label: 'Rating'
  }
};

export const Labels: Story = {
  name: 'Labels',
  args: {
    label: 'Rate this component'
  },
  parameters: {
    docs: {
      description: {
        story: `Ratings are commonly identified contextually, so labels aren't displayed. However, you should always provide one for assistive devices using the \`label\` attribute.`
      }
    }
  }
};

export const MaximumValue: Story = {
  name: 'Maximum Value',
  args: {
    label: 'Rating',
    max: 3
  },
  parameters: {
    docs: {
      description: {
        story: `Ratings are 0-5 by default. To change the maximum possible value, use the \`max\` attribute.`
      }
    }
  }
};

export const Precision: Story = {
  name: 'Precision',
  args: {
    label: 'Rating',
    value: 2.5,
    precision: 0.5
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`precision\` attribute to let users select fractional ratings.`
      }
    }
  }
};

export const SymbolSizes: Story = {
  name: 'Symbol Sizes',
  args: {
    label: 'Rating',
    '--symbol-size': '2rem'
  },
  parameters: {
    docs: {
      description: {
        story: `Set the \`--symbol-size\` custom property to adjust the size.`
      }
    }
  }
};

export const Readonly: Story = {
  name: 'Readonly',
  args: {
    label: 'Rating',
    readonly: true,
    value: 3
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`readonly\` attribute to display a rating that users can't change.`
      }
    }
  }
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'Rating',
    disabled: true,
    value: 3
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`disable\` attribute to disable the rating.`
      }
    }
  }
};

export const ShowValue: Story = {
  name: 'Show value',
  args: {
    label: 'Rating',
    value: 3,
    'show-rate': true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the \`show-rate\` attribute to display the rating value.`
      }
    }
  }
};

export const DetectingHover: Story = {
  name: 'Detecting Hover',
  render: () =>
    html`<div class="detect-hover">
        <awc-rating label="Rating"></awc-rating>
        <span></span>
      </div>

      <script>
        const rating_hover = document.querySelector('.detect-hover > awc-rating');
        const span = rating_hover.nextElementSibling;
        const terms = ['No rating', 'Terrible', 'Bad', 'OK', 'Good', 'Excellent'];

        rating.addEventListener('awc-hover', event => {
          span.textContent = terms[event.detail.value];

          // Clear feedback when hovering stops
          if (event.detail.phase === 'end') {
            span.textContent = '';
          }
        });
      </script>

      <style>
        .detect-hover span {
          position: relative;
          top: -4px;
          left: 8px;
          border-radius: var(--awc-border-radius-small);
          background: var(--awc-color-neutral-900);
          color: var(--awc-color-neutral-0);
          text-align: center;
          padding: 4px 6px;
        }

        .detect-hover span:empty {
          display: none;
        }
      </style>`,
  parameters: {
    docs: {
      description: {
        story: `Use the \`awc-hover\` event to detect when the user hovers over (or touch and drag) the rating. This lets you hook into values as the user interacts with the rating, but before they select a value.

The event has a payload with \`phase\` and \`value\` properties. The \`phase\` property tells when hovering starts, moves to a new value, and ends. The \`value\` property tells what the rating's value would be if the user were to commit to the hovered value.`
      }
    }
  }
};

export const CustomIcons: Story = {
  name: 'Custom Icons',
  render: () =>
    html`<awc-rating label="Rating" class="rating-hearts" style="--symbol-color-active: #ff4136;"></awc-rating>

      <script>
        const rating_hearts = document.querySelector('.rating-hearts');
        rating_hearts.getSymbol = () => '<awc-icon name="heart-fill"></awc-icon>';
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `You can provide custom icons by passing a function to the \`getSymbol\` property.`
      }
    }
  }
};

export const ValueIcons: Story = {
  name: 'Value-based Icons',
  render: () =>
    html` <awc-rating label="Rating" class="rating-emojis"></awc-rating>

      <script>
        const rating_emojis = document.querySelector('.rating-emojis');

        rating_emojis.getSymbol = value => {
          const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
          return \`<awc-icon name="\${icons[value - 1]}"></awc-icon>\`;
        };
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `You can also use the \`getSymbol\` property to render different icons based on value.`
      }
    }
  }
};
