import React from 'react';

import Input from '@/components/atom/Input';
import Button from '@/components/atom/Button';
import FormWrapper from './style';

const NewUserForm = () => {
  const onChange = () => {

  };
  return (

    <FormWrapper>
      <Input placeholder="name" />
      <Input placeholder="surname" onChange={onChange} />
      <Input placeholder="email" onChange={onChange} />
      <Input placeholder="about yourself" onChange={onChange} />
      <Button>save</Button>
    </FormWrapper>
  );
};
export default NewUserForm;
