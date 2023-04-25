import { Flex, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { copyText, containerVariants } from '../config';

export const Clients = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      console.log(inView);
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={containerVariants}
    >
      <Flex
        direction='column'
        alignItems='left'
        justifyContent='center'
        minH='100vh'
        px={{ lg: '5rem', sm: '1rem' }}
        mr='1rem'
        bg='#1e1e1e'
        id='clients'
        className='section'
      >
        <Flex
          direction='column'
          boxShadow={{
            lg: 'inset 5px 5px 10px #131313, inset -5px -5px 10px #292929',
            sm: 'none'
          }}
          borderRadius='20px'
          p='2rem'
        >
          <Text
            fontFamily='rajdhani'
            opacity='1'
            fontSize={{ lg: '48px', sm: '28px' }}
            textTransform='uppercase'
            mb='2rem'
            color='#9cbece'
          >
            {copyText[2].title}
          </Text>
          <Text
            fontFamily='rajdhani'
            opacity='0.5'
            fontSize={{ lg: '24px', sm: '18px' }}
            maxW={{ lg: '80%', sm: '100%' }}
            color='#9cbece'
          >
            {copyText[2].content}
          </Text>
        </Flex>
      </Flex>
    </motion.div>
  );
};
