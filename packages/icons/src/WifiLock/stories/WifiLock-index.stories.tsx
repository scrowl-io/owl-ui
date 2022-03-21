import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWifiLockProps } from '../WifiLock.types';

import { display } from './WifiLock-display.stories';
import { appearance } from './WifiLock-appearance.stories';
import { size } from './WifiLock-size.stories';
import { theme } from './WifiLock-theme.stories';

export const WifiLock = (args: IconsWifiLockProps) => (
  <Icon {...args}></Icon>
);

WifiLock.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

WifiLock.argTypes = {
  display,
  appearance,
  size,
  theme,
};
