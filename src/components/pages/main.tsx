'use client';

import { useHorizontalScroll } from '@/hooks/use-horizontal-scroll';
import useScroll from '@/hooks/use-scroll';
import Image from 'next/image';
import React from 'react';

import { FaPlay } from 'react-icons/fa';

export const Main = () => {
  const scrollref = useHorizontalScroll();
  const { scrollLeft, scrollRight, hasStarted, hasEnded } = useScroll({ elRef: scrollref });
  return (
    <div className='h-full w-full'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>Featured Podcasts</h2>
        <div
          ref={scrollref}
          className='flex min-w-full gap-4 overflow-x-scroll'>
          <div className='w-fit flex gap-4 scroll-smooth'>
            {[1, 2, 3, 4, 5].map((items, idx) => (
              <div
                key={idx}
                className='h-56 min-w-[24rem] scroll-smooth border border-neutral-800 rounded-lg overflow-hidden relative z-0 select-none'>
                <div className='absolute text-neutral-400 bottom-0 p-4 z-10'>
                  <h3 className='text-xl'>Hailing the audiophiles</h3>
                  <p className='text-sm font-light'>
                    This is a podcast about hello world.
                  </p>
                </div>
                <div className='absolute z-10 h-12 w-12 rounded-full border-2 border-neutral-400 hover:border-neutral-100 ease-in-out duration-200 grid place-items-center right-4 bottom-4 group'>
                  <FaPlay
                    className='text-neutral-400 group-hover:text-neutral-100 ml-1 group-hover:scale-110 ease-in-out duration-200'
                    size='20'
                  />
                </div>
                <div className='h-full w-full absolute bg-gradient-to-tr from-neutral-900/90 to-sky-900/30  via-teal-900/25'></div>
                <Image
                  src='https://images.pexels.com/photos/696407/pexels-photo-696407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  alt=''
                  height={100}
                  width={100}
                  className='h-full w-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => scrollLeft(384)}>{'<'}</button>
        <button onClick={() => scrollRight(384)}>{'>'}</button>
        <h2 className='text-2xl font-medium'>New Releases</h2>
        <div className='flex gap-4 overflow-x-scroll'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
            <div
              key={item}
              className=' h-10 rounded-full border px-4 py-1 grid place-items-center'>
              Podcasts
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
