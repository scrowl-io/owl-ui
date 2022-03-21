import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDashboardProps } from '../Dashboard.types';

import { display } from './Dashboard-display.stories';
import { appearance } from './Dashboard-appearance.stories';
import { size } from './Dashboard-size.stories';
import { theme } from './Dashboard-theme.stories';

export const Dashboard = (args: IconsDashboardProps) => (
  <Icon {...args}></Icon>
);

Dashboard.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Dashboard.argTypes = {
  display,
  appearance,
  size,
  theme,
};
