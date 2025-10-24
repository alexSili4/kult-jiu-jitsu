import { FC, useEffect, useState } from 'react';
import { Cursor } from './CustomCursor.styled';
import { ClassName } from '@/constants';

interface ICustomCursorProps {
  img: string;
  width: number;
  height: number;
}

const CustomCursor: FC<ICustomCursorProps> = ({ img, width, height }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <Cursor
      className={ClassName.cursor}
      style={{ left: pos.x, top: pos.y, width, height }}
      aria-hidden='true'
    >
      <img src={img} alt='Курсор' />
    </Cursor>
  );
};

export default CustomCursor;
