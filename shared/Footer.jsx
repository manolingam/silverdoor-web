import { Flex, Text, Link as ChakraLink, VStack } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      bg='#9cbece'
      px='3rem'
      py='1rem'
      fontFamily='rajdhani'
    >
      <Text
        fontSize={{ lg: '36px', sm: '24px' }}
        textTransform='uppercase'
        color='#030407'
      >
        SilverDoor
      </Text>

      <ChakraLink
        href='https://twitter.com/saimano1996'
        isExternal
        fontSize='.6rem'
        fontWeight='bold'
      >
        built with ❤️ by Saimano
      </ChakraLink>
    </Flex>
  );
};
