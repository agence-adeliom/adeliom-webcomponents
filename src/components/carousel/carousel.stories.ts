import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCCarousel from './carousel.ts';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-carousel');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Carousel',
  component: 'awc-carousel',
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
} satisfies Meta<AWCCarousel & typeof args>;

export default meta;

type Story = StoryObj<AWCCarousel & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`
    <awc-carousel pagination navigation mouse-dragging loop>
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>
  `
};

export const Pagination: Story = {
  name: 'Pagination',
  render: () => html`
    <awc-carousel pagination>
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `pagination` attribute to show the total number of slides and the current slide as a set of interactive dots.'
      }
    }
  }
};

export const Navigation: Story = {
  name: 'Navigation',
  render: () => html`
    <awc-carousel navigation>
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the `navigation` attribute to show previous and next buttons.'
      }
    }
  }
};

export const Looping: Story = {
  name: 'Looping',
  render: () => html`
    <awc-carousel loop navigation pagination>
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "By default, the carousel will not advanced beyond the first and last slides. You can change this behavior and force the carousel to 'wrap' with the `loop` attribute."
      }
    }
  }
};

export const Autoplay: Story = {
  name: 'Autoplay',
  render: () => html`
    <awc-carousel autoplay loop pagination>
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'The carousel will automatically advance when the `autoplay` attribute is used. To change how long a slide is shown before advancing, set `autoplay-interval` to the desired number of milliseconds. For best results, use the `loop` attribute when autoplay is enabled. Note that autoplay will pause while the user interacts with the carousel.'
      }
    }
  }
};

export const MouseDragging: Story = {
  name: 'Mouse Dragging',
  render: () => html`
    <div class="mouse-dragging">
      <awc-carousel class="mb-12" pagination>
        <awc-carousel-item>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </awc-carousel-item>
        <awc-carousel-item>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </awc-carousel-item>
        <awc-carousel-item>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </awc-carousel-item>
        <awc-carousel-item>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </awc-carousel-item>
        <awc-carousel-item>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </awc-carousel-item>
      </awc-carousel>

      <awc-divider></awc-divider>

      <awc-switch checked>Enable mouse dragging</awc-switch>
    </div>
    <script>
        const container = document.querySelector('.mouse-dragging');
        const carousel = container.querySelector('awc-carousel');
        const toggle = container.querySelector('awc-switch');

        toggle.addEventListener('awc-change', () => {
            carousel.toggleAttribute('mouse-dragging', toggle.checked);
        });
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "The carousel uses [scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) to position slides at various snap positions. This allows users to scroll through the slides very naturally, especially on touch devices. Unfortunately, desktop users won't be able to click and drag with a mouse, which can feel unnatural. Adding the `mouse-dragging` attribute can help with this.<br><br>This example is best demonstrated using a mouse. Try clicking and dragging the slide to move it. Then toggle the switch and try again."
      }
    }
  }
};

export const MultipleSlidesPerView: Story = {
  name: 'Multiple Slides Per View',
  render: () => html`
    <awc-carousel navigation pagination slides-per-view="2" slides-per-group="2">
      <awc-carousel-item style="background: var(--awc-color-primary-200); display: flex; justify-content: center; align-items: center">Slide 1</awc-carousel-item>
      <awc-carousel-item style="background: var(--awc-color-secondary-200); display: flex; justify-content: center; align-items: center">Slide 2</awc-carousel-item>
      <awc-carousel-item style="background: var(--awc-color-tertiary-200); display: flex; justify-content: center; align-items: center">Slide 3</awc-carousel-item>
      <awc-carousel-item style="background: var(--awc-color-success-200); display: flex; justify-content: center; align-items: center">Slide 4</awc-carousel-item>
      <awc-carousel-item style="background: var(--awc-color-warning-200); display: flex; justify-content: center; align-items: center">Slide 5</awc-carousel-item>
      <awc-carousel-item style="background: var(--awc-color-danger-200); display: flex; justify-content: center; align-items: center">Slide 6</awc-carousel-item>
    </awc-carousel>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'The `slides-per-page` attribute makes it possible to display multiple slides at a time. You can also use the `slides-per-move` attribute to advance more than once slide at a time, if desired.'
      }
    }
  }
};

export const AddingRemovingSlides: Story = {
  name: 'Adding and Removing Slides',
  render: () => html`
    <awc-carousel class="dynamic-carousel  mb-12" pagination navigation>
      <awc-carousel-item style="background: var(--awc-color-danger-200)">Slide 1</awc-carousel-item>
      <awc-carousel-item style="background: var(--awc-color-warning-200)">Slide 2</awc-carousel-item>
      <awc-carousel-item style="background: var(--awc-color-tertiary-200)">Slide 3</awc-carousel-item>
    </awc-carousel>

    <div class="carousel-options">
      <awc-button id="dynamic-add">Add slide</awc-button>
      <awc-button id="dynamic-remove">Remove slide</awc-button>
    </div>

    <style>
      .dynamic-carousel {
        --aspect-ratio: 3 / 2;
      }

      .dynamic-carousel ~ .carousel-options {
        display: flex;
        justify-content: center;
        gap: var(--awc-spacing-x-small);
        margin-top: var(--awc-spacing-large);
      }

      .dynamic-carousel awc-carousel-item {
        flex: 0 0 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--awc-font-size-2x-large);
      }
    </style>

    <script>
      (() => {
        const dynamicCarousel = document.querySelector('.dynamic-carousel');
        const dynamicAdd = document.querySelector('#dynamic-add');
        const dynamicRemove = document.querySelector('#dynamic-remove');
        const colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger'];
        let colorIndex = 2;

        const addSlide = () => {
          const slide = document.createElement('awc-carousel-item');
          const color = colors[++colorIndex % colors.length];
          slide.innerText = \`Slide \${dynamicCarousel.children.length + 1}\`;
          slide.style.setProperty('background', \`var(--awc-color-\${color}-200)\`);
          dynamicCarousel.slider.appendSlide(slide);
          dynamicRemove.disabled = false;
        };

        const removeSlide = () => {
          const numSlides = dynamicCarousel.querySelectorAll('awc-carousel-item').length;
          dynamicCarousel.slider.removeSlide(dynamicCarousel.children.length - 1);
          dynamicRemove.disabled = numSlides - 1 <= 1;
        };

        dynamicAdd.addEventListener('click', addSlide);
        dynamicRemove.addEventListener('click', removeSlide);
      })();
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'The content of the carousel can be changed by adding or removing carousel items. The carousel will update itself automatically.'
      }
    }
  }
};

export const VerticalScrolling: Story = {
  name: 'Vertical Scrolling',
  render: () => html`
    <awc-carousel class="vertical" pagination direction="vertical">
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>
    <style>
      .vertical::part(base) {
        max-height: 400px;
      }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Setting the `orientation` attribute to `vertical` will render the carousel in a vertical layout. If the content of your slides vary in height, you will need to set amn explicit `height` or `max-height` on the carousel using CSS.'
      }
    }
  }
};

export const AspectRatio: Story = {
  name: 'Aspect Ratio',
  render: () => html`
    <awc-carousel class="aspect-ratio mb-12" navigation pagination style="--aspect-ratio: 3/2;">
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>

    <awc-divider></awc-divider>

    <awc-select label="Aspect ratio" name="aspect" value="3/2">
      <awc-option value="1/1">1/1</awc-option>
      <awc-option value="3/2">3/2</awc-option>
      <awc-option value="4/3">4/3</awc-option>
      <awc-option value="16/9">16/9</awc-option>
    </awc-select>

    <script>
      (() => {
        const carousel = document.querySelector('awc-carousel.aspect-ratio');
        const aspectRatio = document.querySelector('awc-select[name="aspect"]');

        aspectRatio.addEventListener('awc-change', () => {
          carousel.style.setProperty('--aspect-ratio', aspectRatio.value);
        });
      })();
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Use the `--aspect-ratio` custom property to customize the size of the carousel's viewport from the default value of 16/9."
      }
    }
  }
};

export const FreeMode: Story = {
  name: 'Free Mode',
  render: () => html`
    <awc-carousel class="free-mode" loop autoplay='{"delay": 0, "disableOnInteraction": false}' speed="5000" free-mode grab-cursor slides-per-view="auto" space-between="16">
        <awc-carousel-item class="w-auto h-auto">
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="https://placehold.co/666x400/000000/FFFFFF/png"
        />
      </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="https://placehold.co/100x400/000000/FFFFFF/png"
        />
      </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="https://placehold.co/366x200/000000/FFFFFF/png"
        />
      </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
                    src="/assets/examples/carousel/field.jpg"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
                    src="/assets/examples/carousel/valley.jpg"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
                    src="https://placehold.co/666x400/000000/FFFFFF/png"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
                    src="https://placehold.co/100x400/000000/FFFFFF/png"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
                    src="https://placehold.co/366x200/000000/FFFFFF/png"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
                    src="/assets/examples/carousel/field.jpg"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
                    src="/assets/examples/carousel/valley.jpg"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
                    src="https://placehold.co/666x400/000000/FFFFFF/png"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
                    src="https://placehold.co/100x400/000000/FFFFFF/png"
            />
        </awc-carousel-item>
        <awc-carousel-item class="w-auto h-auto">
            <img
                    alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
                    src="https://placehold.co/366x200/FF0000/FFFFFF/png"
            />
        </awc-carousel-item>
    </awc-carousel>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `--scroll-hint` custom property to add inline padding in horizontal carousels and block padding in vertical carousels. This will make the closest slides slightly visible, hinting that there are more items in the carousel.'
      }
    }
  }
};

export const ScrollHint: Story = {
  name: 'Scroll Hint',
  render: () => html`
    <div class="container mx-auto">
        <awc-carousel class="scroll-hint" pagination space-between="16">
            <awc-carousel-item>
                <img
                        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
                        src="/assets/examples/carousel/mountains.jpg"
                />
            </awc-carousel-item>
            <awc-carousel-item>
                <img
                        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
                        src="/assets/examples/carousel/waterfall.jpg"
                />
            </awc-carousel-item>
            <awc-carousel-item>
                <img
                        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
                        src="/assets/examples/carousel/sunset.jpg"
                />
            </awc-carousel-item>
            <awc-carousel-item>
                <img
                        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
                        src="/assets/examples/carousel/field.jpg"
                />
            </awc-carousel-item>
            <awc-carousel-item>
                <img
                        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
                        src="/assets/examples/carousel/valley.jpg"
                />
            </awc-carousel-item>
        </awc-carousel>
    </div>
    <style>
        awc-carousel.scroll-hint::part(base) {
            overflow: visible;
        }
    </style>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `--scroll-hint` custom property to add inline padding in horizontal carousels and block padding in vertical carousels. This will make the closest slides slightly visible, hinting that there are more items in the carousel.'
      }
    }
  }
};

export const GalleryExample: Story = {
  name: 'Gallery Example',
  render: () => html`
    <awc-carousel class="carousel-thumbnails mb-8" navigation loop>
      <awc-carousel-item>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </awc-carousel-item>
      <awc-carousel-item>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </awc-carousel-item>
    </awc-carousel>

    <div class="thumbnails">
        <div class="thumbnails__scroller">
            <img
                    alt="Thumbnail by 1"
                    class="thumbnails__image active"
                    src="/assets/examples/carousel/mountains.jpg">
            <img
                    alt="Thumbnail by 2"
                    class="thumbnails__image"
                    src="/assets/examples/carousel/waterfall.jpg">
            <img
                    alt="Thumbnail by 3"
                    class="thumbnails__image"
                    src="/assets/examples/carousel/sunset.jpg">
            <img
                    alt="Thumbnail by 4"
                    class="thumbnails__image"
                    src="/assets/examples/carousel/field.jpg">
            <img
                    alt="Thumbnail by 5"
                    class="thumbnails__image"
                    src="/assets/examples/carousel/valley.jpg">
        </div>
    </div>
    <style>

      .thumbnails {
        display: flex;
        justify-content: center;
      }

      .thumbnails__scroller {
        display: flex;
        gap: var(--awc-spacing-small);
        overflow-x: auto;
        scrollbar-width: none;
        scroll-behavior: smooth;
        scroll-padding: var(--awc-spacing-small);
      }

      .thumbnails__scroller::-webkit-scrollbar {
        display: none;
      }

      .thumbnails__image {
        width: 64px;
        height: 64px;
        object-fit: cover;

        opacity: 0.3;
        will-change: opacity;
        transition: 250ms opacity;

        cursor: pointer;
      }

      .thumbnails__image.active {
        opacity: 1;
      }
    </style>
    <script>
        {
            const carousel = document.querySelector('.carousel-thumbnails');
            const scroller = document.querySelector('.thumbnails__scroller');
            const thumbnails = document.querySelectorAll('.thumbnails__image');

            scroller.addEventListener('click', e => {
                const target = e.target;

                if (target.matches('.thumbnails__image')) {
                    const index = [...thumbnails].indexOf(target);
                    carousel.slider.slideToLoop(index);
                }
            });

            carousel.addEventListener('awc-slide-change', (e) => {
                const [ slider ] = e.detail;
                const slideIndex = slider.realIndex;

                [...thumbnails].forEach((thumb, i) => {
                    thumb.classList.toggle('active', i === slideIndex);
                    if (i === slideIndex) {
                        thumb.scrollIntoView({
                            block: 'nearest'
                        });
                    }
                });
            });
        }
    </script>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'The carousel has a robust API that makes it possible to extend and customize. This example syncs the active slide with a set of thumbnails, effectively creating a gallery-style carousel.'
      }
    }
  }
};
