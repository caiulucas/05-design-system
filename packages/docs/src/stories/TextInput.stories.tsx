import { Box, Text, TextInput, TextInputProps } from '@caiulucas-ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type your username...'
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Your username</Text>
        {Story()}
      </Box>
    )
  ]
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: undefined
  }
};
