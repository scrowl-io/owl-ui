import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccessAlarmProps } from '../AccessAlarm.types';

import { display } from './AccessAlarm-display.stories';
import { appearance } from './AccessAlarm-appearance.stories';
import { size } from './AccessAlarm-size.stories';
import { theme } from './AccessAlarm-theme.stories';

export const AccessAlarm = (args: IconsAccessAlarmProps) => (
  <Icon {...args}></Icon>
);

AccessAlarm.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AccessAlarm.argTypes = {
  display,
  appearance,
  size,
  theme,
};
