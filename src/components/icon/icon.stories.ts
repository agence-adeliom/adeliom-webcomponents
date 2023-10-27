import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCIcon from './icon';
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-icon');
import { registerIconLibrary } from '../../utilities/icon-library.ts';

registerIconLibrary('boxicons', {
  resolver: name => {
    let folder = 'regular';
    if (name.startsWith('bxs-')) folder = 'solid';
    if (name.startsWith('bxl-')) folder = 'logos';
    return `https://cdn.jsdelivr.net/npm/boxicons@2.1.4/svg/${folder}/${name}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

registerIconLibrary('lucide', {
  resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.288.0/icons/${name}.svg`
});

registerIconLibrary('fa', {
  resolver: name => {
    const filename = name.replace(/^fa[rbs]-/, '');
    let folder = 'regular';
    if (name.startsWith('fas-')) folder = 'solid';
    if (name.startsWith('fab-')) folder = 'brands';
    return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/svgs/${folder}/${filename}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

registerIconLibrary('heroicons', {
  resolver: name => {
    const filename = name.replace(/^o-/, '');
    let folder = 'solid';
    if (name.startsWith('o-')) folder = 'outline';
    return `https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/${folder}/${filename}.svg`;
  }
});

registerIconLibrary('iconoir', {
  resolver: name => `https://cdn.jsdelivr.net/npm/iconoir@6.11.0/icons/${name}.svg`
});

registerIconLibrary('ionicons', {
  resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@7.2.1/dist/ionicons/svg/${name}.svg`,
  mutator: svg => {
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('stroke', 'currentColor');
    [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
    [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
  }
});

registerIconLibrary('jam', {
  resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

registerIconLibrary('material', {
  resolver: name => {
    const match = name.match(/^(.*?)(_(baseline|outline|round|sharp|twotone))?$/);
    return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.33/svg/${match[1]}/${match[3] || 'baseline'}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

registerIconLibrary('remixicon', {
  resolver: name => {
    const match = name.match(/^(.*?)\/(.*?)?$/);
    match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
    return `https://cdn.jsdelivr.net/npm/remixicon@3.5.0/icons/${match[1]}/${match[2]}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

registerIconLibrary('tabler', {
  resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@2.39.0/icons/${name}.svg`
});

registerIconLibrary('unicons', {
  resolver: name => {
    const filename = name.replace(/^[lmst]-/, '');
    let folder = 'solid';
    if (name.startsWith('l-')) folder = 'line';
    if (name.startsWith('m-')) folder = 'monochrome';
    if (name.startsWith('s-')) folder = 'solid';
    if (name.startsWith('t-')) folder = 'thinline';
    return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/svg/${folder}/${filename}.svg`;
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

registerIconLibrary('sprite', {
  resolver: name => `/images/sprite.svg#${name}`,
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
  spriteSheet: true
});

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Icon',
  component: 'awc-icon',
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    docs: {
      toc: {
        disable: false
      }
    },
    actions: {
      handles: events
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  render: context => template(context)
} satisfies Meta<AWCIcon & typeof args>;

export default meta;

type Story = StoryObj<AWCIcon & typeof args>;

export const Colors: Story = {
  name: 'Colors',
  parameters: {
    docs: {
      description: {
        story: `Icons inherit their color from the current text color. Thus, you can set the \`color\` property on the \`<awc-icon>\` element or an ancestor to change the color.`
      }
    }
  },
  render: () =>
    html`<div style="color: #4a90e2;">
        <awc-icon name="exclamation-triangle"></awc-icon>
        <awc-icon name="archive"></awc-icon>
        <awc-icon name="battery-charging"></awc-icon>
        <awc-icon name="bell"></awc-icon>
      </div>
      <div style="color: #9013fe;">
        <awc-icon name="clock"></awc-icon>
        <awc-icon name="cloud"></awc-icon>
        <awc-icon name="download"></awc-icon>
        <awc-icon name="file-earmark"></awc-icon>
      </div>
      <div style="color: #417505;">
        <awc-icon name="flag"></awc-icon>
        <awc-icon name="heart"></awc-icon>
        <awc-icon name="image"></awc-icon>
        <awc-icon name="lightning"></awc-icon>
      </div>
      <div style="color: #f5a623;">
        <awc-icon name="mic"></awc-icon>
        <awc-icon name="search"></awc-icon>
        <awc-icon name="star"></awc-icon>
        <awc-icon name="trash"></awc-icon>
      </div>`
};

export const Sizing: Story = {
  name: 'Sizing',
  parameters: {
    docs: {
      description: {
        story: `Icons are sized relative to the current font size. To change their size, set the \`font-size\` property on the icon itself or on a parent element as shown below.`
      }
    }
  },
  render: () =>
    html`<div style="font-size: 32px;">
      <awc-icon name="exclamation-triangle"></awc-icon>
      <awc-icon name="archive"></awc-icon>
      <awc-icon name="battery-charging"></awc-icon>
      <awc-icon name="bell"></awc-icon>
      <awc-icon name="clock"></awc-icon>
      <awc-icon name="cloud"></awc-icon>
      <awc-icon name="download"></awc-icon>
      <awc-icon name="file-earmark"></awc-icon>
      <awc-icon name="flag"></awc-icon>
      <awc-icon name="heart"></awc-icon>
      <awc-icon name="image"></awc-icon>
      <awc-icon name="lightning"></awc-icon>
      <awc-icon name="mic"></awc-icon>
      <awc-icon name="search"></awc-icon>
      <awc-icon name="star"></awc-icon>
      <awc-icon name="trash"></awc-icon>
    </div>`
};

export const Labels: Story = {
  name: 'Labels',
  parameters: {
    docs: {
      description: {
        story: `For non-decorative icons, use the \`label\` attribute to announce it to assistive devices.`
      }
    }
  },
  args: {
    label: 'Add to favorites',
    name: 'star-fill'
  }
};

export const CustomIcons: Story = {
  name: 'Custom Icons',
  parameters: {
    docs: {
      description: {
        story: `Custom icons can be loaded individually with the \`src\` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).`
      }
    }
  },
  args: {
    src: '/images/shoe.svg'
  }
};

export const Boxicons: Story = {
  render: () =>
    html` <div style="font-size: 24px;">
      <awc-icon library="boxicons" name="bx-bot"></awc-icon>
      <awc-icon library="boxicons" name="bx-cookie"></awc-icon>
      <awc-icon library="boxicons" name="bx-joystick"></awc-icon>
      <awc-icon library="boxicons" name="bx-save"></awc-icon>
      <awc-icon library="boxicons" name="bx-server"></awc-icon>
      <awc-icon library="boxicons" name="bx-wine"></awc-icon>
      <br />
      <awc-icon library="boxicons" name="bxs-bot"></awc-icon>
      <awc-icon library="boxicons" name="bxs-cookie"></awc-icon>
      <awc-icon library="boxicons" name="bxs-joystick"></awc-icon>
      <awc-icon library="boxicons" name="bxs-save"></awc-icon>
      <awc-icon library="boxicons" name="bxs-server"></awc-icon>
      <awc-icon library="boxicons" name="bxs-wine"></awc-icon>
      <br />
      <awc-icon library="boxicons" name="bxl-apple"></awc-icon>
      <awc-icon library="boxicons" name="bxl-chrome"></awc-icon>
      <awc-icon library="boxicons" name="bxl-edge"></awc-icon>
      <awc-icon library="boxicons" name="bxl-firefox"></awc-icon>
      <awc-icon library="boxicons" name="bxl-opera"></awc-icon>
      <awc-icon library="boxicons" name="bxl-microsoft"></awc-icon>
    </div>`
};

export const Lucide: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="lucide" name="feather"></awc-icon>
      <awc-icon library="lucide" name="pie-chart"></awc-icon>
      <awc-icon library="lucide" name="settings"></awc-icon>
      <awc-icon library="lucide" name="map-pin"></awc-icon>
      <awc-icon library="lucide" name="printer"></awc-icon>
      <awc-icon library="lucide" name="shopping-cart"></awc-icon>
    </div>`
};

export const FontAwesome: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="fa" name="far-bell"></awc-icon>
      <awc-icon library="fa" name="far-comment"></awc-icon>
      <awc-icon library="fa" name="far-hand-point-right"></awc-icon>
      <awc-icon library="fa" name="far-hard-drive"></awc-icon>
      <awc-icon library="fa" name="far-heart"></awc-icon>
      <awc-icon library="fa" name="far-star"></awc-icon>
      <br />
      <awc-icon library="fa" name="fas-box-archive"></awc-icon>
      <awc-icon library="fa" name="fas-book"></awc-icon>
      <awc-icon library="fa" name="fas-chess-knight"></awc-icon>
      <awc-icon library="fa" name="fas-dice"></awc-icon>
      <awc-icon library="fa" name="fas-pizza-slice"></awc-icon>
      <awc-icon library="fa" name="fas-scroll"></awc-icon>
      <br />
      <awc-icon library="fa" name="fab-apple"></awc-icon>
      <awc-icon library="fa" name="fab-chrome"></awc-icon>
      <awc-icon library="fa" name="fab-edge"></awc-icon>
      <awc-icon library="fa" name="fab-firefox"></awc-icon>
      <awc-icon library="fa" name="fab-opera"></awc-icon>
      <awc-icon library="fa" name="fab-microsoft"></awc-icon>
    </div>`
};

export const Heroicons: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="heroicons" name="chat-bubble-left"></awc-icon>
      <awc-icon library="heroicons" name="cloud"></awc-icon>
      <awc-icon library="heroicons" name="cog"></awc-icon>
      <awc-icon library="heroicons" name="document-text"></awc-icon>
      <awc-icon library="heroicons" name="gift"></awc-icon>
      <awc-icon library="heroicons" name="speaker-wave"></awc-icon>
      <br />
      <awc-icon library="heroicons" name="o-chat-bubble-left"></awc-icon>
      <awc-icon library="heroicons" name="o-cloud"></awc-icon>
      <awc-icon library="heroicons" name="o-cog"></awc-icon>
      <awc-icon library="heroicons" name="o-document-text"></awc-icon>
      <awc-icon library="heroicons" name="o-gift"></awc-icon>
      <awc-icon library="heroicons" name="o-speaker-wave"></awc-icon>
    </div>`
};

export const Iconoir: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="iconoir" name="check-circle"></awc-icon>
      <awc-icon library="iconoir" name="drawer"></awc-icon>
      <awc-icon library="iconoir" name="keyframes"></awc-icon>
      <awc-icon library="iconoir" name="headset-help"></awc-icon>
      <awc-icon library="iconoir" name="color-picker"></awc-icon>
      <awc-icon library="iconoir" name="wifi"></awc-icon>
    </div>`
};

export const Ionicons: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="ionicons" name="alarm"></awc-icon>
      <awc-icon library="ionicons" name="american-football"></awc-icon>
      <awc-icon library="ionicons" name="bug"></awc-icon>
      <awc-icon library="ionicons" name="chatbubble"></awc-icon>
      <awc-icon library="ionicons" name="settings"></awc-icon>
      <awc-icon library="ionicons" name="warning"></awc-icon>
      <br />
      <awc-icon library="ionicons" name="alarm-outline"></awc-icon>
      <awc-icon library="ionicons" name="american-football-outline"></awc-icon>
      <awc-icon library="ionicons" name="bug-outline"></awc-icon>
      <awc-icon library="ionicons" name="chatbubble-outline"></awc-icon>
      <awc-icon library="ionicons" name="settings-outline"></awc-icon>
      <awc-icon library="ionicons" name="warning-outline"></awc-icon>
      <br />
      <awc-icon library="ionicons" name="alarm-sharp"></awc-icon>
      <awc-icon library="ionicons" name="american-football-sharp"></awc-icon>
      <awc-icon library="ionicons" name="bug-sharp"></awc-icon>
      <awc-icon library="ionicons" name="chatbubble-sharp"></awc-icon>
      <awc-icon library="ionicons" name="settings-sharp"></awc-icon>
      <awc-icon library="ionicons" name="warning-sharp"></awc-icon>
    </div>`
};

export const JamIcons: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="jam" name="calendar"></awc-icon>
      <awc-icon library="jam" name="camera"></awc-icon>
      <awc-icon library="jam" name="filter"></awc-icon>
      <awc-icon library="jam" name="leaf"></awc-icon>
      <awc-icon library="jam" name="picture"></awc-icon>
      <awc-icon library="jam" name="set-square"></awc-icon>
      <br />
      <awc-icon library="jam" name="calendar-f"></awc-icon>
      <awc-icon library="jam" name="camera-f"></awc-icon>
      <awc-icon library="jam" name="filter-f"></awc-icon>
      <awc-icon library="jam" name="leaf-f"></awc-icon>
      <awc-icon library="jam" name="picture-f"></awc-icon>
      <awc-icon library="jam" name="set-square-f"></awc-icon>
    </div>`
};

export const MaterialIcons: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="material" name="notifications"></awc-icon>
      <awc-icon library="material" name="email"></awc-icon>
      <awc-icon library="material" name="delete"></awc-icon>
      <awc-icon library="material" name="volume_up"></awc-icon>
      <awc-icon library="material" name="settings"></awc-icon>
      <awc-icon library="material" name="shopping_basket"></awc-icon>
      <br />
      <awc-icon library="material" name="notifications_outline"></awc-icon>
      <awc-icon library="material" name="email_outline"></awc-icon>
      <awc-icon library="material" name="delete_outline"></awc-icon>
      <awc-icon library="material" name="volume_up_outline"></awc-icon>
      <awc-icon library="material" name="settings_outline"></awc-icon>
      <awc-icon library="material" name="shopping_basket_outline"></awc-icon>
      <br />
      <awc-icon library="material" name="notifications_round"></awc-icon>
      <awc-icon library="material" name="email_round"></awc-icon>
      <awc-icon library="material" name="delete_round"></awc-icon>
      <awc-icon library="material" name="volume_up_round"></awc-icon>
      <awc-icon library="material" name="settings_round"></awc-icon>
      <awc-icon library="material" name="shopping_basket_round"></awc-icon>
      <br />
      <awc-icon library="material" name="notifications_sharp"></awc-icon>
      <awc-icon library="material" name="email_sharp"></awc-icon>
      <awc-icon library="material" name="delete_sharp"></awc-icon>
      <awc-icon library="material" name="volume_up_sharp"></awc-icon>
      <awc-icon library="material" name="settings_sharp"></awc-icon>
      <awc-icon library="material" name="shopping_basket_sharp"></awc-icon>
      <br />
      <awc-icon library="material" name="notifications_sharp"></awc-icon>
      <awc-icon library="material" name="email_sharp"></awc-icon>
      <awc-icon library="material" name="delete_sharp"></awc-icon>
      <awc-icon library="material" name="volume_up_sharp"></awc-icon>
      <awc-icon library="material" name="settings_sharp"></awc-icon>
      <awc-icon library="material" name="shopping_basket_sharp"></awc-icon>
      <br />
      <awc-icon library="material" name="notifications_twotone"></awc-icon>
      <awc-icon library="material" name="email_twotone"></awc-icon>
      <awc-icon library="material" name="delete_twotone"></awc-icon>
      <awc-icon library="material" name="volume_up_twotone"></awc-icon>
      <awc-icon library="material" name="settings_twotone"></awc-icon>
      <awc-icon library="material" name="shopping_basket_twotone"></awc-icon>
    </div>`
};

export const RemixIcon: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="remixicon" name="business/cloud-line"></awc-icon>
      <awc-icon library="remixicon" name="design/brush-line"></awc-icon>
      <awc-icon library="remixicon" name="business/pie-chart-line"></awc-icon>
      <awc-icon library="remixicon" name="development/bug-line"></awc-icon>
      <awc-icon library="remixicon" name="media/image-line"></awc-icon>
      <awc-icon library="remixicon" name="system/alert-line"></awc-icon>
      <br />
      <awc-icon library="remixicon" name="business/cloud-fill"></awc-icon>
      <awc-icon library="remixicon" name="design/brush-fill"></awc-icon>
      <awc-icon library="remixicon" name="business/pie-chart-fill"></awc-icon>
      <awc-icon library="remixicon" name="development/bug-fill"></awc-icon>
      <awc-icon library="remixicon" name="media/image-fill"></awc-icon>
      <awc-icon library="remixicon" name="system/alert-fill"></awc-icon>
    </div>`
};

export const TablerIcons: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="tabler" name="alert-triangle"></awc-icon>
      <awc-icon library="tabler" name="arrow-back"></awc-icon>
      <awc-icon library="tabler" name="at"></awc-icon>
      <awc-icon library="tabler" name="ball-baseball"></awc-icon>
      <awc-icon library="tabler" name="cake"></awc-icon>
      <awc-icon library="tabler" name="files"></awc-icon>
      <br />
      <awc-icon library="tabler" name="keyboard"></awc-icon>
      <awc-icon library="tabler" name="moon"></awc-icon>
      <awc-icon library="tabler" name="pig"></awc-icon>
      <awc-icon library="tabler" name="printer"></awc-icon>
      <awc-icon library="tabler" name="ship"></awc-icon>
      <awc-icon library="tabler" name="toilet-paper"></awc-icon>
    </div>`
};

export const Unicons: Story = {
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="unicons" name="clock"></awc-icon>
      <awc-icon library="unicons" name="anchor"></awc-icon>
      <awc-icon library="unicons" name="check-circle"></awc-icon>
      <awc-icon library="unicons" name="polygon"></awc-icon>
      <awc-icon library="unicons" name="rocket"></awc-icon>
      <awc-icon library="unicons" name="star"></awc-icon>
      <br />
      <awc-icon library="unicons" name="s-clock"></awc-icon>
      <awc-icon library="unicons" name="s-anchor"></awc-icon>
      <awc-icon library="unicons" name="s-check-circle"></awc-icon>
      <awc-icon library="unicons" name="s-polygon"></awc-icon>
      <awc-icon library="unicons" name="s-rocket"></awc-icon>
      <awc-icon library="unicons" name="s-star"></awc-icon>
      <br />
      <awc-icon library="unicons" name="m-clock"></awc-icon>
      <awc-icon library="unicons" name="m-anchor"></awc-icon>
      <awc-icon library="unicons" name="m-check-circle"></awc-icon>
      <awc-icon library="unicons" name="m-polygon"></awc-icon>
      <awc-icon library="unicons" name="m-rocket"></awc-icon>
      <awc-icon library="unicons" name="m-star"></awc-icon>
      <br />
      <awc-icon library="unicons" name="l-clock"></awc-icon>
      <awc-icon library="unicons" name="l-anchor"></awc-icon>
      <awc-icon library="unicons" name="l-check-circle"></awc-icon>
      <awc-icon library="unicons" name="l-polygon"></awc-icon>
      <awc-icon library="unicons" name="l-rocket"></awc-icon>
      <awc-icon library="unicons" name="l-star"></awc-icon>
      <br />
      <awc-icon library="unicons" name="t-clock"></awc-icon>
      <awc-icon library="unicons" name="t-anchor"></awc-icon>
      <awc-icon library="unicons" name="t-check-circle"></awc-icon>
      <awc-icon library="unicons" name="t-polygon"></awc-icon>
      <awc-icon library="unicons" name="t-rocket"></awc-icon>
      <awc-icon library="unicons" name="t-star"></awc-icon>
    </div>`
};

export const SVGSprites: Story = {
  name: 'SVG sprites',
  render: () =>
    html`<div style="font-size: 24px;">
      <awc-icon library="sprite" name="clock"></awc-icon>
      <awc-icon library="sprite" name="speedometer"></awc-icon>
    </div>`
};
