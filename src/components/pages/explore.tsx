import React from 'react';
import { FaPlay } from 'react-icons/fa';

export const Explore = () => {
  return (
    <div className='h-full w-full rounded-xl bg-[url(https://images.pexels.com/photos/6953780/pexels-photo-6953780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover'>
      <div className='h-full w-full flex items-end p-4 bg-gradient-to-b from-transparent to-neutral-950'>
        <div className='py-6'>
          <div className=' text-neutral-400 z-10'>
            <h3 className='text-2xl font-medium'>Hailing the audiophiles</h3>
            <p className='text-sm font-light'>
              This is a podcast about hello world Hailing the audiophiles.
            </p>
            <p className='text-sm font-light text-neutral-500 mt-4 text-ellipsis'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              saepe nostrum quisquam consequatur? Inventore ea cupiditate
              placeat nihil fugiat recusandae accusamus maxime atque odit, quam
              porro asperiores deleniti? Tempora, quisquam!
            </p>
            <div className='pt-5 flex gap-6 items-center'>
              <button className='h-12  border-neutral-500 bg-neutral-700/50 rounded-full px-6 flex gap-4 items-center hover:bg-neutral-600/50 group ease-in-out duration-200'>
                <FaPlay
                  className='text-neutral-500 group-hover:text-neutral-400  group-hover:scale-110 ease-in-out duration-200'
                  size='20'
                />
                <p className='text-neutral-500 group-hover:text-neutral-400 ease-in-out duration-200'>
                  Play Episode
                </p>
              </button>
              <p className='text-neutral-500 hover:text-neutral-400 ease-in-out duration-200'>
                See all episodes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
