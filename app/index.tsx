import { Redirect } from 'expo-router';
import CustomSplashScreen from '../SplashScreen';
import React from 'react';
import useInit from '@hooks/useInit';

const Index = () => {
  const { fontsLoaded, splashScreenEndAnimated } = useInit();

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded || !splashScreenEndAnimated) {
    return <CustomSplashScreen />;
  }

  return <Redirect href="/sign-in" />;
};

export default Index;
