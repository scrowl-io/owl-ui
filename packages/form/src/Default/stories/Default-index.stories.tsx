import * as React from 'react';
import { Form } from '../index';
import { FormDefaultProps } from '../Default.types';
import { Button } from '../../../../button/src/index';
// import { inputProps } from '../../../../input/src/Default/stories/Default-index.stories';

import { FieldInput } from '../../FieldInput';
import { Input } from '../../../../input/src/Default';
import { Range } from '../../../../range/src/Default';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
  console.log('click');
  alert('click');
};

export const Default = (args: FormDefaultProps) => {
  const emailProps = {
    id: 'email',
    type: 'email',
    label: 'Email Address',
    optionalprops: {
      disabled: false,
      readOnly: false,
      plaintext: false,
      placeholder: 'example@email.com',
    },
  };

  const passwordProps = {
    id: 'password',
    type: 'password',
    label: 'Password',
    optionalprops: {
      disabled: false,
      readOnly: false,
      plaintext: false,
      placeholder: 'password',
    },
  };

  const addressProps = {
    id: 'address',
    type: 'text',
    label: 'Address',
    optionalprops: {
      disabled: false,
      readOnly: false,
      plaintext: false,
      placeholder: '123 Example st.',
    },
  };

  const rangeProps = {
    id: 'range',
    label: 'Age',
    optionalprops: {
      disabled: false,
      min: 0,
      max: 100,
    },
  };

  return (
    <Form {...args}>
      <Input inputProps={emailProps} />
      <Input inputProps={passwordProps} />
      <FieldInput inputProps={addressProps} />
      <Range rangeProps={rangeProps} />
      <Button onClick={handleSubmit}>Submit</Button>
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
