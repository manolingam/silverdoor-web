import { Flex, Button, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { containerVariants } from '../config';

export const Door = ({ setDoorUnlocked, setSelectedSection }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <Flex
        direction='row'
        alignItems='center'
        justifyContent='center'
        bg='#1e1e1e'
        h='100vh'
      >
        <Button
          mr={{ lg: '2rem', sm: '1rem' }}
          bg='#1e1e1e'
          bgImage="url('/button.png')"
          bgSize='contain'
          bgRepeat='no-repeat'
          bgPosition='center'
          opacity='0.7'
          id='button'
          minWidth={0}
          minHeight={0}
          _hover={{
            opacity: 1
          }}
          onMouseOver={() => {
            document.getElementById('logo-text').style.opacity = 1;
          }}
          onMouseLeave={() => {
            document.getElementById('logo-text').style.opacity = 0.7;
          }}
          onClick={() => {
            setDoorUnlocked((prevState) => !prevState);
            setSelectedSection('#about');
          }}
        />

        <Flex direction='column' alignItems='center'>
          <Image
            src='/door_light.png'
            alt='door light'
            w='20px'
            mb='18px'
            borderRadius='50%'
            boxShadow='0px 4px 4px #396e7a7f'
          />
          <Image src='/door.png' alt='door' w='240px' />
        </Flex>

        <Text
          fontSize={{ lg: '48px', sm: '36px' }}
          fontFamily='rajdhani'
          textTransform='uppercase'
          opacity='0.4'
          id='logo-text'
          color='#9cbece'
        >
          SilverDoor
        </Text>
      </Flex>
    </motion.div>
  );
};
