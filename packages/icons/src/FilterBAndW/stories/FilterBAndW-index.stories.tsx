import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterBAndWProps } from '../FilterBAndW.types';

import { display } from './FilterBAndW-display.stories';
import { appearance } from './FilterBAndW-appearance.stories';
import { size } from './FilterBAndW-size.stories';
import { theme } from './FilterBAndW-theme.stories';

export const FilterBAndW = (args: IconsFilterBAndWProps) => (
  <Icon {...args}></Icon>
);

FilterBAndW.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterBAndW.argTypes = {
  display,
  appearance,
  size,
  theme,
};
