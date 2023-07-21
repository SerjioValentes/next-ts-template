import React from 'react';
import AuthForm from '@/components/organism/AuthForm';
import { Box } from '@mui/material';
import FirstSection from '@/components/organism/HomePage/FirstBlock';

function HomePage() {
  return (
    <Box>
      <FirstSection />
      <AuthForm />
    </Box>
  );
}

export default HomePage;
