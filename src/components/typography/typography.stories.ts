import { getWcStorybookHelpers } from '@awc-storybook/wc-helper';
import type { Meta, StoryObj } from '@storybook/web-components';
import type AWCTypography from './typography';
import {html} from "lit";
const { events, args, argTypes, template } = getWcStorybookHelpers('awc-typography');

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Components/Typography',
  component: 'awc-typography',
  tags: ['autodocs'],
  args,
  argTypes,
  parameters: {
    layout: 'padded',
    actions: {
      handles: events
    }
  },
  render: context => template(context)
} satisfies Meta<AWCTypography & typeof args>;

export default meta;

type Story = StoryObj<AWCTypography & typeof args>;

export const Primary: Story = {
  name: 'Default',
  render: () => html`<awc-typography type='h1'>Hello World</awc-typography>
<awc-typography type='h2'>Hello World</awc-typography>
<awc-typography type='h3'>Hello World</awc-typography>
<awc-typography type='h4'>Hello World</awc-typography>
<awc-typography type='h5'>Hello World</awc-typography>
<awc-typography type='h6'>Hello World</awc-typography>
<awc-typography type='content'>
    <p>Lorem ipsum dolor sit amet. Ad rerum dolores <em>Qui autem est odio quasi hic labore veritatis qui totam odit</em>! Nam eaque fugit aut tempora placeat33 officia qui temporibus dicta qui voluptatem debitis. Ut itaque reiciendis <a href="https://www.loremipzum.com" target="_blank">Quo quia et magnam internos aut quasi facere ad voluptatum culpa</a>! </p><p>Vel ipsa eaque <strong>Eos maiores quo alias excepturi ea quas doloribus</strong> in officiis rerum aut ratione doloremque. Et ratione ipsam <em>In omnis ex eius vero sit natus blanditiis ad tenetur consequatur</em> eum perferendis quasi est quas quis. Ab minima expedita qui dolor illumest quam ea recusandae iusto. </p><ul><li>Vel alias illum id autem ducimus At laudantium quaerat. </li><li>Qui maiores pariatur aut incidunt ipsa ea minus nihil aut commodi dicta. </li><li>Et temporibus nihil sit ipsa sequi. </li><li>33 assumenda tempora quo alias quod et quis placeat ut numquam atque. </li><li>Sed repudiandae adipisci 33 quaerat rerum et perferendis sapiente aut atque laudantium. </li><li>Sit molestiae vitae qui nemo nulla et ullam eaque qui sint laudantium! </li></ul><p>Sed perspiciatis nesciunt sit tempore quis <strong>Ab quis et alias alias sed quis mollitia ut labore earum</strong>. Vel consequatur mollitiased excepturi et aspernatur libero? Aut dolor suscipit <a href="https://www.loremipzum.com" target="_blank">Sed quasi et repellat soluta qui placeat explicabo</a> et provident saepe aut saepe nesciunt eos voluptas natus. Qui perferendis facereSit nihil At libero tenetur aut voluptatibus atque id quam porro ex suscipit corrupti. </p><ol><li>Ut quia corrupti qui dolorem officia aut nulla eius. </li><li>Est necessitatibus placeat aut alias fugit? </li><li>Id vero voluptas aut ipsum incidunt. </li><li>Est explicabo laborum qui quos dolorem. </li><li>Aut voluptas labore ut fuga quia hic autem quia vel omnis corrupti. </li><li>Qui sunt obcaecati et quisquam voluptates. </li></ol><pre><code>&lt;!-- Et itaque laboriosam in enim optio ab libero aliquam! --&gt;<br>&lt;quasi&gt;Et omnis quos sed unde illo.&lt;/quasi&gt;<br>&lt;voluptatem&gt;Non distinctio harum et veritatis Quis.&lt;/voluptatem&gt;<br>&lt;molestiae&gt;Sit accusantium Quis et tempora voluptatem sed libero tempore.&lt;/molestiae&gt;<br></code></pre>
</awc-typography>`
};

export const RenderAs: Story = {
  name: 'Customize render tag',
  render: () => html`<awc-typography type='h1' renderAs='h2'>Hello World</awc-typography>`,
  parameters: {
    docs: {
      description: {
        story: "Use the `renderAs` attribute to change the rendered tag type."
      }
    }
  }
};
