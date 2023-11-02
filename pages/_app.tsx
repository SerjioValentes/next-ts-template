'use client';

import React from 'react';
// import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import theme from '@/helpers/ThemeProvider';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import { setupStore } from '@/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  // <Provider store={setupStore}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  // </Provider>
  );
}
