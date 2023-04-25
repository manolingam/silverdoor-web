import { Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      console.log(inView);
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);
  return (
    <Flex
      direction='column'
      alignItems='left'
      justifyContent='center'
      minH='100vh'
      px={{ lg: '5rem', sm: '3rem' }}
      mr='1rem'
      bg='#1e1e1e'
      id='team'
      className='section'
    >
      <Text
        fontFamily='rajdhani'
        opacity='1'
        fontSize={{ lg: '48px', sm: '28px' }}
        textTransform='uppercase'
        mb='1rem'
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
            <motion.div
              key={index}
              ref={ref}
              animate={controls}
              initial={{ opacity: 0 }}
              transition={{ delay: index * 0.5 }}
            >
              <Flex direction='column' alignItems='center'>
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
                  fontSize={{ sm: '18px', lg: '24px' }}
                  textTransform='uppercase'
                >
                  {team.name}
                </Text>
                <Text opacity='0.6' fontSize={{ sm: '12px', lg: '18px' }}>
                  {team.title}
                </Text>
              </Flex>
            </motion.div>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
