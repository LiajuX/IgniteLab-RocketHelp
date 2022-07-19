import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
  title: string;
}

export function Header({ title, ...rest }: Props) {
  const { goBack } = useNavigation();
  
  const { colors } = useTheme();

  function handleGoBack() {
    goBack();
  }

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      w="full"
      pt={12}
      pb={6}
      bg="gray.600"
      {...rest} 
    >
      <IconButton 
        onPress={handleGoBack}
        icon={<CaretLeft size={24} color={colors.gray[200]} />}
      />

      <Heading
        flex={1}
        ml={-8}
        color="gray.100"
        fontSize="lg"
        textAlign="center"
      >
        {title}
      </Heading>
    </HStack>
  );
}
