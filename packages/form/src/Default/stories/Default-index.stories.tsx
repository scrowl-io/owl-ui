import React, { useState } from 'react';
import { Form } from '../index';
import { FormDefaultProps, FormDataProps } from '../Default.types';
import { Button } from '../../../../button/src/index';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: FormDefaultProps) => {
  const [studentData, setStudentData] = useState({
    email: '',
    firstName: '',
    city: '',
    age: 30,
  });

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
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
      type: 'select',
      inputProps: {
        label: {
          content: 'City',
          htmlFor: 'city',
        },
        control: {
          name: 'city',
          value: studentData.city,
          onChange: handleChange,
          options: [
            {
              id: '1',
              label: 'Toronto',
              value: 'toronto',
            },
            {
              id: '2',
              label: 'Ottawa',
              value: 'ottawa',
            },
            {
              id: '3',
              label: 'London',
              value: 'london',
            },
            {
              id: '4',
              label: 'Halifax',
              value: 'halifax',
            },
          ],
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
};

Default.argTypes = {
  variant,
  size,
  theme,
};
