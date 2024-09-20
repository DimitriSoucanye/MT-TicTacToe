import { createContext, useContext } from 'react';
import { GameContextType } from '@interfaces/GameContext.interface';

export const GameContext = createContext<GameContextType>({});

/**
 * Hook pour récupérer le contexte du jeu
 */
export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("Le contexte n'existe pas");
  }
  return context;
};
