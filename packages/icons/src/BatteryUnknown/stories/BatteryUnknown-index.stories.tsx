import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBatteryUnknownProps } from '../BatteryUnknown.types';

import { display } from './BatteryUnknown-display.stories';
import { appearance } from './BatteryUnknown-appearance.stories';
import { size } from './BatteryUnknown-size.stories';
import { theme } from './BatteryUnknown-theme.stories';

export const BatteryUnknown = (args: IconsBatteryUnknownProps) => (
  <Icon {...args}></Icon>
);

BatteryUnknown.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BatteryUnknown.argTypes = {
  display,
  appearance,
  size,
  theme,
};
