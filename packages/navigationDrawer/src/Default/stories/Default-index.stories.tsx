import * as React from 'react';
import { component as NavigationDrawer } from '../index';
import { NavigationDrawerDefaultProps } from '../Default.types';

import { appearance } from './Default-appearance.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: NavigationDrawerDefaultProps) => (
  <NavigationDrawer {...args}>Hello World</NavigationDrawer>
);

Default.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Default.argTypes = {
  appearance,
  size,
  theme,
};
