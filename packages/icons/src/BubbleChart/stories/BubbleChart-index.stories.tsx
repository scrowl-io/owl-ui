import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBubbleChartProps } from '../BubbleChart.types';

import { display } from './BubbleChart-display.stories';
import { appearance } from './BubbleChart-appearance.stories';
import { size } from './BubbleChart-size.stories';
import { theme } from './BubbleChart-theme.stories';

export const BubbleChart = (args: IconsBubbleChartProps) => (
  <Icon {...args}></Icon>
);

BubbleChart.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BubbleChart.argTypes = {
  display,
  appearance,
  size,
  theme,
};
