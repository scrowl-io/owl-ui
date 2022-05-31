import * as React from 'react';
import { component as Button } from '../index';
import { ButtonDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: ButtonDefaultProps) => (
  <Button {...args}>Hello World</Button>
);

Default.args = {
  variant: 'primary',
  size: 'md',
  theme: 'Default',
};

Default.argTypes = {
  variant,
  size,
  theme,
};
