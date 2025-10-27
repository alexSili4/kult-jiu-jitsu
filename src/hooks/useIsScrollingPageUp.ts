import { useEffect, useState } from 'react';

interface IUseIsScrollingPageUp {
  isScrollingUp: boolean;
  isScroll: boolean;
}

const useIsScrollingPageUp = (minScroll: number = 0): IUseIsScrollingPageUp => {
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const isScroll = lastScrollY >= minScroll;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { isScrollingUp, isScroll };
};

export default useIsScrollingPageUp;
