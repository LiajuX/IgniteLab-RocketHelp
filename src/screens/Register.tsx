import { useState } from 'react';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleNewOrderRegister() {
    if (!patrimony || !description) {
      return Alert.alert('Registrar', 'Preencha todos os campos.');
    }

    setIsLoading(false);

    firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Solicitação', 'Solicitação registrada com sucesso.');
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        return Alert.alert('Solicitação', 'Não foi possível registrar a solicitação.')
      }); 
  }

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />

      <Input 
        my={4}
        value={patrimony}
        onChangeText={setPatrimony}
        placeholder="Número do patrimônio"
      />

      <Input 
        flex={1}
        mb={6}
        value={description}
        onChangeText={setDescription}
        textAlignVertical="top"
        multiline
        placeholder="Descrição do problema"
      />

      <Button
        title="Cadastrar" 
        mt={5}
        onPress={handleNewOrderRegister}
        isLoading={isLoading}
      />
    </VStack>
  );
}
