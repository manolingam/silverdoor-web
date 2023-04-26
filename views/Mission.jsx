import { SimpleGrid, Text } from '@chakra-ui/react';

export const Mission = () => {
  return (
    <SimpleGrid
      columns='1'
      bg='#fdf6c1'
      py='1rem'
      mt='5rem'
      placeItems='center'
      w='100vw'
    >
      <Text
        fontSize='28px'
        mb='1rem'
        color='#21394e'
        opacity='1'
        w={{ lg: '70%', sm: '100%' }}
        textAlign='center'
      >
        Our Mission
      </Text>
      <Text
        fontSize='20px'
        mb='1rem'
        color='#21394e'
        opacity='0.7'
        w={{ lg: '70%', sm: '70%' }}
        textAlign='center'
      >
        We are dedicated to fostering a collaborative and empowering space where
        ninja software engineers and visionary founders can unite in the pursuit
        of innovation, success, and impact.
      </Text>
    </SimpleGrid>
  );
};
