import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPortableWifiOffProps } from '../PortableWifiOff.types';

import { display } from './PortableWifiOff-display.stories';
import { appearance } from './PortableWifiOff-appearance.stories';
import { size } from './PortableWifiOff-size.stories';
import { theme } from './PortableWifiOff-theme.stories';

export const PortableWifiOff = (args: IconsPortableWifiOffProps) => (
  <Icon {...args}></Icon>
);

PortableWifiOff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PortableWifiOff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
