import React from 'react';
import { Markdown, Subtitle, useOf } from '@storybook/blocks';
import { getComponentByTagName } from '../wc-helper/cem-utilities';
import { getCustomElements } from '@storybook/web-components';

export const Summary = ({ of }) => {
  const resolvedOf = useOf(of || 'meta', ['meta']);
  if (resolvedOf.type !== 'meta') {
    return;
  }

  const component = getComponentByTagName(resolvedOf.preparedMeta.component, getCustomElements());
  return component?.summary ? (
    <Subtitle>
      <Markdown>{component.summary}</Markdown>
    </Subtitle>
  ) : null;
};
