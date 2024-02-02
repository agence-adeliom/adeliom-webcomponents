import React from 'react';
import pkg from '../../package.json'
import { Markdown, useOf } from '@storybook/blocks';
import { getComponentByTagName } from '../wc-helper/cem-utilities';
import { getCustomElements } from '@storybook/web-components';

import AWCTab from '@awc/react/tab';
import AWCTabGroup from '@awc/react/tab-group';
import AWCTabPanel from '@awc/react/tab-panel';

export const Importing = ({ of }) => {
  const resolvedOf = useOf(of || 'meta', ['meta']);
  if (resolvedOf.type !== 'meta') {
    return;
  }

  const component = getComponentByTagName(resolvedOf.preparedMeta.component, getCustomElements());

  return (
    <AWCTabGroup>
      <AWCTab slot="nav" panel="script">Script</AWCTab>
      <AWCTab slot="nav" panel="import">Import</AWCTab>
      <AWCTab slot="nav" panel="bundler">Bundler</AWCTab>
      <AWCTab slot="nav" panel="react">React</AWCTab>
      <AWCTabPanel name="script">
        <p>To import this component from <a href='https://www.jsdelivr.com/package/npm/@agence-adeliom/awc' target='_blank' rel='noreferrer noopener'>the CDN</a> using a script tag:</p>
        <Markdown>
{`
\`\`\`html
<script type="module" src="https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@${pkg.version}/${pkg.files[1]}/components/${component.tagNameWithoutPrefix}/${component.tagNameWithoutPrefix}.js"></script>
\`\`\`
`}
        </Markdown>
      </AWCTabPanel>
      <AWCTabPanel name="import">
        <p>To import this component from <a href='https://www.jsdelivr.com/package/npm/@agence-adeliom/awc' target='_blank' rel='noreferrer noopener'>the CDN</a> using a JavaScript import:</p>
        <Markdown>
{`
\`\`\`js
import 'https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@${pkg.version}/${pkg.files[1]}/components/${component.tagNameWithoutPrefix}/${component.tagNameWithoutPrefix}.js';
\`\`\`
`}
        </Markdown>
      </AWCTabPanel>
      <AWCTabPanel name="bundler">
        <p>To import this component using <a href='/?path=/docs/getting-started-installation--documentation#bundling' target='_blank' rel='noreferrer noopener'>a bundler</a>:</p>
        <Markdown>
{`
\`\`\`js
import '@agence-adeliom/awc/${pkg.files[0]}/components/${component.tagNameWithoutPrefix}/${component.tagNameWithoutPrefix}.js';
\`\`\`
`}
      </Markdown>
      </AWCTabPanel>
      <AWCTabPanel name="react">
        <p>To import this component as a <a href='/?path=/docs/framework-react--documentation' target='_blank' rel='noreferrer noopener'>React component</a>:</p>
        <Markdown>
{`
\`\`\`js
import ${component.name} from '@agence-adeliom/awc/${pkg.files[0]}/react/${component.tagNameWithoutPrefix}';
\`\`\`
`}
      </Markdown>
      </AWCTabPanel>
    </AWCTabGroup>
  );
};
