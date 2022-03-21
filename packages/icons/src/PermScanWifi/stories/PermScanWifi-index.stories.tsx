import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPermScanWifiProps } from '../PermScanWifi.types';

import { display } from './PermScanWifi-display.stories';
import { appearance } from './PermScanWifi-appearance.stories';
import { size } from './PermScanWifi-size.stories';
import { theme } from './PermScanWifi-theme.stories';

export const PermScanWifi = (args: IconsPermScanWifiProps) => (
  <Icon {...args}></Icon>
);

PermScanWifi.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PermScanWifi.argTypes = {
  display,
  appearance,
  size,
  theme,
};
