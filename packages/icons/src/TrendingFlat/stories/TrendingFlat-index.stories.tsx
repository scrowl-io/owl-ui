import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTrendingFlatProps } from '../TrendingFlat.types';

import { display } from './TrendingFlat-display.stories';
import { appearance } from './TrendingFlat-appearance.stories';
import { size } from './TrendingFlat-size.stories';
import { theme } from './TrendingFlat-theme.stories';

export const TrendingFlat = (args: IconsTrendingFlatProps) => (
  <Icon {...args}></Icon>
);

TrendingFlat.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TrendingFlat.argTypes = {
  display,
  appearance,
  size,
  theme,
};
