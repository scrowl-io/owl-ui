import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPieChartProps } from '../PieChart.types';

import { display } from './PieChart-display.stories';
import { appearance } from './PieChart-appearance.stories';
import { size } from './PieChart-size.stories';
import { theme } from './PieChart-theme.stories';

export const PieChart = (args: IconsPieChartProps) => (
  <Icon {...args}></Icon>
);

PieChart.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PieChart.argTypes = {
  display,
  appearance,
  size,
  theme,
};
