import { GameBoard } from '@interfaces/GameBoard.interface';

const directions = [
  { dx: 1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: 1, dy: 1 },
  { dx: 1, dy: -1 },
];

/**
 * Permet de vérifier si un joueur a gagné
 * En fonction de l'objet direction, on itère de tous les côtés :
 * On vérifie d'abord à l'horizontal, puis à la verticale, puis en diagonale
 * @param board
 * @param winningCount
 */
export const checkWin = (
  board: GameBoard[][],
  winningCount: number,
): number | null => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      const cell = board[x][y];
      if (!cell.playerId) continue;

      for (const { dx, dy } of directions) {
        if (
          Array.from({ length: winningCount }).every((_, i) => {
            const checkX = x + i * dx;
            const checkY = y + i * dy;
            return board[checkX]?.[checkY]?.playerId === cell.playerId;
          })
        ) {
          return cell.playerId;
        }
      }
    }
  }
  return null;
};
