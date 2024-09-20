import React from 'react';
import { View, Text } from 'react-native';
import * as Application from 'expo-application';

/**
 * SplashScreen RN, qui s'affichera juste après le natif
 * @constructor
 */
const CustomSplashScreen = () => {
  return (
    <View className="flex h-full">
      <View className="absolute bottom-0 w-full flex justify-center">
        <Text className="text-blue font-lucioleRegular uppercase text-label text-right mb-5 pr-5">
          {Application.nativeApplicationVersion}
        </Text>
      </View>
    </View>
  );
};

export default CustomSplashScreen;
