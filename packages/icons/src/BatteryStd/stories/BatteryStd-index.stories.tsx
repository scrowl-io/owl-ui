import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBatteryStdProps } from '../BatteryStd.types';

import { display } from './BatteryStd-display.stories';
import { appearance } from './BatteryStd-appearance.stories';
import { size } from './BatteryStd-size.stories';
import { theme } from './BatteryStd-theme.stories';

export const BatteryStd = (args: IconsBatteryStdProps) => (
  <Icon {...args}></Icon>
);

BatteryStd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BatteryStd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
