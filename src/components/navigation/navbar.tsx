import React from 'react';
import { LuSearch } from "react-icons/lu";

export const Navbar = () => {
  return (
    <div className='h-16 bg-white/50 w-full px-6'>
      <div className='flex justify-between items-center h-full w-full'>
        <div className='relative w-full max-w-sm flex items-center '>
          <input
            type='text'
            className='h-10 rounded-full w-full focus:outline-none pl-12 pr-4  placeholder:text-neutral-300'
            placeholder='Search by creator, title or genre'
          />
          <LuSearch className="absolute left-2 text-neutral-300" size='24'/>
        </div>
      </div>
    </div>
  );
};
