import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDevicesProps } from '../Devices.types';

import { display } from './Devices-display.stories';
import { appearance } from './Devices-appearance.stories';
import { size } from './Devices-size.stories';
import { theme } from './Devices-theme.stories';

export const Devices = (args: IconsDevicesProps) => (
  <Icon {...args}></Icon>
);

Devices.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Devices.argTypes = {
  display,
  appearance,
  size,
  theme,
};
