import * as React from 'react';
import { component as Icon } from '../index';
import { IconsShowChartProps } from '../ShowChart.types';

import { display } from './ShowChart-display.stories';
import { appearance } from './ShowChart-appearance.stories';
import { size } from './ShowChart-size.stories';
import { theme } from './ShowChart-theme.stories';

export const ShowChart = (args: IconsShowChartProps) => (
  <Icon {...args}></Icon>
);

ShowChart.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ShowChart.argTypes = {
  display,
  appearance,
  size,
  theme,
};
