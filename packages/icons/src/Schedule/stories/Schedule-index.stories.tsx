import * as React from 'react';
import { component as Icon } from '../index';
import { IconsScheduleProps } from '../Schedule.types';

import { appearance } from './Schedule-appearance.stories';
import { size } from './Schedule-size.stories';
import { theme } from './Schedule-theme.stories';

export const Schedule = (args: IconsScheduleProps) => (
  <Icon {...args}></Icon>
);

Schedule.args = {
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Schedule.argTypes = {
  appearance,
  size,
  theme,
};
