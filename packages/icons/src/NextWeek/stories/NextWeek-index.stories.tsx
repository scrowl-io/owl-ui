import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNextWeekProps } from '../NextWeek.types';

import { display } from './NextWeek-display.stories';
import { appearance } from './NextWeek-appearance.stories';
import { size } from './NextWeek-size.stories';
import { theme } from './NextWeek-theme.stories';

export const NextWeek = (args: IconsNextWeekProps) => (
  <Icon {...args}></Icon>
);

NextWeek.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NextWeek.argTypes = {
  display,
  appearance,
  size,
  theme,
};
