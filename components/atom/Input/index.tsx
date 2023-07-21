import React, { FC } from 'react';

import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField/TextField';

type Props = {
  placeholder: string;
};

const Input: FC<TextFieldProps & Props> = ({
  placeholder,
  onChange,
  ...others
}) => (
  <TextField
    fullWidth
    size="small"
    placeholder={placeholder}
    onChange={onChange}
    {...others}
  />
);

export default Input;
