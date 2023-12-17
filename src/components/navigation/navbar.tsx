'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { LuBell, LuSettings } from 'react-icons/lu';

export const Navbar = () => {
  const [searchToggle, setSearchToggle] = useState<boolean>(false);
  const handleSearchToggle = () => {
    setSearchToggle((prev) => !prev);
  };
  return (
    <div className='h-16 w-full px-4 lg:pl-0 lg:pr-6 bg-transparent'>
      <div className='flex justify-between items-center h-full w-full'>
        <div className='relative w-full max-w-sm hidden items-center'>
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
        <div className='h-10 rounded-full bg-neutral-800/50 text-neutral-200  hover:bg-neutral-700/50 flex group focus-within:pr-3'>
          <label
            htmlFor='search'
            className='h-10 w-10 grid place-items-center ease-in-out duration-200  rounded-full'>
            <LuSearch className='font-light' strokeWidth='1.2' size='24' />
          </label>
          <input
            type='search'
            name=''
            id='search'
            className='bg-transparent focus:outline-none w-0 group-focus-within:w-64 lg:group-focus-within:w-[25rem] duration-300 ease-in-out'
          />
        </div>
        <div className='flex gap-2'>
          <button className='h-10 w-10 grid place-items-center ease-in-out duration-200 text-neutral-200  hover:bg-neutral-700/50 rounded-full'>
            <LuBell strokeWidth='1.2' size='20px' />
          </button>
          <button className='h-10 w-10 grid place-items-center ease-in-out duration-200 text-neutral-200  hover:bg-neutral-700/50 rounded-full'>
            <LuSettings strokeWidth='1.2' size='20px' />
          </button>
          <button className='h-10 w-10 grid place-items-center ease-in-out duration-200 hover:bg-neutral-700/50 rounded-full overflow-hidden'>
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
