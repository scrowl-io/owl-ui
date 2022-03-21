import * as React from 'react';
import { component as Icon } from '../index';
import { IconsScheduleProps } from '../Schedule.types';

import { display } from './Schedule-display.stories';
import { appearance } from './Schedule-appearance.stories';
import { size } from './Schedule-size.stories';
import { theme } from './Schedule-theme.stories';

export const Schedule = (args: IconsScheduleProps) => (
  <Icon {...args}></Icon>
);

Schedule.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Schedule.argTypes = {
  display,
  appearance,
  size,
  theme,
};
