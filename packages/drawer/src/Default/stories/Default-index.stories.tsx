import * as React from 'react';
import { Drawer } from '../index';
import { DrawerDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { placement } from './Default-placement.stories';

export const Default = (args: DrawerDefaultProps) => <Drawer {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  placement: placement.defaultValue,
  headerText: `Drawer Header`,
  bodyText: `Some text as placeholder. In real life you can have the elements you
  have chosen. Like, text, images, lists, etc.`,
};

Default.argTypes = {
  variant,
  size,
  theme,
  placement,
};
