import { Avatar, AvatarProps } from '@caiulucas-ignite-ui/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/caiulucas.png',
    alt: 'Avatar photo'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};
