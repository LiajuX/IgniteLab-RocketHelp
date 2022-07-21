import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner size={64} color="green.500" />
    </Center>
  );
}
