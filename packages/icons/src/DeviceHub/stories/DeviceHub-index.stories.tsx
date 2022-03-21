import * as React from 'react';
import { component as Icon } from '../index';
import { IconsDeviceHubProps } from '../DeviceHub.types';

import { display } from './DeviceHub-display.stories';
import { appearance } from './DeviceHub-appearance.stories';
import { size } from './DeviceHub-size.stories';
import { theme } from './DeviceHub-theme.stories';

export const DeviceHub = (args: IconsDeviceHubProps) => (
  <Icon {...args}></Icon>
);

DeviceHub.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

DeviceHub.argTypes = {
  display,
  appearance,
  size,
  theme,
};
