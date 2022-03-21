import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSignalWifiOffProps } from '../SignalWifiOff.types';

import { display } from './SignalWifiOff-display.stories';
import { appearance } from './SignalWifiOff-appearance.stories';
import { size } from './SignalWifiOff-size.stories';
import { theme } from './SignalWifiOff-theme.stories';

export const SignalWifiOff = (args: IconsSignalWifiOffProps) => (
  <Icon {...args}></Icon>
);

SignalWifiOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SignalWifiOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
