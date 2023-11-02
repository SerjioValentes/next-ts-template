import React, { FC } from 'react';

import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField/TextField';

type Props = {
  label: string;
};

const MuiInputTextField: FC<TextFieldProps & Props> = ({
  label,
  onChange,
  ...others
}) => (
  <TextField
    fullWidth
    label={label}
    variant="filled"
    size="small"
    onChange={onChange}
    {...others}
  />
);

export default MuiInputTextField;
