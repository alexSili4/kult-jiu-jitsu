// ModalWin.tsx
import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button, Container } from './ModalWin.styled';
import { useModalWin } from '@/hooks';
import { IoClose } from 'react-icons/io5';
import { Transition, Variants } from 'framer-motion';

export interface IModalWinProps {
  children: ReactNode;
  setModalWinState: () => void;
}

const ModalWin: FC<IModalWinProps> = ({ children, setModalWinState }) => {
  const { modalRoot, onCloseBtnClick } = useModalWin({
    setModalWinState,
  });

  const transition: Transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const containerVariants: Variants = {
    initial: {
      y: 100,
      opacity: 0,
      transition,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      y: 100,
      opacity: 0,
      transition,
    },
  };

  return (
    modalRoot &&
    createPortal(
      <Container
        variants={containerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {children}
        <Button onClick={onCloseBtnClick}>
          <IoClose size={20} />
        </Button>
      </Container>,
      modalRoot
    )
  );
};

export default ModalWin;
