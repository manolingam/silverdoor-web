import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';

import Fonts from '../Fonts';

import '../styles/globals.css';

const breakpoints = {
  sm: '320px',
  md: '580px',
  md2: '742px',
  xtra: '900px',
  lg: '1026px',
  lg2: '1220px',
  xl: '1450px'
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
      <Flex direction='column' height='100vh' w='100vw' bg='white'>
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
