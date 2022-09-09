import React, { useState } from 'react';
import { Form } from '../index';
import { FormDefaultProps, FormDataProps } from '../Default.types';
import { Button } from '../../../../button/src/index';

import { variant } from './Default-variant.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: FormDefaultProps) => {
  const [studentData, setStudentData] = useState({
    email: '',
    firstName: '',
    city: 'toronto',
    age: 30,
    work: '',
    alreadyEnrolled: false,
  });

  const handleChange = (e: React.BaseSyntheticEvent) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setStudentData({ ...studentData, [e.target.name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(studentData);
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
          id: 'firstName',
          value: studentData.firstName,
          name: 'firstName',
          type: 'text',
          placeholder: 'Please enter your name',
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
          id: 'city',
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
    {
      type: 'check',
      inputProps: {
        label: {
          content: 'Remote',
          htmlFor: 'remote',
        },
        control: {
          onChange: handleChange,
          name: 'work',
          value: 'remote',
          type: 'radio',
        },
      },
    },
    {
      type: 'check',
      inputProps: {
        label: {
          content: 'In-Person',
          htmlFor: 'inPerson',
        },
        control: {
          onChange: handleChange,
          name: 'work',
          value: 'in-person',
          type: 'radio',
        },
      },
    },
    {
      type: 'check',
      inputProps: {
        label: {
          content: 'Are you already enrolled in any other courses?',
          htmlFor: 'alreadyEnrolled',
        },
        control: {
          onChange: handleChange,
          name: 'alreadyEnrolled',
          type: 'switch',
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
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
};

Default.argTypes = {
  variant,
  pxScale,
  theme,
};
