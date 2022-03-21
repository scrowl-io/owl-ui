import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAlarmProps } from '../Alarm.types';

import { display } from './Alarm-display.stories';
import { appearance } from './Alarm-appearance.stories';
import { size } from './Alarm-size.stories';
import { theme } from './Alarm-theme.stories';

export const Alarm = (args: IconsAlarmProps) => (
  <Icon {...args}></Icon>
);

Alarm.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Alarm.argTypes = {
  display,
  appearance,
  size,
  theme,
};
