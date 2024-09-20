import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { GameModes } from '@const/GameModes';
import { useRouter } from 'expo-router';
import { GameModeConfiguration } from '@interfaces/GameMode';

/**
 * Composant pour le screen GameMode
 * @constructor
 */
const GameMode = () => {
  const router = useRouter();

  /**
   * Redirige vers le screen Game avec le mode de jeu sélectionné
   * @param mode Le mode de jeu sélectionné
   */
  const launchGame = (mode: string) => {
    router.push({
      pathname: '/game',
      params: {
        mode,
      },
    });
  };

  return (
    <SafeAreaView className={'bg-blue flex h-full justify-around'}>
      <Text className="text-white font-lucioleBold text-center text-4xl">
        Tic Tac Toe
      </Text>
      <View>
        {GameModes.map((modeType: GameModeConfiguration) => {
          return (
            <TouchableOpacity
              key={modeType.mode}
              className={`rounded-full m-4 p-4 flex justify-center items-center ${modeType.color}`}
              onPress={() => launchGame(modeType.mode)}
            >
              <Text className={'text-white text-2xl font-lucioleBold'}>
                {modeType.mode}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default GameMode;
