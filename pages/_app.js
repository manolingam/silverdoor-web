import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';

import Fonts from '../Fonts';

import '../styles/globals.css';

const breakpoints = {
  base: '320px',
  md: '580px',
  lg: '1026px'
};

const theme = extendTheme({
  colors: {},
  fonts: {
    rajdhani: "'Rajdhani', sans-serif"
  },
  styles: {
    global: {}
  },
  breakpoints
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Flex direction='column' height='100vh' w='100vw' bg='#1e1e1e'>
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
