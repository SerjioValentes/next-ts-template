'use client';

import theme from '@/helpers/ThemeProvider';
import styled from '@emotion/styled';

const FirstSectionWrapper = styled('div')({
  background: theme.palette.primary.main,
  flexDirection: 'column',
  border: '1px solid black',
  height: '100vh',
});

export default FirstSectionWrapper;
