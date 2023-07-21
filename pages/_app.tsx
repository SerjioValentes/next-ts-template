import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import theme from '@/helpers/ThemeProvider';
import { ThemeProvider } from '@mui/material';
import store from '../store/index';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
