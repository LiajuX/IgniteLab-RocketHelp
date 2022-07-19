import { NativeBaseProvider, StatusBar } from 'native-base';
import { 
  Roboto_400Regular, 
  Roboto_700Bold, 
  useFonts, 
} from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';

import { THEME } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      { fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
