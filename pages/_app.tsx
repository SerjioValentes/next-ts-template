'use client';

/* eslint-disable */

import React from 'react';
// import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import theme from '@/helpers/ThemeProvider';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import { storeMain } from '@/store';
// import { createStore } from '@reduxjs/toolkit';

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    // <Provider store={storeMain}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    // </Provider>
  );
}
