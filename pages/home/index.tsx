'use client';

import React from 'react';
import { Box } from '@mui/material';
import FirstSection from '@/components/organism/HomePage/FirstSection';
// import FirstSectionRHF from '@/components/organism/HomePage/FIrstSectionRHF';
// import AuthForm from '@/components/organism/AuthForm';

function HomePage() {
  // const [loginFormAccess, setLoginFormAccess] = useState<string | null | undefined>('');
  // const winAcces = window.localStorage.getItem('accessToken');

  // useEffect(() => {
  //   console.log(winAcces);
  //   setLoginFormAccess(winAcces);
  // }, []);

  return (
    <Box sx={{
      backgroundImage: 'url(/assets/bg/background.jpg)',
      width: '100%',
      // backgroundRepeat: 'repeat',
      // backgroundSize: '300%',
      // height: '100vh',
    }}
    >
      {/* {!winAcces
        ? <AuthForm />} */}
      <Box sx={{
        p: 4,
      }}
      >
        <FirstSection />
      </Box>
      {/* <img src="/assets/bg/bg_hor.jpg" /> */}
      {/* <FirstSectionRHF /> */}
    </Box>
  );
}

export default HomePage;
