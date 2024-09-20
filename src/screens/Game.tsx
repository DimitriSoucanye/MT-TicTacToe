import React, { useEffect } from 'react';
import { Pressable, View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { GameModes } from '@const/GameModes';
import { GameBoard } from '@components/GameBoard';
import { useGame } from '@context/GameContext';

/**
 * Composant pour le screen Home
 * @constructor
 */
const Game = () => {
  const { mode } = useLocalSearchParams<{
    mode: string;
  }>();
  const { setBoard, board, resetBoard } = useGame();
  const currentGameMode = GameModes.find((gameMode) => gameMode.mode === mode);

  useEffect(() => {
    if (currentGameMode && setBoard) {
      setBoard(
        Array.from({ length: currentGameMode.boardSize }, () =>
          Array(currentGameMode.boardSize).fill({}),
        ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentGameMode || !board) {
    return null;
  }

  return (
    <View className={'bg-blue flex h-full justify-center px-[10px]'}>
      <GameBoard boardSize={currentGameMode.boardSize} />
      <Pressable
        className="border-2 border-white p-3 rounded-full mt-4"
        onPress={() => resetBoard && resetBoard()}
      >
        <Text className="text-white text-xl text-center">Nouvelle partie</Text>
      </Pressable>
    </View>
  );
};

export default Game;
