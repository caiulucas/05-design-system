import { Text, TextProps } from '@ignite-ui/react';
import { StoryObj, Meta } from '@storybook/react';

const text =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, natus! Natus, adipisci autem, deleniti ea optio iure libero dignissimos veniam corporis fuga repudiandae et, expedita quasi eos accusamus accusantium beatae.';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: text,
    size: 'md'
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
};
