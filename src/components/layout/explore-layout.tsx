import { Children } from '@/interface/types';
import React from 'react';
import { Recommend } from '../common/recommend';

export const ExploreLayout = ({ children }: Children) => {
  return (
    <div className='h-full w-full mx-auto  gap-16 p-0.5'>
      <div className=' h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth'>{children}</div>
      <div className='hidden lg:block h-full overflow-y-scroll'>
        {/* <Recommend /> */}
      </div>
    </div>
  );
};
