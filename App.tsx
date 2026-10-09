import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Playground } from '@/components/playground';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Playground />;
}
