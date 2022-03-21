import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBatteryFullProps } from '../BatteryFull.types';

import { display } from './BatteryFull-display.stories';
import { appearance } from './BatteryFull-appearance.stories';
import { size } from './BatteryFull-size.stories';
import { theme } from './BatteryFull-theme.stories';

export const BatteryFull = (args: IconsBatteryFullProps) => (
  <Icon {...args}></Icon>
);

BatteryFull.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BatteryFull.argTypes = {
  display,
  appearance,
  size,
  theme,
};
