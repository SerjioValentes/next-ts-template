import React from 'react';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import FirstSectionWrapper from './style';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const FirstSection = () => (
  <FirstSectionWrapper>
    <Box sx={{
      display: 'flex',
    }}
    >

      <Box sx={{
      //   display: 'flex',
        width: '60vw',
        height: '100vh',
        background: '#000',
      }}
      >
        dsfsd
      </Box>

      <Box sx={{
      //   display: 'flex',
        width: '40vw',
        height: '100vh',
        background: 'red',
      }}
      >
        dsfsd
      </Box>
    </Box>
  </FirstSectionWrapper>
);

export default FirstSection;
