import { FC, ReactNode, useEffect, useState } from 'react';
import { Cursor } from './CustomCursor.styled';

interface ICustomCursorProps {
  children: ReactNode;
}

const CustomCursor: FC<ICustomCursorProps> = ({ children }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <Cursor style={{ left: pos.x, top: pos.y }} aria-hidden='true'>
      {children}
    </Cursor>
  );
};

export default CustomCursor;
