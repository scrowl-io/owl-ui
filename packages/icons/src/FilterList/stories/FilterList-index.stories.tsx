import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterListProps } from '../FilterList.types';

import { display } from './FilterList-display.stories';
import { appearance } from './FilterList-appearance.stories';
import { size } from './FilterList-size.stories';
import { theme } from './FilterList-theme.stories';

export const FilterList = (args: IconsFilterListProps) => (
  <Icon {...args}></Icon>
);

FilterList.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterList.argTypes = {
  display,
  appearance,
  size,
  theme,
};
