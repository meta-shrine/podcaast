'use client';

import React, { createContext, useContext, useState } from 'react';
import { Children } from '@/interface/types';

const PlayerContext = createContext({
  isPlayerActive: false,
  setIsPlayerActive: (isActive: boolean) => {},
});

const usePlayerState = () => {
  return useContext(PlayerContext);
};

const PlayerProvider = ({ children }: Children) => {
  const [isPlayerActive, setIsPlayerActive] = useState(false);

  const contextValue = {
    isPlayerActive,
    setIsPlayerActive,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerProvider, usePlayerState };
