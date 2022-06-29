import * as React from 'react';
import { Nav } from '../index';
import { NavDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { alignment } from './Default-alignment.stories';

export const Default = (args: NavDefaultProps) => (
  <Nav {...args}>Hello World</Nav>
);

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  alignment: alignment.defaultValue,
  disabled: true,
};

Default.argTypes = {
  variant,
  size,
  theme,
  alignment,
};
