import * as React from 'react';
import { component as Icon } from '../index';
import { IconsTimerOffProps } from '../TimerOff.types';

import { display } from './TimerOff-display.stories';
import { appearance } from './TimerOff-appearance.stories';
import { size } from './TimerOff-size.stories';
import { theme } from './TimerOff-theme.stories';

export const TimerOff = (args: IconsTimerOffProps) => (
  <Icon {...args}></Icon>
);

TimerOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

TimerOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
