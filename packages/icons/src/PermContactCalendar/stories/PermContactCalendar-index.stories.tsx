import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPermContactCalendarProps } from '../PermContactCalendar.types';

import { display } from './PermContactCalendar-display.stories';
import { appearance } from './PermContactCalendar-appearance.stories';
import { size } from './PermContactCalendar-size.stories';
import { theme } from './PermContactCalendar-theme.stories';

export const PermContactCalendar = (args: IconsPermContactCalendarProps) => (
  <Icon {...args}></Icon>
);

PermContactCalendar.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PermContactCalendar.argTypes = {
  display,
  appearance,
  size,
  theme,
};
