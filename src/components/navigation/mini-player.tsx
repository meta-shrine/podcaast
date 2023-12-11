'use client';
import React, { useEffect, useState } from 'react';
import {
  FaPlay,
  FaBackward,
  FaForward,
  FaVolumeUp,
  FaPause,
  FaVolumeMute,
} from 'react-icons/fa';
import { Slider } from '../ui/slider';
import { useAudio } from 'react-use';

export const MiniPlayer = () => {
  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    autoPlay: false,
  });
  const [progress, setProgress] = useState(state.time);
  useEffect(() => {
    setProgress(state.time);
  }, [state.time]);
  console.log(state);
  console.log(progress);
  const handleplay = () => {
    if (state.playing) {
      controls.pause();
    } else {
      controls.play();
    }
  };
  const handlemute = () => {
    if (state.muted) {
      controls.unmute();
    } else {
      controls.mute();
    }
  };
  return (
    <div className='h-full w-full flex justify-center items-center px-12 relative'>
      <div className='absolute -top-0.5 z-50 w-full left-0'>
        <Slider
          className='w-full h-0.5'
          title='volume'
          onValueChange={(e) => {
            setProgress(e[0]);
            controls.seek(progress);
          }}
          value={[progress]}
          max={state.duration}
          step={1}
        />
      </div>
      {audio}
      <div className='h-full w-fit flex items-center gap-3'>
        <button className='h-12 w-12  rounded-full p-4 flex gap-4 items-center group ease-in-out duration-200'>
          <FaBackward
            className='text-neutral-500 group-hover:text-neutral-400  group-hover:scale-110 ease-in-out duration-200'
            size='20'
          />
        </button>
        <button
          onClick={handleplay}
          className='h-12 w-12 border-neutral-500 bg-neutral-700/50 rounded-full p-4 flex gap-4 items-center hover:bg-neutral-600/50 group ease-in-out duration-200'>
          {state.playing ? (
            <FaPause
              className='text-neutral-500 group-hover:text-neutral-400 group-hover:scale-110 ease-in-out duration-200'
              size='20'
            />
          ) : (
            <FaPlay
              className='text-neutral-500 group-hover:text-neutral-400 translate-x-0.5 group-hover:scale-110 ease-in-out duration-200'
              size='20'
            />
          )}
        </button>
        <button className='h-12 w-12   rounded-full p-4 flex gap-4 items-center  group ease-in-out duration-200'>
          <FaForward
            className='text-neutral-500 group-hover:text-neutral-400  group-hover:scale-110 ease-in-out duration-200'
            size='20'
          />
        </button>
      </div>
      <div className='w-fit flex items-center gap-4'>
        <button onClick={handlemute} className='group ease-in-out duration-200'>
          {state.muted ? (
            <FaVolumeMute
              className='text-neutral-500 group-hover:text-neutral-400  group-hover:scale-110 ease-in-out duration-200'
              size='20'
            />
          ) : (
            <FaVolumeUp
              className='text-neutral-500 group-hover:text-neutral-400  group-hover:scale-110 ease-in-out duration-200'
              size='20'
            />
          )}
        </button>
        <Slider className='w-24 h-1' title='volume' max={100} step={1} />
      </div>
    </div>
  );
};
