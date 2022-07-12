import * as React from 'react';
import { Input } from '../index';
import { InputDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: InputDefaultProps) => <Input {...args}>Hello World</Input>;

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
