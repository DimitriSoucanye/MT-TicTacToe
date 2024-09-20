import { ReactNode, useState } from 'react';
import { GameContext } from '@context/GameContext';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<string>();

  return (
    <GameContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
