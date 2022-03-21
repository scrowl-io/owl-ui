import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPieChartOutlinedProps } from '../PieChartOutlined.types';

import { display } from './PieChartOutlined-display.stories';
import { appearance } from './PieChartOutlined-appearance.stories';
import { size } from './PieChartOutlined-size.stories';
import { theme } from './PieChartOutlined-theme.stories';

export const PieChartOutlined = (args: IconsPieChartOutlinedProps) => (
  <Icon {...args}></Icon>
);

PieChartOutlined.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PieChartOutlined.argTypes = {
  display,
  appearance,
  size,
  theme,
};
