import * as React from 'react';
import { component as Icon } from '../index';
import { IconsViewWeekProps } from '../ViewWeek.types';

import { display } from './ViewWeek-display.stories';
import { appearance } from './ViewWeek-appearance.stories';
import { size } from './ViewWeek-size.stories';
import { theme } from './ViewWeek-theme.stories';

export const ViewWeek = (args: IconsViewWeekProps) => (
  <Icon {...args}></Icon>
);

ViewWeek.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ViewWeek.argTypes = {
  display,
  appearance,
  size,
  theme,
};
