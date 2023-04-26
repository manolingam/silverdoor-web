import { SimpleGrid, Flex, Text, Image } from '@chakra-ui/react';

export const Intro = () => {
  return (
    <SimpleGrid columns={{ lg: 2, sm: 1 }} px='3rem'>
      <Flex direction='column' justifyContent='center'>
        <Text fontSize='20px' mb='1rem' color='#9cbece' opacity='0.5'>
          We are capital. As a worker’s cooperative for software engineers; our
          members are the clients. We nurture, guide, empower and protect
          software engineers. Our members are encouraged to form technical teams
          and join early stage startups. We provide mentorship, and support to
          our members throughout the lifecycle of an equity partnership. Our
          partnership lifecycle allows us to alleviate pressure and burnout on
          engineers by providing reinforcements as needed.
        </Text>
      </Flex>
      <Image src='/galaxy_door.png' alt='galaxy door' w='300px' mx='auto' />
    </SimpleGrid>
  );
};
