import { MouseEvent, MouseEventHandler, useEffect } from 'react';

export interface IUseModalWinProps {
  setModalWinState: () => void;
}

interface IUseModalWin {
  modalRoot: Element | null;
  onCloseBtnClick: MouseEventHandler;
}

const useModalWin = ({ setModalWinState }: IUseModalWinProps): IUseModalWin => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const hideModalWin = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    window.addEventListener('keydown', hideModalWin);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', hideModalWin);
    };
  }, []);

  const onCloseBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    setModalWinState();
  };

  return { modalRoot, onCloseBtnClick };
};

export default useModalWin;
