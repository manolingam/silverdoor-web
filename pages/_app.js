import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';

import { Header } from '../shared/Header';

import Fonts from '../Fonts';

import '../styles/globals.css';
import { Footer } from '../shared/Footer';

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
      <Header />
      <Flex
        direction='column'
        w='100vw'
        bg='#030407'
        fontFamily='rajdhani'
        py='3rem'
      >
        <Component {...pageProps} />
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
