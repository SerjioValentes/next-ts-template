import React from 'react';
import { Stack, Typography } from '@mui/material';
import ImageNext from '@/components/atom/Image';

const AboutMeSection = () => (
  <Stack
    direction="row"
    spacing={2}
    justifyContent="space-between"
    sx={{
      px: 20,
    }}
  >
    <ImageNext width="300px" height="300px" imgSrc="/assets/imgs/nature_result.jpg" alt="Vasil Kamalov photography" />
    <Typography>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit
    </Typography>
  </Stack>
);
export default AboutMeSection;
