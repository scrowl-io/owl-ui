import * as React from 'react';
import { Spinner } from '../index';
import { SpinnerDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';
import { animation } from './Default-animation.stories';

export const Default = (args: SpinnerDefaultProps) => <Spinner {...args} />;

Default.args = {
  variant: variant.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  animation: animation.defaultValue,
};

Default.argTypes = {
  variant,
  pxScale,
  theme,
  animation,
};
