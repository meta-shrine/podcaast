'use client';

import { useHorizontalScroll } from '@/hooks/use-horizontal-scroll';
import useScroll from '@/hooks/use-scroll';
import React from 'react';

export const Recommend = () => {
  const scrollref = useHorizontalScroll();
  const { scrollLeft, scrollRight, hasEnded, hasStarted } = useScroll({
    elRef: scrollref,
  });
  return (
    <div className='flex flex-col gap-8 w-full'>
      <h2 className='text-2xl font-medium'>Featured Podcasts</h2>
      <div className='relative rounded-md overflow-hidden  w-full'>
        {hasStarted && (
          <button
            onClick={() => scrollLeft(200)}
            type='button'
            aria-label='left arrow'
            className='absolute left-0 h-full grid place-content-center px-4 bg-gradient-to-r from-neutral-950 via-neutral-900 r rounded-md z-10'>
            {'<'}
          </button>
        )}
        {!hasEnded && (
          <button
            onClick={() => scrollRight(200)}
            type='button'
            aria-label='left arrow'
            className='absolute right-0 h-full grid place-content-center pl-2 pr-4 bg-gradient-to-l from-neutral-950 via-neutral-900 rounded-md '>
            {'>'}
          </button>
        )}
        <div ref={scrollref} className=' overflow-x-scroll min-w-full'>
          <div className='w-fit flex gap-4 scroll-smooth'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div
                key={item}
                className='h-8 rounded-md px-4 text-sm grid place-items-center dark:bg-neutral-600/50 dark:text-neutral-400 select-none'>
                Podcasts
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 gap-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div
            key={item}
            className='col-span-4 aspect-square overflow-hidden object-center rounded-md text-sm grid place-items-center dark:bg-neutral-600/50 dark:text-neutral-400'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='https://images.pexels.com/photos/7918711/pexels-photo-7918711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
              className='h-full w-full object-center aspect-square object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
