import { Flex, SimpleGrid, Text, Image, Box } from '@chakra-ui/react';

const projectCopy = [
  {
    name: 'METL',
    desc: 'Advanced integration of US baking systems with decentralized finance mechanics to create a secure and compliant fiat onramp for users and dApps.',
    image: '/metl.png'
  },
  {
    name: 'Hype Magazine',
    desc: 'ArtDrop is a unique phigital vending machine marketplace that makes selling digital assets as east as loading a vending machine. Each ArtDrop machine creates a branded custom experience and standalone platform made to create and sell digital collectibles. ',
    image: '/hype.png'
  }
];

export const Projects = () => {
  return (
    <Flex direction='column' px='3rem' py='3rem' bg='#0d101a'>
      <Text
        fontSize='28px'
        mb='1rem'
        color='#9cbece'
        opacity='1'
        textTransform='uppercase'
      >
        Projects
      </Text>
      <SimpleGrid columns={{ lg: 2, sm: 1 }} gap='5' color='#9cbece'>
        {projectCopy.map((project, index) => {
          return (
            <Flex
              key={index}
              direction='column'
              justifyContent='flex-start'
              alignItems='center'
              p='2rem'
            >
              <Image
                src={project.image}
                alt={project.name}
                h={{ lg: '70px', sm: '50px' }}
                w='auto'
                objectFit='contain'
                mb='2rem'
              />

              <Text
                fontSize='18px'
                mb='1rem'
                color='#9cbece'
                opacity='0.5'
                textAlign='left'
              >
                {project.desc}
              </Text>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
