import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInsertChartProps } from '../InsertChart.types';

import { display } from './InsertChart-display.stories';
import { appearance } from './InsertChart-appearance.stories';
import { size } from './InsertChart-size.stories';
import { theme } from './InsertChart-theme.stories';

export const InsertChart = (args: IconsInsertChartProps) => (
  <Icon {...args}></Icon>
);

InsertChart.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InsertChart.argTypes = {
  display,
  appearance,
  size,
  theme,
};
