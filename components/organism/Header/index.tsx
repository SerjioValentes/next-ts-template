'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import TemporaryDrawer from '@/components/molecule/Drawer';
import useWindowSize from '@/hooks/useWindowSize';
import menuItemList from './headerList';

const Header = () => {
  const mdSize = useWindowSize();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      m: 'auto',
      p: '20px 50px',

    }}
    >
      <Typography variant="h5">VasilKamalov</Typography>

      <Box sx={{
        display: 'flex',
        gap: '20px',
      }}
      >
        {mdSize ? <TemporaryDrawer />
          : menuItemList.map((item) => (
            <Link href={item.link} key={item.id}>
              <Typography variant="subtitle2">
                {item.title}
              </Typography>
            </Link>
          ))}
      </Box>
    </Box>
  );
};
export default Header;
