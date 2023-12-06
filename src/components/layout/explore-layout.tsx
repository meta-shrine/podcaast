import { Children } from '@/interface/types';
import React from 'react';
import { Recommend } from '../common/recommend';

export const ExploreLayout = ({ children }: Children) => {
  return (
    <div className='h-full w-full max-w-5xl mx-auto grid grid-cols-12 gap-6'>
      <div className='col-span-6 h-full p-4'>{children}</div>
      <div className='col-span-6 p-4 h-full overflow-y-scroll'>
        <Recommend />
      </div>
    </div>
  );
};
