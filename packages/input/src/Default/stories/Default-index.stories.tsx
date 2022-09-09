import * as React from 'react';
import { Input } from '../index';
import { TextInputDefaultProps, TextInputProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const inputProps: TextInputProps = {
  label: {
    content: 'Email Address',
    htmlFor: 'email',
  },
  control: {
    id: 'email',
    type: 'email',
    disabled: false,
    readOnly: false,
    plaintext: false,
    placeholder: 'example@email.com',
  },
};

export const Default = (args: TextInputDefaultProps) => <Input {...args} />;

Default.args = {
  variant: variant.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  inputProps: inputProps,
};

Default.argTypes = {
  variant,
  pxScale,
  theme,
};
