import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDateRangeProps } from '../DateRange.types';

import { display } from './DateRange-display.stories';
import { appearance } from './DateRange-appearance.stories';
import { size } from './DateRange-size.stories';
import { theme } from './DateRange-theme.stories';

export const DateRange = (args: IconsDateRangeProps) => (
  <Icon {...args}></Icon>
);

DateRange.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DateRange.argTypes = {
  display,
  appearance,
  size,
  theme,
};
