'use client';
import React, { useCallback, useEffect, useState } from 'react';
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
import { usePlayerState } from '@/context/player-context';

export const MiniPlayer = ({ audiosrc }: { audiosrc: string }) => {
  const [audio, state, controls, ref] = useAudio({
    src: audiosrc,
    autoPlay: false,
  });
  const [progress, setProgress] = useState(state.time);
  const [duration, setDuration] = useState<number>(state.duration);
  const [volume, setVolume] = useState(state.volume);
  const { setIsPlayerActive } = usePlayerState();


  useEffect(() => {
    if (state.duration !== 0) {
      setDuration(state.buffered[0]?.end);
    } else {
      setDuration(state.duration);
    }
  }, [state.duration, state.buffered]);

  console.log(state);

  useEffect(() => {
    setProgress(state.time);
  }, [state.time]);

  const handleplay = () => {
    if (state.playing) {
      controls.pause();
    } else {
      controls.play();
      setIsPlayerActive(true);
    }
  };

  const handlemute = () => {
    if (state.muted) {
      controls.unmute();
    } else {
      controls.mute();
    }
  };

  const handleSeek = (value: number) => {
    setProgress(value);
    controls.seek(value);
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    controls.volume(value);
    controls.unmute();
  };
  return (
    <div className='h-full w-full flex justify-center items-center px-2 relative'>
      <div className='absolute -top-0.5 z-50 w-full left-0'>
        <Slider
          className='w-full h-0.5'
          title='volume'
          onValueChange={(e) => handleSeek(e[0])}
          value={[progress]}
          max={duration}
          step={0.01}
        />
        {audio}
      </div>
      <div className='w-full h-full flex justify-between items-center'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='h-12 w-[calc(100%-64px)] sm:w-fit rounded-lg flex gap-3 lg:basis-1/3'>
          <div className='h-12 w-12 aspect-square object-cover rounded-md overflow-hidden border border-neutral-500/50'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
              className=' object-cover'
            />
          </div>
          <div className='flex flex-col justify-center gap-1 w-[calc(100%-3.5rem)] '>
            <h2 className='text-sm font-medium text-neutral-300 overflow-hidden break-words text-ellipsis line-clamp-1'>
              EP1. Daily hurdles and how to overcome them easily. Lessons 101{' '}
            </h2>
            <div className='flex  text-xs font-light divide-neutral-400 '>
              <p className='pr-4 whitespace-nowrap break-words text-ellipsis '>
                Hailing the audiophiles
              </p>
            </div>
          </div>
        </div>
        <div className='h-full w-16 sm:w-fit flex justify-center items-center gap-3 lg:basis-1/3'>
          <button className='h-12 w-12 rounded-full p-4 hidden sm:flex gap-4 items-center group ease-in-out duration-200'>
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
          <button className='h-12 w-12 rounded-full p-4 hidden sm:flex gap-4 items-center  group ease-in-out duration-200'>
            <FaForward
              className='text-neutral-500 group-hover:text-neutral-400  group-hover:scale-110 ease-in-out duration-200'
              size='20'
            />
          </button>
        </div>
        <div className='w-fit hidden lg:flex justify-center items-center group relative basis-1/3'>
          <button
            onClick={handlemute}
            className='group ease-in-out duration-200'>
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
          <div className='absolute w-24 left-full pl-4 scale-x-0 opacity-0 overflow-hidden origin-left group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out h-12 flex items-center justify-start'>
            <Slider
              className='w-24 h-1 cursor-pointer'
              title='volume'
              onValueChange={(e) => handleVolumeChange(e[0])}
              value={[volume]}
              max={1}
              step={0.01}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
