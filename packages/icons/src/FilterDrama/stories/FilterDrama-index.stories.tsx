import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterDramaProps } from '../FilterDrama.types';

import { display } from './FilterDrama-display.stories';
import { appearance } from './FilterDrama-appearance.stories';
import { size } from './FilterDrama-size.stories';
import { theme } from './FilterDrama-theme.stories';

export const FilterDrama = (args: IconsFilterDramaProps) => (
  <Icon {...args}></Icon>
);

FilterDrama.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterDrama.argTypes = {
  display,
  appearance,
  size,
  theme,
};
