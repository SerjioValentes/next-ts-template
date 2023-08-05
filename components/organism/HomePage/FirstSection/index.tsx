'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import './style.scss';

const FirstSection = () => {
  const firstSection = 'VasilKamalov';

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <div className="content">
        <Typography
          variant="h2"
        >
          {firstSection}

        </Typography>
        <Typography
          variant="h2"
        >
          {firstSection}

        </Typography>
      </div>
      <Typography
        variant="subtitle1"
        color="GrayText"
        sx={{
          mt: 3,
          ml: 31,
        }}
      >
        Photographer
      </Typography>
    </Box>
  );
};

export default FirstSection;
