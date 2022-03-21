import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddAlarmProps } from '../AddAlarm.types';

import { display } from './AddAlarm-display.stories';
import { appearance } from './AddAlarm-appearance.stories';
import { size } from './AddAlarm-size.stories';
import { theme } from './AddAlarm-theme.stories';

export const AddAlarm = (args: IconsAddAlarmProps) => (
  <Icon {...args}></Icon>
);

AddAlarm.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddAlarm.argTypes = {
  display,
  appearance,
  size,
  theme,
};
