import { ReactNode, useState } from 'react';
import { GameContext } from '@context/GameContext';
import { GameBoard } from '@interfaces/GameBoard.interface';
import { checkWin } from '@utils/gameUtils';
import { GameModeConfiguration } from '@interfaces/GameMode.interface';

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<GameModeConfiguration>();
  const [board, setBoard] = useState<GameBoard[][]>();
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<number | null>(null);

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

    const winner = checkWin(newBoard, mode?.winningRows || 3);

    if (winner !== null) {
      setWinner(winner);
    }

    setIsFirstPlayerTurn(!isFirstPlayerTurn);
  };

  /**
   * Permet de réinitialiser le tableau de jeu
   */
  const resetBoard = () => {
    setWinner(null);
    setIsFirstPlayerTurn(true);
    setBoard(
      Array.from({ length: board?.length || 0 }, () =>
        Array(board?.length || 0).fill({}),
      ),
    );
  };

  return (
    <GameContext.Provider
      value={{
        mode,
        setMode,
        board,
        setBoard,
        setSelectedCell,
        resetBoard,
        winner,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
