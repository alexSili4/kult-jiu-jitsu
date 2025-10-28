import {
  SpringOptions,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FC, useRef } from 'react';
import { Banner, BannerWrap } from './ScaleBanner.styled';

interface IScaleBannerProps {
  banner: string;
}

const ScaleBanner: FC<IScaleBannerProps> = ({ banner }) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });

  const transition: SpringOptions = {
    stiffness: 150,
    damping: 100,
    mass: 0.5,
  };

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const smoothScale = useSpring(scale, transition);

  return (
    <BannerWrap ref={bannerRef}>
      <Banner src={banner} alt='Банер' style={{ scale: smoothScale }} />
    </BannerWrap>
  );
};

export default ScaleBanner;
