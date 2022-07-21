import { useState } from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Heading, Icon, useTheme, VStack } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import Logo from '../assets/logo_primary.svg';

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  async function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha para entrar.');
    }   

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
          return Alert.alert('Entrar', 'E-mail ou senha inválida!');
        }

        if (error.code === 'auth/user-not-found') {
          return Alert.alert('Entrar', 'Usuário não encontrado!');
        }

        return Alert.alert('Entrar', 'Não foi possível acessar!')
      });
  }

  return (
    <VStack flex={1} alignItems="center" pt={24} px={8} bg="gray.600">
      <Logo />

      <Heading mt={20} mb={6} color="gray.100" fontSize="xl">
        Acesse sua conta
      </Heading>

      <Input
        mb={4} 
        value={email}
        placeholder="E-mail"
        onChangeText={setEmail}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
      />

      <Input 
        mb={8}
        secureTextEntry
        value={password}
        placeholder="Senha" 
        onChangeText={setPassword}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
      />
    
      <Button
        title="Entrar"
        onPress={handleSignIn} 
        isLoading={isLoading}
      />
    </VStack>
  );
}
