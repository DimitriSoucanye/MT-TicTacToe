import { checkWin } from '@utils/gameUtils';
import { GameBoard } from '@interfaces/GameBoard.interface';

describe('Test de la fonction checkWin', () => {
  const createBoard = (
    positions: { x: number; y: number; playerId: number }[],
    size: number,
  ): GameBoard[][] => {
    const board: GameBoard[][] = Array.from({ length: size }, () =>
      Array(size).fill({}),
    );

    positions.forEach(({ x, y, playerId }) => {
      board[x][y].playerId = playerId;
    });

    return board;
  };

  test('Tableau 3x3, le gagnant est le joueur 1', () => {
    const board = createBoard(
      [
        { x: 0, y: 0, playerId: 1 },
        { x: 0, y: 1, playerId: 1 },
        { x: 0, y: 2, playerId: 1 },
      ],
      3,
    );

    expect(checkWin(board, 3)).toBe(1);
  });
});
