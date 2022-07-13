import * as React from 'react';
import { Input } from '../index';
import { InputDefaultProps, InputProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const inputProps: InputProps = {
  id: 'input',
  type: 'email',
  label: 'Email Address',
  optionalprops: {
    as: 'input',
    disabled: false,
    readOnly: false,
    plaintext: false,
    placeholder: 'example@email.com',
  },
};

export const Default = (args: InputDefaultProps) => <Input {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  inputProps: inputProps,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
