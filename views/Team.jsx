import { Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';

const teamCopy = [
  {
    name: 'Str4gard3n',
    title: 'Not the CEO',
    image: '/stargarden.png'
  },
  {
    name: 'Penguin',
    title: 'Pretty Much the CTO',
    image: '/penguin.png'
  },
  {
    name: 'Gnome',
    title: 'Omnistack Engineer',
    image: '/gnome.png'
  },
  {
    name: 'Salky',
    title: 'Reactmancer',
    image: '/salky.png'
  },
  {
    name: 'Bohn',
    title: 'Artist',
    image: '/bohn.png'
  }
];

export const Team = () => {
  return (
    <Flex
      direction='column'
      alignItems='left'
      justifyContent='center'
      px='3rem'
      py='2rem'
    >
      <Text
        fontFamily='rajdhani'
        opacity='1'
        fontSize='28px'
        textTransform='uppercase'
        mb='2rem'
        color='#9cbece'
      >
        Team Structure
      </Text>
      <SimpleGrid
        columns={{ lg: 5, sm: 2 }}
        gap='5'
        color='#9cbece'
        fontFamily='rajdhani'
        placeItems='center'
      >
        {teamCopy.map((team, index) => {
          return (
            <Flex key={index} direction='column' alignItems='center'>
              <Image
                src={team.image}
                alt={team.name}
                w={{ md: '250px', sm: '100px' }}
                h={{ md: '250px', sm: '100px' }}
                objectFit='cover'
                mb='1rem'
                boxShadow='5px 5px 9px #141414,
                  -5px -5px 9px #282828;'
                borderRadius='20px'
                overflow='hidden'
              />
              <Text
                fontSize={{ lg: '20px', sm: '18px' }}
                textTransform='uppercase'
              >
                {team.name}
              </Text>
              <Text opacity='0.6' fontSize={{ lg: '18px', sm: '12px' }}>
                {team.title}
              </Text>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
