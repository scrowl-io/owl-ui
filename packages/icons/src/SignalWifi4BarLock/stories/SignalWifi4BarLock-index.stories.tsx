import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSignalWifi4BarLockProps } from '../SignalWifi4BarLock.types';

import { display } from './SignalWifi4BarLock-display.stories';
import { appearance } from './SignalWifi4BarLock-appearance.stories';
import { size } from './SignalWifi4BarLock-size.stories';
import { theme } from './SignalWifi4BarLock-theme.stories';

export const SignalWifi4BarLock = (args: IconsSignalWifi4BarLockProps) => (
  <Icon {...args}></Icon>
);

SignalWifi4BarLock.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SignalWifi4BarLock.argTypes = {
  display,
  appearance,
  size,
  theme,
};
