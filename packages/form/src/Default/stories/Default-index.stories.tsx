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
    city: 'toronto',
    age: 30,
    remote: false,
    inPerson: false,
    alreadyEnrolled: false,
  });

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleCheckChange = (e: React.BaseSyntheticEvent) => {
    if (e.target.type === 'radio') {
      setStudentData({
        ...studentData,
        // for now, manually resetting any radio states back to false with the exception of the most recently-clicked
        remote: false,
        inPerson: false,
        [e.target.id]: true,
      });
    } else {
      // below is more of a quick fix--is it worth making an interface for the studentData object?
      const target = studentData[e.target.id as keyof typeof studentData];
      setStudentData({
        ...studentData,
        [e.target.id]: !target,
      });
    }
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
    // Unlike the other field types, 'name' is used in Form.Check to group checkboxes. This is needed to ensure radio options are mutually exclusive when part of a group. For Form.Check, use 'Id' to link with state rather than 'name'
    // See below for two mutually-exclusive radios, then an independant switch toggle
    {
      type: 'check',
      inputProps: {
        label: {
          content: 'Remote',
          htmlFor: 'remote',
        },
        control: {
          id: 'remote',
          onChange: handleCheckChange,
          name: 'radios',
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
          id: 'inPerson',
          onChange: handleCheckChange,
          name: 'radios',
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
          id: 'alreadyEnrolled',
          onChange: handleCheckChange,
          name: 'toggle',
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
  size: size.defaultValue,
  theme: theme.defaultValue,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
