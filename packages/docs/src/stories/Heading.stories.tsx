import { Heading, HeadingProps } from '@ignite-ui/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title'
  }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story:
          'The heading always will be h2 by default, but it is possible to change using the property "as".  '
      }
    }
  }
};
