import { Children } from '@/interface/types';
import React from 'react';
import { Sidebar } from '../navigation/sidebar';
import { Navbar } from '../navigation/navbar';
import { MiniPlayer } from '../navigation/mini-player';

export const MainLayout = ({ children }: Children) => {
  return (
    <main className='flex h-screen w-screen overflow-hidden'>
      <div className='hidden lg:block w-60'>
        <Sidebar />
      </div>
      <div className='flex relative flex-col h-full w-full lg:w-[calc(100%-15rem)]'>
        <div className='absolute lg:relative z-50 bg-none w-full'>
          <Navbar />
        </div>
        <div className='h-full w-full lg:h-[calc(100%-8rem)]'>{children}</div>
      </div>
        <div className='h-16 w-full fixed bottom-0 text-neutral-50 z-50 border-t border-neutral-800'>
          <MiniPlayer />
        </div>
    </main>
  );
};
