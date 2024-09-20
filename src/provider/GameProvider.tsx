import { ReactNode, useState } from 'react';
import { GameContext } from '@context/GameContext';
import { GameBoard } from '@interfaces/GameBoard.interface';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<string>();
  const [board, setBoard] = useState<GameBoard[][]>();
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true);

  /**
   * Fonction pour définir la cellule sélectionnée
   * @param x Position x de la cellule sélectionnée
   * @param y Position y de la cellule sélectionnée
   */
  const setSelectedCell = (x: number, y: number) => {
    const newBoard: GameBoard[][] = [...(board || [])];

    newBoard[y][x] = {
      playerId: isFirstPlayerTurn ? 1 : 2,
      date: new Date(),
    };

    setBoard(newBoard);
    setIsFirstPlayerTurn(!isFirstPlayerTurn);
  };

  return (
    <GameContext.Provider
      value={{
        mode,
        setMode,
        board,
        setBoard,
        setSelectedCell,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
