import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlagProps } from '../Flag.types';

import { display } from './Flag-display.stories';
import { appearance } from './Flag-appearance.stories';
import { size } from './Flag-size.stories';
import { theme } from './Flag-theme.stories';

export const Flag = (args: IconsFlagProps) => (
  <Icon {...args}></Icon>
);

Flag.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Flag.argTypes = {
  display,
  appearance,
  size,
  theme,
};
