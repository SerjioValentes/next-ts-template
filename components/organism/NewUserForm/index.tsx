import React from 'react';

import Input from '@/components/atom/Input';
import Box from '@mui/material/Box';
import Button from '@/components/atom/Button';

function NewUserForm() {
  return (
    <Box>
      <Input placeholder='placehlder' />
      <Input placeholder='placehlder' />
      <Button>save</Button>
    </Box>
  );
}
export default NewUserForm;
