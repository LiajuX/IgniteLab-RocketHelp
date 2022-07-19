import { Button as ButtonNativeBase, Heading, IButtonProps } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14} 
      rounded="sm"
      bg="green.700"
      _pressed={{
        bg: 'green.500'
      }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}