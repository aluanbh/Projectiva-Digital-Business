import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import Home from '@/screens/Home';
import Loading from '@/components/Loading';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontLoaded) {
    return <Loading simple />;
  }

  return (
    <>
      <StatusBar hidden />
      <Home />
    </>
  );
}
