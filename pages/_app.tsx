import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from 'utils/theme';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Augmented Reality on Cloud</title>
        <meta name="description" content="Developed by KRSBX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box width={'100vw'} height={'100vh'}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
