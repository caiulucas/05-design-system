import { styled } from '../../styles';
import { Button } from '../Button';
import { Text } from '../Text';
import { Heading } from './../Heading';

export const ToastContainer = styled('div', {
  position: 'absolute',
  right: '$4',
  bottom: '$4',
  width: 360,

  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  padding: '$3 $5'
});

export const Title = styled(Heading, {
  lineHeight: '$base',

  defaultVariants: {
    size: 'sm'
  }
});

export const Description = styled(Text, {
  color: '$gray200',
  lineHeight: '$base',

  defaultVariants: {
    size: 'sm'
  }
});

export const CloseButton = styled(Button, {
  position: 'absolute',
  right: '-$8',
  bottom: '$8',

  svg: {
    width: '$5',
    height: '$5'
  },

  defaultVariants: {
    variant: 'tertiary'
  }
});
