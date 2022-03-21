import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBuildProps } from '../Build.types';

import { display } from './Build-display.stories';
import { appearance } from './Build-appearance.stories';
import { size } from './Build-size.stories';
import { theme } from './Build-theme.stories';

export const Build = (args: IconsBuildProps) => (
  <Icon {...args}></Icon>
);

Build.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Build.argTypes = {
  display,
  appearance,
  size,
  theme,
};
