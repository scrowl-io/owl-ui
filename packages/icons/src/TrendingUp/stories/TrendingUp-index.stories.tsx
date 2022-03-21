import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTrendingUpProps } from '../TrendingUp.types';

import { display } from './TrendingUp-display.stories';
import { appearance } from './TrendingUp-appearance.stories';
import { size } from './TrendingUp-size.stories';
import { theme } from './TrendingUp-theme.stories';

export const TrendingUp = (args: IconsTrendingUpProps) => (
  <Icon {...args}></Icon>
);

TrendingUp.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TrendingUp.argTypes = {
  display,
  appearance,
  size,
  theme,
};
