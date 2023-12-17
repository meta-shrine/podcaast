'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { EpisodeCard } from '../common/episode-card';
import { usePlayerState } from '@/context/player-context';

export const Explore = () => {
  const [pause, setPause] = useState<boolean>(false);
  const { isPlayerActive } = usePlayerState();
  return (
    <div className='relative overflow-hidden h-full w-full md:max-w-md snap-start transition duration-300'>
      <div className='absolute hidden h-full w-full scale-105 -z-10 blur-2xl brightness-50 bg-[url(https://images.pexels.com/photos/6953780/pexels-photo-6953780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover'></div>
      <div
        onClick={() => {
          setPause((prev) => !prev);
        }}
        className='h-full  z-10 bg-black bg-[url(https://images.pexels.com/photos/6953780/pexels-photo-6953780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover'>
        <div className='h-full w-full flex items-end p-4 bg-gradient-to-b from-neutral-950/90 from-10% via-neutral-950/50 via-35% to-neutral-950/90 to-60%'>
          {pause && (
            <div className='absolute animate-dissolve opacity-0  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <FaPlay
                className='text-neutral-500 group-hover:text-neutral-400  group-hover:scale-110 ease-in-out duration-200'
                size='48'
              />
            </div>
          )}
          <div
            className={`flex flex-col ${pause ? 'gap-6' : 'gap-0'} ${
              isPlayerActive ? 'pb-14' : ''
            } transition-all duration-300 `}>
            <div className=' text-neutral-300 z-10'>
              <h3 className='text-2xl font-medium'>Hailing the audiophiles</h3>
              <div className='flex justify-between mt-4'>
                <div className='flex flex-col items-center'>
                  <p className='text-base font-semibold'>3.15k</p>
                  <p className='text-xs text-neutral-500'>Followers</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p className='text-base font-semibold'>112k</p>
                  <p className='text-xs text-neutral-500'>Listeners</p>
                </div>
                <div className='flex flex-col items-center'>
                  <p className='text-base font-semibold'>35</p>
                  <p className='text-xs text-neutral-500'>Episodes</p>
                </div>
              </div>
              <p className='text-sm font-light text-neutral-400 mt-4 text-ellipsis line-clamp-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                saepe nostrum quisquam consequatur? Inventore ea cupiditate
                placeat nihil fugiat recusandae accusamus maxime atque odit,
                quam porro asperiores deleniti? Tempora, quisquam!
              </p>
              <div
                className={`${
                  pause ? 'h-0' : 'h-12  mt-5'
                } transition-all duration-300 flex gap-6 items-center overflow-hidden`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className='h-12 z-50 border-neutral-500 bg-neutral-700/50 rounded-full px-6 flex gap-4 items-center hover:bg-neutral-600/50 group ease-in-out duration-200'>
                  <FaPlay
                    className='text-neutral-500 group-hover:text-neutral-400  group-hover:scale-110 ease-in-out duration-200'
                    size='20'
                  />
                  <p className='text-neutral-500 group-hover:text-neutral-400 ease-in-out duration-200'>
                    Play Episode
                  </p>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}>
                  <p className='text-neutral-500 hover:text-neutral-400 ease-in-out duration-200'>
                    See all episodes
                  </p>
                </button>
              </div>
            </div>
            <div
              className={` ${
                pause ? 'h-80' : 'h-0 overflow-hidden '
              } text-neutral-400 flex flex-col gap-3 transition-all duration-500`}>
              <h3 className='text-xl font-medium'>Episodes</h3>
              <div className='flex flex-col gap-3 h-72 overflow-y-scroll'>
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
