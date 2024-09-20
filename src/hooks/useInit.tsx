import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

const customFonts = {
  'Luciole-Bold': require('@assets/fonts/Luciole-Bold.ttf'),
  'Luciole-Regular': require('@assets/fonts/Luciole-Regular.ttf'),
};

/**
 * Hook permettant l'initialisation de l'application
 */
const useInit = () => {
  const [fontsLoaded] = useFonts(customFonts);
  const [splashScreenEndAnimated, setSplashScreenEndAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenEndAnimated(true);
    }, 2000);
  }, []);

  return {
    fontsLoaded,
    splashScreenEndAnimated,
  };
};

export default useInit;
