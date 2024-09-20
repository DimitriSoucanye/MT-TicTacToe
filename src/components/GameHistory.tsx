import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useGame } from '@context/GameContext';
import { GameBoard } from '@interfaces/GameBoard.interface';

/**
 * Composant pour le screen GameHistory
 * @constructor
 */
const GameHistory = () => {
  const { board } = useGame();

  if (!board) {
    return null;
  }

  /**
   * On récupère les cellules du plateau de jeu qui ont été jouées et on trie par date celles qui ont été jouées
   */
  const flattenedGameBoard: GameBoard[] = board
    .flat()
    .filter((cell) => !!cell.playerId)
    .sort((cell, cell2) =>
      cell.date.getTime() - cell2.date.getTime() ? -1 : 1,
    );

  return (
    <View className="max-h-[200px]">
      <FlatList
        data={flattenedGameBoard}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: GameBoard }) => (
          <View
            style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}
          >
            <Text>Joueur {item.playerId}</Text>
            <Text>Le {item.date?.toString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default GameHistory;
