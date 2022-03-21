import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTrendingDownProps } from '../TrendingDown.types';

import { display } from './TrendingDown-display.stories';
import { appearance } from './TrendingDown-appearance.stories';
import { size } from './TrendingDown-size.stories';
import { theme } from './TrendingDown-theme.stories';

export const TrendingDown = (args: IconsTrendingDownProps) => (
  <Icon {...args}></Icon>
);

TrendingDown.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TrendingDown.argTypes = {
  display,
  appearance,
  size,
  theme,
};
