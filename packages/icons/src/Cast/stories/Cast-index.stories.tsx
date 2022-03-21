import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCastProps } from '../Cast.types';

import { display } from './Cast-display.stories';
import { appearance } from './Cast-appearance.stories';
import { size } from './Cast-size.stories';
import { theme } from './Cast-theme.stories';

export const Cast = (args: IconsCastProps) => (
  <Icon {...args}></Icon>
);

Cast.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Cast.argTypes = {
  display,
  appearance,
  size,
  theme,
};
