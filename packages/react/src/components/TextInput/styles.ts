import { styled } from '../../styles';

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'base-line',

  '&:has(input:focus)': {
    outline: '2px solid $ignite300'
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
});

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular'
});

export const Input = styled('input', {
  all: 'unset',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  backgroundColor: 'transparent',
  width: '100%',
  cursor: 'text',

  '&:disabled': {
    cursor: 'not-allowed'
  },

  '&:placeholder': {
    color: '$gray400'
  }
});
