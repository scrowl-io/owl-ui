import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterProps } from '../Filter.types';

import { display } from './Filter-display.stories';
import { appearance } from './Filter-appearance.stories';
import { size } from './Filter-size.stories';
import { theme } from './Filter-theme.stories';

export const Filter = (args: IconsFilterProps) => (
  <Icon {...args}></Icon>
);

Filter.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Filter.argTypes = {
  display,
  appearance,
  size,
  theme,
};
