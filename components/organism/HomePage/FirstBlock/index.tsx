'use client';

import React from 'react';
import { Button } from '@mui/material';
import client from '@/helpers/sanity/client';
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
    {/* <Button onClick={reqTest}>send req</Button> */}
  </FirstSectionWrapper>
);

export default FirstSection;
