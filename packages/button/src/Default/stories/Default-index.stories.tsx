import * as React from 'react';
import { Button } from '../index';
import { ButtonDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

export const Default = (args: ButtonDefaultProps) => (
  <Button {...args}>Hello World</Button>
);

Default.args = {
  variant: variant.defaultValue,
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
};

Default.argTypes = {
  variant,
  pxScale,
  theme,
};
