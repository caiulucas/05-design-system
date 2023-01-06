import { ComponentProps, ElementType } from 'react';

import { styled } from '../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transition: 'all 0.2s',

  '&:disabled': {
    cursor: 'not-allowed'
  },

  svg: {
    width: '$4',
    height: '$4'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300'
        },

        '&:disabled': {
          backgroundColor: '$gray200'
        }
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(disabled):hover': {
          color: '$white',
          backgroundColor: '$ignite500'
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          borderColor: '$gray200'
        }
      },
      tertiary: {
        color: '$gray100',

        '&:not(disabled):hover': {
          color: '$white'
        },

        '&:disabled': {
          color: '$gray600'
        }
      }
    },
    size: {
      sm: { height: 38 },
      md: { height: 46 }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
