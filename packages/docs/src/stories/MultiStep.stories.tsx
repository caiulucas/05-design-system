import { Box, Text, MultiStep, MultiStepProps } from '@caiulucas-ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1
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
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4
  }
};
