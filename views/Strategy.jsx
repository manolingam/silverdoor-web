import { SimpleGrid, Flex, Text, Image } from '@chakra-ui/react';

export const Strategy = () => {
  return (
    <SimpleGrid columns={{ lg: 2, sm: 1 }} bg='#eeefe9' py='2rem' px='2rem'>
      <Flex direction='column' justifyContent='center'>
        <Text
          fontSize='20px'
          ml={{ lg: '2rem', sm: 0 }}
          mb={{ lg: 0, sm: '2rem' }}
          color='#030407'
          opacity='1'
        >
          Silver Door scales with greater engineering talent and advanced tools.
          We use blockchain tech for governance, equity tracking, invoicing and
          delegation of authority to maximize incentive alignment; and to
          minimize coordination costs. We also train our members how to use AI
          tools like Copilot, GPT4, Stable Diffusion and more. We nurture,
          guide, empower and protect our members.
        </Text>
      </Flex>
      <Image src='/retro.png' alt='retro building' w='300px' mx='auto' />
    </SimpleGrid>
  );
};
