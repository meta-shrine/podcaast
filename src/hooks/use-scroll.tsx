import { RefObject, useCallback, useEffect, useState } from 'react';

type TScrollProps = {
  elRef: RefObject<HTMLDivElement>;
};

function useScroll({ elRef }: TScrollProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasStarted, setHasStarted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  const handleScroll = useCallback(() => {
    const el = elRef.current;
    if (el) {
      setIsScrolling(true);
      setHasStarted(el.scrollLeft > 0);
      setHasEnded(el.scrollLeft + el.clientWidth + 1 >= el.scrollWidth);
    }
  }, [elRef]);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => {
        el.removeEventListener('scroll', handleScroll);
      };
    }
  }, [elRef, handleScroll]);

  const scrollLeft = (amount: number = 100) => {
    const el = elRef.current;
    if (el) {
      el.scrollTo({
        left: el.scrollLeft - amount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (amount: number = 100) => {
    const el = elRef.current;
    if (el) {
      el.scrollTo({
        left: el.scrollLeft + amount,
        behavior: 'smooth',
      });
    }
  };

  return { scrollLeft, scrollRight, isScrolling, hasStarted, hasEnded };
}

export default useScroll;
