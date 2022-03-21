import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMultilineChartProps } from '../MultilineChart.types';

import { display } from './MultilineChart-display.stories';
import { appearance } from './MultilineChart-appearance.stories';
import { size } from './MultilineChart-size.stories';
import { theme } from './MultilineChart-theme.stories';

export const MultilineChart = (args: IconsMultilineChartProps) => (
  <Icon {...args}></Icon>
);

MultilineChart.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MultilineChart.argTypes = {
  display,
  appearance,
  size,
  theme,
};
