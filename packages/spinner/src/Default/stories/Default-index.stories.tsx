import * as React from 'react';
import { component as Spinner } from '../index';
import { SpinnerDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { animation } from './Default-animation.stories';

export const Default = (args: SpinnerDefaultProps) => <Spinner {...args} />;

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  animation: animation.defaultValue,
};

Default.argTypes = {
  variant,
  size,
  theme,
  animation,
};
