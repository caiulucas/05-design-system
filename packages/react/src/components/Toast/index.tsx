import { X } from 'phosphor-react';
import { ComponentProps, useState } from 'react';

import { CloseButton, Description, Title, ToastContainer } from './styles';

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string;
  description: string;
}

export function Toast({ title, description, ...props }: ToastProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ToastContainer
      {...props}
      css={{ display: `${isOpen ? 'default' : 'hidden'}}` }}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CloseButton onClick={() => setIsOpen(false)}>
        <X />
      </CloseButton>
    </ToastContainer>
  );
}
