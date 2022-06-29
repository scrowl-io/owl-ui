import * as React from 'react';
import { Badge } from '../index';
import { BadgeDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { pill } from './Default-pill.stories';

export const Default = (args: BadgeDefaultProps) => (
  <Badge {...args}>Hello World</Badge>
);

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  pill: pill.defaultValue,
};

Default.argTypes = {
  variant,
  size,
  theme,
  pill,
};
