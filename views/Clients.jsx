import { SimpleGrid, Flex, Box, Text } from '@chakra-ui/react';

export const Clients = () => {
  return (
    <Flex
      direction='column'
      bgImage='url(/galaxy.png)'
      bgSize='cover'
      bgPosition='bottom'
    >
      <SimpleGrid columns={{ lg: 3, sm: 1 }} gap='5' my='5rem' px='3rem'>
        <Flex
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
          p='2rem'
          bg='#9cbece'
        >
          <Box fontSize='75px' color='#030407'>
            <i className='fa-solid fa-laptop-code'></i>
          </Box>
          <Text fontSize='20px' mb='1rem' color='#030407' opacity='1'>
            Our Clients
          </Text>
          <Text
            fontSize='18px'
            mb='1rem'
            color='#030407'
            opacity='0.5'
            textAlign='left'
          >
            We are capital. Our primary clients are software engineers just like
            us. We built Silver Door because as engineers; we needed a way to
            leverage collective bargaining and safely help launch startups.
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
          p='2rem'
          bg='#9cbece'
        >
          <Box fontSize='75px' color='#030407'>
            <i className='fa-solid fa-seedling'></i>
          </Box>
          <Text fontSize='20px' mb='1rem' color='#030407' opacity='1'>
            Silver Door's Equity Partnerships
          </Text>
          <Text
            fontSize='18px'
            mb='1rem'
            color='#030407'
            opacity='0.5'
            textAlign='left'
          >
            We engage in early-stage equity partnerships with visionary
            entrepreneurs, providing long term technical expertise and technical
            strategy.
          </Text>
        </Flex>
        <Flex
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
          p='2rem'
          bg='#9cbece'
        >
          <Box fontSize='75px' color='#030407'>
            <i className='fa-sharp fa-solid fa-suitcase'></i>
          </Box>
          <Text fontSize='20px' mb='1rem' color='#030407' opacity='1'>
            Our Partners
          </Text>
          <Text
            fontSize='18px'
            mb='1rem'
            color='#030407'
            opacity='0.5'
            textAlign='left'
          >
            We offer an infinite upfront cost basis advantage over other
            development service providers. We reduce partner burn rates during
            minimum viable product, product market fit, and scaling growth
            cycles.
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};
