import React from 'react';

export const Recommend = () => {
  return (
    <div className='flex flex-col gap-8'>
      <h2 className='text-2xl font-medium'>Featured Podcasts</h2>
      <div className='flex gap-2 overflow-x-scroll '>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div
            key={item}
            className=' h-8 rounded-md px-4 text-sm grid place-items-center dark:bg-neutral-600/50 dark:text-neutral-400'>
            Podcasts
          </div>
        ))}
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
