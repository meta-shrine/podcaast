import Image from 'next/image';
import React from 'react';
import { LuSearch } from 'react-icons/lu';
import { LuBell, LuSettings } from 'react-icons/lu';

export const Navbar = () => {
  return (
    <div className='h-16 w-full px-6 sticky top-0 left-0'>
      <div className='flex justify-between items-center h-full w-full'>
        <div className='relative w-full max-w-sm flex items-center '>
          <input
            type='text'
            className='h-10 border border-neutral-400 dark:border-neutral-600 rounded-full w-full focus:outline-none pl-12 pr-4 dark:placeholder:text-neutral-600 placeholder:text-neutral-300 font-light dark:bg-neutral-950'
            placeholder='Search by creator, title or genre'
          />
          <LuSearch
            className='absolute left-2 text-neutral-400 dark:text-neutral-600 font-light'
            strokeWidth='1.2'
            size='24'
          />
        </div>
        <div className='flex gap-2'>
          <button className='h-10 w-10 grid place-items-center ease-in-out duration-200 hover:bg-neutral-200 rounded-full'>
            <LuBell strokeWidth='1.2' size='20px' />
          </button>
          <button className='h-10 w-10 grid place-items-center ease-in-out duration-200 hover:bg-neutral-200 rounded-full'>
            <LuSettings strokeWidth='1.2' size='20px' />
          </button>
          <button className='h-10 w-10 grid place-items-center ease-in-out duration-200 hover:bg-neutral-200 rounded-full overflow-hidden'>
            <Image
              src='https://images.pexels.com/photos/4647249/pexels-photo-4647249.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
              height={40}
              width={40}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
