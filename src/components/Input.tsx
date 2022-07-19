import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput 
      h={14}
      size="md"
      borderWidth={0}
      bg="gray.700"
      color="white"
      fontSize="md"
      fontFamily="body"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700",
      }}
      {...rest}
    />
  );
}
