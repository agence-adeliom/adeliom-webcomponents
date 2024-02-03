import React, { useContext } from 'react';

import { useAddonState, useChannel, useParameter } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { Source } from '@storybook/blocks';
import { ADDON_ID, EVENTS } from './constants';

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = props => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate

  const [{ code }, setState] = useAddonState(ADDON_ID, {
    code: null,
    options: {}
  }); // https://storybook.js.org/docs/react/addons/addons-api#usechannel

  useChannel({
    [EVENTS.CODE_UPDATE]: ({ code }) => {
      setState(state => ({ ...state, code }));
    }
  }, [code]);

  return (
    <AddonPanel {...props}>
      <style>
        {`#storybook-panel-root .docblock-source {
          margin: 0;
          border-radius: 0;
        }`}
      </style>
      {code && <Source code={code} language={'html'} format={'lwc'} dark style={{ margin: '0' }} />}
    </AddonPanel>
  );
};
