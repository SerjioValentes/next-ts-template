'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 760,
      lg: 1024,
      xl: 1250,
    },
  },
  typography: {
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#fff',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#1976d2',
    },
    secondary: {
      main: '#1976d2',
      contrastText: '#1976d2',
    },
  },

});

export default theme;
