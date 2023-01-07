import { Toast, ToastProps } from '@caiulucas-ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';
export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Toast title',
    description: 'Toast simple description'
  }
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
