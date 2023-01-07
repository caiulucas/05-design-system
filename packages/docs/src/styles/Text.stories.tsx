import { Text, TextProps } from '@caiulucas-ignite-ui/react';
import { StoryObj, Meta } from '@storybook/react';

const text =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, natus! Natus, adipisci autem, deleniti ea optio iure libero dignissimos veniam corporis fuga repudiandae et, expedita quasi eos accusamus accusantium beatae.';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: text
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong'
  }
};
