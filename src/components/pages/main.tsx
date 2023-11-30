import Image from 'next/image';
import React from 'react';

export const Main = () => {
  return (
    <div className='h-full w-full'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>Featured Podcasts</h2>
        <div className='flex min-w-full gap-4 overflow-x-scroll'>
          {[1, 2, 3, 4, 5].map((items, idx) => (
            <div
              key={idx}
              className='h-56 min-w-[24rem] scroll-smooth border rounded-lg overflow-hidden relative'>
              <div className='absolute text-white bottom-0 p-4'>
                <h3 className='text-xl'>Hailing the audiophiles</h3>
                <p className='text-sm font-light'>
                  This is a podcast about hello world.
                </p>
              </div>
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
        <h2 className='text-2xl font-medium'>New Releases</h2>
        <div className='flex gap-4 overflow-x-scroll'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
            <div
              key={item}
              className=' h-10 rounded-full border px-4 py-1 grid place-items-center'>Podcasts</div>
          ))}
        </div>
      </div>
    </div>
  );
};
