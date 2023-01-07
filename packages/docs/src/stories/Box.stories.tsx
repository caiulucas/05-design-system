import { Box, BoxProps, Text } from '@caiulucas-ignite-ui/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing the box</Text>
      </>
    )
  },
  argTypes: {
    children: {
      control: { type: null }
    }
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
