import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSignalCellularConnectedNoInternet4BarProps } from '../SignalCellularConnectedNoInternet4Bar.types';

import { display } from './SignalCellularConnectedNoInternet4Bar-display.stories';
import { appearance } from './SignalCellularConnectedNoInternet4Bar-appearance.stories';
import { size } from './SignalCellularConnectedNoInternet4Bar-size.stories';
import { theme } from './SignalCellularConnectedNoInternet4Bar-theme.stories';

export const SignalCellularConnectedNoInternet4Bar = (args: IconsSignalCellularConnectedNoInternet4BarProps) => (
  <Icon {...args}></Icon>
);

SignalCellularConnectedNoInternet4Bar.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SignalCellularConnectedNoInternet4Bar.argTypes = {
  display,
  appearance,
  size,
  theme,
};
