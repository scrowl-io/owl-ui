import * as React from 'react';
import { component as Icon } from '../index';
import { IconsNetworkWifiProps } from '../NetworkWifi.types';

import { display } from './NetworkWifi-display.stories';
import { appearance } from './NetworkWifi-appearance.stories';
import { size } from './NetworkWifi-size.stories';
import { theme } from './NetworkWifi-theme.stories';

export const NetworkWifi = (args: IconsNetworkWifiProps) => (
  <Icon {...args}></Icon>
);

NetworkWifi.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

NetworkWifi.argTypes = {
  display,
  appearance,
  size,
  theme,
};
