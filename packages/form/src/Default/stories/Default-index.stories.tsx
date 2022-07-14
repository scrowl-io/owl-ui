import React, { useState } from 'react';
import { Form } from '../index';
import { FormDefaultProps, FormDataProps } from '../Default.types';
import { Button } from '../../../../button/src/index';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { formData } from './form-data';

export const Default = (args: FormDefaultProps) => {
  const [studentData, setStudentData] = useState({
    email: '',
    firstName: '',
    age: 30,
  });

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const formData: FormDataProps[] = [
    {
      type: 'input',
      inputProps: {
        label: {
          content: 'Email Address',
          htmlFor: 'email',
        },
        control: {
          onChange: handleChange,
          id: 'email',
          value: studentData.email,
          name: 'email',
          type: 'email',
          disabled: false,
          readOnly: false,
          plaintext: false,
          placeholder: 'example@email.com',
        },
      },
    },
    {
      type: 'input',
      inputProps: {
        label: {
          content: 'First Name',
          htmlFor: 'firstName',
        },
        control: {
          onChange: handleChange,
          value: studentData.firstName,
          name: 'firstName',
          type: 'text',
          placeholder: 'Sean...',
        },
      },
    },
    {
      type: 'range',
      inputProps: {
        label: {
          content: 'Range',
          htmlFor: 'age',
        },
        control: {
          onChange: handleChange,
          value: studentData.age,
          name: 'age',
          min: 0,
          max: 100,
        },
      },
    },
  ];

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Form {...args} formData={formData} onSubmit={handleSubmit}>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  formData: formData,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
