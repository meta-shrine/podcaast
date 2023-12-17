import { Children } from '@/interface/types';
import React from 'react';
import { Sidebar } from '../navigation/sidebar';
import { Navbar } from '../navigation/navbar';
import { MiniPlayer } from '../navigation/mini-player';
import { PlayerProvider } from '@/context/player-context';

export const MainLayout = ({ children }: Children) => {
  return (
    <PlayerProvider>
      <main className='flex relative h-screen w-screen overflow-hidden'>
        <div className='hidden lg:block w-60'>
          <Sidebar />
        </div>
        <div className='flex relative flex-col h-full w-full lg:w-[calc(100%-15rem)]'>
          <div className='absolute lg:relative z-50 bg-none w-full'>
            <Navbar />
          </div>
          <div className='h-full w-full lg:h-[calc(100%-4rem)]'>{children}</div>
        </div>
        <div className='absolute h-16 w-full bottom-0 bg-neutral-950/30 backdrop-blur-md text-neutral-50 z-50 border-t border-neutral-800'>
          <MiniPlayer audiosrc='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' />
        </div>
      </main>
    </PlayerProvider>
  );
};
