import { 
  Box, 
  Circle, 
  HStack, 
  IPressableProps, 
  Pressable, 
  Text, 
  useTheme, 
  VStack 
} from 'native-base';
import { CircleWavyCheck, ClockAfternoon, Hourglass } from 'phosphor-react-native';

export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
}

type Props = IPressableProps & {
  data: OrderProps;
}

export function Order({ data, ...rest }: Props) {
  const { colors } = useTheme();

  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        mb={4}
        rounded="sm"
        bg="gray.600"
        overflow="hidden"
      >
        <Box w={2} h="full" bg={statusColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Patrimônio {data.patrimony}
          </Text>

          <HStack alignItems="center" mt={0.5}>
            <ClockAfternoon color={colors.gray[300]} size={18} />
          
            <Text ml={1} color="gray.200" fontSize="xs">
              {data.when}
            </Text>
          </HStack>
        </VStack>

        <Circle w={12} h={12} mr={5} bg="gray.500">
          {
            data.status === 'closed' 
              ? <CircleWavyCheck size={24} color={statusColor} />
              : <Hourglass size={24} color={statusColor} />
          }
        </Circle>
      </HStack>
    </Pressable>
  );
}
