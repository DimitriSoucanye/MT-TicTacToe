import { Text, TouchableOpacity } from 'react-native';
import { GameRowBoardProps } from '@interfaces/GameRowBoard.interface';
import { useGame } from '@context/GameContext';

/**
 * Composant pour une cellule du tableau
 * @param size Taille de la cellule (exprimée en px)
 * @param xPosition Position qu'a la cellule sur l'axe des x
 * @param yPosition Position qu'a la cellule sur l'axe des y
 * @constructor
 */
export const GameRowBoard = ({
  size,
  xPosition,
  yPosition,
}: GameRowBoardProps) => {
  const { setSelectedCell, board } = useGame();

  const boardCellData = board && board[yPosition][xPosition];

  return (
    <TouchableOpacity
      disabled={boardCellData?.playerId !== undefined}
      className={'border-[1px] border-white flex justify-center items-center'}
      style={{
        width: size,
        height: size,
      }}
      onPress={() => setSelectedCell && setSelectedCell(xPosition, yPosition)}
    >
      <Text
        className="text-white font-lucioleBold"
        style={{
          fontSize: size / 2,
        }}
      >
        {boardCellData?.playerId === 1
          ? 'X'
          : boardCellData?.playerId === 2
            ? 'O'
            : ''}
      </Text>
    </TouchableOpacity>
  );
};
