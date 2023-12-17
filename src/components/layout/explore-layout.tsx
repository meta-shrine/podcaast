'use client';
import { Children } from '@/interface/types';
import React, { useEffect, useRef } from 'react';

export const ExploreLayout = ({ children }: Children) => {
  const exploreRefs = useRef<HTMLAudioElement[]>([]);
  const explore: any[] = [];

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const audioElement = entry.target as HTMLAudioElement;
          audioElement.play();
        } else {
          const audioElement = entry.target as HTMLAudioElement;
          audioElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    exploreRefs.current.forEach((audioRef) => {
      if (audioRef) {
        observer.observe(audioRef);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [explore]);

  const handleExploreRef =
    (index: number) => (ref: HTMLAudioElement | null) => {
      if (ref) {
        exploreRefs.current[index] = ref;
      }
    };
  return (
    <div className='h-full w-full mx-auto  gap-16 p-0.5'>
      <div className=' h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
        {children}
      </div>
      <div className='hidden lg:block h-full overflow-y-scroll'></div>
    </div>
  );
};
