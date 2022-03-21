import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTimeToLeaveProps } from '../TimeToLeave.types';

import { display } from './TimeToLeave-display.stories';
import { appearance } from './TimeToLeave-appearance.stories';
import { size } from './TimeToLeave-size.stories';
import { theme } from './TimeToLeave-theme.stories';

export const TimeToLeave = (args: IconsTimeToLeaveProps) => (
  <Icon {...args}></Icon>
);

TimeToLeave.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TimeToLeave.argTypes = {
  display,
  appearance,
  size,
  theme,
};
