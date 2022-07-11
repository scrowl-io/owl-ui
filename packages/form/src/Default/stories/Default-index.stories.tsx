import * as React from 'react';
import { Form } from '../index';
import { FormDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const formFields = [
  {
    id: 1,
    label: 'Email Address',
    controlId: 'formEmail',
    type: 'email',
    fieldProps: {
      placeholder: 'Enter your email',
      text: 'We will never share your email with anyone else',
    },
  },
  {
    id: 2,
    label: 'Password',
    controlId: 'formPassword',
    type: 'password',
    fieldProps: {
      placeholder: 'Password',
    },
  },
  {
    id: 3,
    label: 'Check me out',
    controlId: 'formCheck',
    type: 'checkbox',
  },
  {
    id: 4,
    label: 'Please Select',
    type: 'select',
    fieldProps: {
      options: [
        {
          id: '1',
          label: 'First Option',
        },
        {
          id: '2',
          label: 'Second Option',
        },
        {
          id: '3',
          label: 'Third Option',
        },
      ],
    },
  },
  {
    id: 5,
    label: 'Range Example',
    type: 'range',
    fieldProps: {
      min: 0,
      max: 20,
    },
  },
];

export const Default = (args: FormDefaultProps) => <Form {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  formFields: formFields,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
