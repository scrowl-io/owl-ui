import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAccessAlarmsProps } from '../AccessAlarms.types';

import { display } from './AccessAlarms-display.stories';
import { appearance } from './AccessAlarms-appearance.stories';
import { size } from './AccessAlarms-size.stories';
import { theme } from './AccessAlarms-theme.stories';

export const AccessAlarms = (args: IconsAccessAlarmsProps) => (
  <Icon {...args}></Icon>
);

AccessAlarms.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AccessAlarms.argTypes = {
  display,
  appearance,
  size,
  theme,
};
