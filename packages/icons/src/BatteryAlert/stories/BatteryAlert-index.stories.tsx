import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBatteryAlertProps } from '../BatteryAlert.types';

import { display } from './BatteryAlert-display.stories';
import { appearance } from './BatteryAlert-appearance.stories';
import { size } from './BatteryAlert-size.stories';
import { theme } from './BatteryAlert-theme.stories';

export const BatteryAlert = (args: IconsBatteryAlertProps) => (
  <Icon {...args}></Icon>
);

BatteryAlert.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BatteryAlert.argTypes = {
  display,
  appearance,
  size,
  theme,
};
