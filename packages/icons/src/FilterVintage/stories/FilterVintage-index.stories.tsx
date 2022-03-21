import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFilterVintageProps } from '../FilterVintage.types';

import { display } from './FilterVintage-display.stories';
import { appearance } from './FilterVintage-appearance.stories';
import { size } from './FilterVintage-size.stories';
import { theme } from './FilterVintage-theme.stories';

export const FilterVintage = (args: IconsFilterVintageProps) => (
  <Icon {...args}></Icon>
);

FilterVintage.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FilterVintage.argTypes = {
  display,
  appearance,
  size,
  theme,
};
