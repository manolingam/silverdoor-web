import { Flex, Button, Text } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

import { containerVariants } from '../config';

export const Clients = ({ updateSection, title, content }) => {
  return (
    <Flex
      direction='column'
      bg='#eef0f1'
      h='100vh'
      w='100vw'
      alignItems='center'
      justifyContent='center'
      py='1rem'
    >
      <Button
        onClick={() => updateSection((prevState) => prevState - 1)}
        mb='auto'
      >
        <ArrowUpIcon />
      </Button>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        style={{ maxWidth: '70%' }}
      >
        <Text
          fontFamily='rajdhani'
          opacity='0.7'
          fontSize={{ lg: '48px', sm: '36px' }}
          textTransform='uppercase'
          mr='1rem'
        >
          {title}
        </Text>
        <Text
          fontFamily='rajdhani'
          opacity='0.5'
          fontSize={{ lg: '24px', sm: '18px' }}
        >
          {content}
        </Text>
      </motion.div>
      <Button
        onClick={() => updateSection((prevState) => prevState + 1)}
        mt='auto'
      >
        <ArrowDownIcon />
      </Button>
    </Flex>
  );
};
