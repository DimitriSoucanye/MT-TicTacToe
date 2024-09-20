import { GameBoardProps } from '@interfaces/GameBoard.interface';
import { Dimensions, View } from 'react-native';
import { GameRowBoard } from '@components/GameRowBoard';
import React, { ReactNode } from 'react';

const { width: screenWidth } = Dimensions.get('window');

/**
 * Composant pour le tableau du jeu
 * @param boardSize Taille du tableau à générer
 * @constructor
 */
export const GameBoard = ({ boardSize }: GameBoardProps) => {
  /**
   * Génération de toutes les cellules nécessaires à une ligne
   * @param lineCount Nombre de cellule que l'on veut afficher
   * @param lineIndex Index de la ligne sur laquelle on se trouve
   */
  const renderLine = (lineCount: number, lineIndex: number): ReactNode[] => {
    let rows: ReactNode[] = [];

    for (let i = 0; i < lineCount; i++) {
      rows.push(
        <GameRowBoard
          size={(screenWidth - 30) / lineCount}
          xPosition={i}
          yPosition={lineIndex}
          key={i}
        />,
      );
    }

    return rows;
  };

  /**
   * Génération de tous les lignes nécessaires à notre tableau
   * @param rowCount Nombre de lignes que l'on veut afficher
   */
  const renderBoard = (rowCount: number): ReactNode[] => {
    let board: ReactNode[] = [];

    for (let i = 0; i < rowCount; i++) {
      board = [...renderLine(rowCount, i), board];
    }

    return board;
  };

  return (
    <View className={'flex flex-row items-center justify-center flex-wrap'}>
      {renderBoard(boardSize)}
    </View>
  );
};
