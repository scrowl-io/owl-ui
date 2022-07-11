import * as React from 'react';
import { Nav } from '../index';
import { NavDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

import { navItems } from './Default-navLinks.stories';

export const Default = (args: NavDefaultProps) => (
  <Nav {...args} as="ul">
    Hello World
  </Nav>
);

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  navItems: navItems,
};

Default.argTypes = {
  size,
  theme,
  navItems,
};
