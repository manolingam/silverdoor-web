import { SimpleGrid, Button, Text, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { containerVariants } from '../config';

export const Door = ({ updateSection }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <SimpleGrid columns='1' placeItems='center'>
        <Box className='door-container' display='flex' flexDirection='row'>
          <Button
            mr={{ lg: '2rem', sm: '1rem' }}
            bgImage="url('/button.png')"
            bgSize='cover'
            bgPosition='center'
            opacity='0.4'
            id='button'
            _hover={{
              opacity: 0.7
            }}
            onMouseOver={() => {
              document.getElementById('logo-text').style.opacity = 0.7;
            }}
            onMouseLeave={() => {
              document.getElementById('logo-text').style.opacity = 0.4;
            }}
            onClick={() => updateSection((prevState) => prevState + 1)}
          />
          <Box className='door-frame' w='240px' h='320px'>
            <Box className='door' w='200px' h='300px'>
              <Box className='door-handle'></Box>
            </Box>
          </Box>

          <Text
            fontSize={{ lg: '48px', sm: '36px' }}
            fontFamily='rajdhani'
            textTransform='uppercase'
            opacity='0.4'
            id='logo-text'
          >
            SilverDoor
          </Text>
        </Box>
      </SimpleGrid>
    </motion.div>
  );
};
