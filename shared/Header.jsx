import { Flex, Link as ChakraLink, Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      bg='#030407'
      px='3rem'
      pt='1rem'
      fontFamily='rajdhani'
    >
      <Text
        fontSize={{ lg: '36px', sm: '24px' }}
        textTransform='uppercase'
        color='#9cbece'
      >
        SilverDoor
      </Text>
      <Flex direction='row' alignItems='center' color='#9cbece'>
        <ChakraLink
          href=''
          isExternal
          fontSize={{ lg: '25px', sm: '20px' }}
          mr={{ lg: '20px', sm: '15px' }}
        >
          <span>
            <i className='fa-brands fa-telegram'></i>
          </span>
        </ChakraLink>
        <ChakraLink
          href=''
          isExternal
          fontSize={{ lg: '25px', sm: '20px' }}
          mr={{ lg: '20px', sm: '15px' }}
        >
          <span>
            <i className='fa-brands fa-discord'></i>
          </span>
        </ChakraLink>
        <ChakraLink href='' isExternal fontSize={{ lg: '25px', sm: '20px' }}>
          <span>
            <i className='fab fa-twitter'></i>
          </span>
        </ChakraLink>
      </Flex>
    </Flex>
  );
};
