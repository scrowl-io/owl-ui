import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSignalWifi4BarProps } from '../SignalWifi4Bar.types';

import { display } from './SignalWifi4Bar-display.stories';
import { appearance } from './SignalWifi4Bar-appearance.stories';
import { size } from './SignalWifi4Bar-size.stories';
import { theme } from './SignalWifi4Bar-theme.stories';

export const SignalWifi4Bar = (args: IconsSignalWifi4BarProps) => (
  <Icon {...args}></Icon>
);

SignalWifi4Bar.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SignalWifi4Bar.argTypes = {
  display,
  appearance,
  size,
  theme,
};
