import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAlarmOffProps } from '../AlarmOff.types';

import { display } from './AlarmOff-display.stories';
import { appearance } from './AlarmOff-appearance.stories';
import { size } from './AlarmOff-size.stories';
import { theme } from './AlarmOff-theme.stories';

export const AlarmOff = (args: IconsAlarmOffProps) => (
  <Icon {...args}></Icon>
);

AlarmOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AlarmOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
