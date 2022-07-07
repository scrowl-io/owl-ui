import * as React from 'react';
import { NavBar } from '../index';
import { NavBarDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { linkColor } from './Default-linkColor.stories';

export const Default = (args: NavBarDefaultProps) => <NavBar {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  linkColor: linkColor.defaultValue,
};

Default.argTypes = {
  variant,
  size,
  theme,
  linkColor,
};
