import * as React from 'react';
import { component as Toast } from '../index';
import { ToastDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: ToastDefaultProps) => <Toast {...args}>Hello World</Toast>;

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
