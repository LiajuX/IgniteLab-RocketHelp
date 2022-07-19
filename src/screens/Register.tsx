import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />

      <Input 
        my={4}
        placeholder="Número do patrimônio"
      />

      <Input 
        flex={1}
        mb={6}
        textAlignVertical="top"
        multiline
        placeholder="Descrição do problema"
      />

      <Button title="Cadastrar" />
    </VStack>
  );
}
