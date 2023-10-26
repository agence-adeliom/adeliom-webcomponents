import { makeDecorator } from '@storybook/preview-api';
import { render } from 'lit';
import prettify from 'esthetic';
import { addons } from '@storybook/preview-api';
import { EVENTS } from './constants';

export const withSource = makeDecorator({
  name: 'withSource',
  parameterName: 'sourceParameter',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => {
    let code = '';
    /*
     * Write your custom logic here based on the parameters passed in Storybook's stories.
     * Although not advised, you can also alter the story output based on the parameters.
     */
    const res = getStory(context);
    const element = document.createElement('div');
    render(res, element);
    code = element.innerHTML.replace(/<!--[\s\S]*?(?:-->)/g, '');
    addons.getChannel().emit(EVENTS.CODE_UPDATE, {
      code: prettify.format(code, { language: 'html', markup: { preserveComment: false } })
    });
    return getStory(context);
  }
});
