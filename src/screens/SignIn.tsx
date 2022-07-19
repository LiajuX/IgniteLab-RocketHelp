import { useState } from 'react';
import { Heading, Icon, useTheme, VStack } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import Logo from '../assets/logo_primary.svg';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  function handleSignIn() {
    
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
    
      <Button title="Entrar" onPress={handleSignIn} />
    </VStack>
  );
}
