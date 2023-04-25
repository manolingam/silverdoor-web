import { Flex, SimpleGrid, Text, Image, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projectCopy = [
  {
    name: 'METL',
    desc: 'Advanced integration of US baking systems with decentralized finance mechanics to create a secure and compliant fiat onramp for users and dApps',
    image: '/metl.png'
  },
  {
    name: 'Hype Magazine',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut suscipit nulla. Etiam vestibulum bibendum orci non rhoncus. Nam venenatis, enim porta molestie viverra, arcu nulla rhoncus dolor, at bibendum tellus lacus vitae risus.',
    image: '/hype.png'
  }
];

export const Projects = () => {
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
      id='projects'
      className='section'
    >
      <Text
        fontFamily='rajdhani'
        opacity='1'
        fontSize={{ lg: '48px', sm: '28px' }}
        textTransform='uppercase'
        mb='2rem'
        color='#9cbece'
      >
        Projects
      </Text>
      <SimpleGrid columns='1' gap='5' color='#9cbece' fontFamily='rajdhani'>
        {projectCopy.map((project, index) => {
          return (
            <motion.div
              key={index}
              ref={ref}
              animate={controls}
              initial={{ opacity: 0 }}
              transition={{ delay: index * 0.5 }}
            >
              <Flex
                w='100%'
                direction={{ lg: 'row', sm: 'column' }}
                alignItems='left'
                justifyContent='center'
              >
                <Box
                  mr={{ lg: '2rem', sm: '0' }}
                  mb={{ lg: '0', sm: '2rem' }}
                  minW={{ lg: '150px', sm: '50px' }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    h={{ lg: '100px', sm: '50px' }}
                    w='auto'
                    objectFit='contain'
                  />
                </Box>
                <Text
                  opacity='0.6'
                  boxShadow={{
                    lg: '5px 5px 9px #141414, -5px -5px 9px #282828;',
                    sm: 'none'
                  }}
                  borderRadius='20px'
                  fontSize={{ lg: '24px', sm: '18px' }}
                  p={{ lg: '2rem', sm: '0' }}
                >
                  {project.desc}
                </Text>
              </Flex>
            </motion.div>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};
