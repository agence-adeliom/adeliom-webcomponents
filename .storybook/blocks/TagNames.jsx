import React from 'react';
import { Subtitle, useOf } from '@storybook/blocks';
import { getComponentByTagName } from '../wc-helper/cem-utilities';
import { getCustomElements } from '@storybook/web-components';

export const TagNames = ({ of }) => {
  const resolvedOf = useOf(of || 'meta', ['meta']);
  if (resolvedOf.type !== 'meta') {
    return;
  }

  const component = getComponentByTagName(resolvedOf.preparedMeta.component, getCustomElements());

  return (
    <Subtitle>
      <>
        {component?.tagName ? `<${component.tagName}>` : null}
        {component?.tagName && component?.name ? ` | ` : null}
        {component?.name ? `${component.name}` : null}
      </>
    </Subtitle>
  );
};
