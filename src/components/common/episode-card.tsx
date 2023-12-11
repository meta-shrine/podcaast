import React from 'react';
import { FaPlay } from 'react-icons/fa';

export const EpisodeCard = () => {
  return (
    <div onClick={(e)=>{e.stopPropagation()}} className='h-20 w-full bg-neutral-800/50 rounded-lg p-2 flex gap-3'>
      <div className='h-16 w-16 aspect-square object-cover rounded-md overflow-hidden'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
      </div>
      <div className='flex flex-col justify-end gap-1 w-[calc(100%-8.5rem)]'>
        <h2 className='text-sm font-medium text-neutral-300 h-10 overflow-hidden break-words text-ellipsis line-clamp-2'>
          EP1. Daily hurdles and how to overcome them easily. Lessons 101{' '}
        </h2>
        <div className='flex text-xs font-light divide-neutral-400 '>
          <p className='pr-4 whitespace-nowrap break-words text-ellipsis '>Hailing the audiophiles</p>
          <p className=' whitespace-nowrap '>20m 34s</p>
        </div>
      </div>
      <div className='h-full w-12 flex items-center'>
        <button className='h-12 w-12 border-neutral-500 bg-neutral-700/50 rounded-full p-4 flex gap-4 items-center hover:bg-neutral-600/50 group ease-in-out duration-200'>
          <FaPlay
            className='text-neutral-500 group-hover:text-neutral-400 translate-x-0.5 group-hover:scale-110 ease-in-out duration-200'
            size='20'
          />
        </button>
      </div>
    </div>
  );
};
