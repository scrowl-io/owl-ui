import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBatteryChargingFullProps } from '../BatteryChargingFull.types';

import { display } from './BatteryChargingFull-display.stories';
import { appearance } from './BatteryChargingFull-appearance.stories';
import { size } from './BatteryChargingFull-size.stories';
import { theme } from './BatteryChargingFull-theme.stories';

export const BatteryChargingFull = (args: IconsBatteryChargingFullProps) => (
  <Icon {...args}></Icon>
);

BatteryChargingFull.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BatteryChargingFull.argTypes = {
  display,
  appearance,
  size,
  theme,
};
