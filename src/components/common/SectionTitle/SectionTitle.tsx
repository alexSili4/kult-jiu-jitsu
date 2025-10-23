import { FC, useEffect, useRef } from 'react';
import { Title } from './SectionTitle.styled';
import { ISectionTitleProps } from './SectionTitle.types';

const SectionTitle: FC<ISectionTitleProps> = ({ text, isHidden = false }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const stretchText = () => {
    if (!containerRef.current || !textRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const textWidth = textRef.current.scrollWidth;

    const scale = containerWidth / textWidth;

    textRef.current.style.transform = `scale(${scale})`;

    const containerHeight = textRef.current.getBoundingClientRect().height;
    containerRef.current.style.height = `${containerHeight}px`;
  };

  useEffect(() => {
    stretchText();

    window.addEventListener('resize', stretchText);
    return () => window.removeEventListener('resize', stretchText);
  }, []);

  return (
    <Title ref={containerRef} isHidden={isHidden}>
      <span
        ref={textRef}
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          transformOrigin: 'left top',
        }}
      >
        {text}
      </span>
    </Title>
  );
};

export default SectionTitle;
