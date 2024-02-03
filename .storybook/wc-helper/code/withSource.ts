import { makeDecorator } from '@storybook/preview-api';
import { type TemplateResult, render } from 'lit';
import prettify from 'esthetic';
import { addons } from '@storybook/preview-api';
import { EVENTS } from './constants';

export const withSource = makeDecorator({
  name: 'withSource',
  parameterName: 'sourceParameter',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => {
    const res = getStory(context) as TemplateResult;
    const element = document.createElement('pre');
    render(res, element);
    addons.getChannel().emit(EVENTS.CODE_UPDATE, {
      code: prettify.format(element.innerHTML.replace(/=""/g, '').replace(/<!--[\s\S]*?(?:-->)/g, ''), {
        language: 'html',
        preset: 'prettier',
        correct: true,
        preserveLine: 1,
        markup: {
          preserveComment: false,
          attributeSort: true,
          lineBreakValue: 'force-align',
          preserveAttribute: true,
          attributeCasing:'lowercase-name',
          forceAttributeValue: false
        }
      })

    });
    return res;
  }
});
