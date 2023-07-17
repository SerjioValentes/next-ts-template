import React, { FC, ReactNode } from 'react';

import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField/TextField';

type Props = {
    placeholder: string;
    onChange?: () => void;
  };

const Input: FC<TextFieldProps & Props> = ({
    placeholder,
    onChange,
    ...others }) => {
  return (
    <TextField   
    fullWidth
    size="small"
    onChange={onChange}
    placeholder={placeholder}
    {...others} />
  );
}
export default Input;
