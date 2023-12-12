import { addons } from '@storybook/manager-api';
import AwcTheme from './AwcTheme';
import { STORY_CHANGED, STORY_ERRORED, STORY_MISSING } from '@storybook/core-events';
import TagManager from 'react-gtm-module'

declare global {
  interface Window {
    STORYBOOK_GTM_ID?: string;
    dataLayer: Record<string, unknown>[];
  }
}

window.STORYBOOK_GTM_ID = "GTM-P7X3V2SX"

addons.register('adeliom/google-tag-manager', (api) => {
  if (window.STORYBOOK_GTM_ID) {
    TagManager.initialize({
      gtmId: window.STORYBOOK_GTM_ID,
    })
  }


  api.on(STORY_CHANGED, () => {
    const { path } = api.getUrlState();
    const { title, name } = api.getCurrentStoryData();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_title: `${title} - ${name}`,
      page_path: path
    })
  });
  api.on(STORY_ERRORED, ({ description }: { description: string }) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'exception',
      description,
      fatal: true
    })
  });
  api.on(STORY_MISSING, (id: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'exception',
      description: `attempted to render ${id}, but it is missing`,
      fatal: false
    })
  });
});

addons.setConfig({
  theme: AwcTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['design-tokens', 'framework', 'tutorial', 'components', 'block']
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false }
  }
});
