import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWifiProps } from '../Wifi.types';

import { display } from './Wifi-display.stories';
import { appearance } from './Wifi-appearance.stories';
import { size } from './Wifi-size.stories';
import { theme } from './Wifi-theme.stories';

export const Wifi = (args: IconsWifiProps) => (
  <Icon {...args}></Icon>
);

Wifi.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Wifi.argTypes = {
  display,
  appearance,
  size,
  theme,
};
