import { useState } from 'react';
import { 
  Center,
  FlatList,
  Heading,
  HStack, 
  IconButton, 
  Text, 
  useTheme, 
  VStack,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';

import Logo from '../assets/logo_secondary.svg';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '123',
      patrimony: '147456',
      when: '20/01/22 às 14h',
      status: 'open'
    },
    {
      id: '1234',
      patrimony: '1474556',
      when: '20/01/22 às 14h',
      status: 'closed'
    },
  ]);

  const navigation = useNavigation();

  const { colors } = useTheme();

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId });
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        alignItems="center"
        justifyContent="space-between"
        w="full"
        pt={16}
        px={6}
        pb={5}
        bg="gray.600"
      >
        <Logo />

        <IconButton 
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          w="full"
          mt={8}
          mb={4}
        >
          <Heading color="gray.100" size="md">Solicitações</Heading>
          
          <Text color="gray.200">
            {orders.length}
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            title="em andamento"
            type="open" 
            isActive={statusSelected === 'open'}
            onPress={() => setStatusSelected('open')}
          />

          <Filter
            title="finalizadas"
            type="closed"
            isActive={statusSelected === 'closed'}
            onPress={() => setStatusSelected('closed')}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => 
            <Order
              data={item}
              onPress={() => handleOpenDetails(item.id)} 
            />
          }
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          ListEmptyComponent={() => (
            <Center mt={9}>
              <ChatTeardropText size={48} color={colors.gray[400]} />
            
              <Text mt={6} color="gray.300" fontSize="xl" textAlign="center">
                Você ainda não possui{'\n'} 
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}                
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
