import { IUseVideo } from '@/types/hooks';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useVideo = (): IUseVideo => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (inView) {
      video.play().catch((e) => console.log('Autoplay blocked', e));
    } else {
      video.pause();
    }
  }, [inView]);

  return { videoRef };
};

export default useVideo;
