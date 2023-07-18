import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#1976d2',
    },
    secondary: {
      main: '#1976d2',
      contrastText: '#1976d2',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: 'darkslategray',
        },
      },
      variants: [],
    },
  },
});

export default theme;
