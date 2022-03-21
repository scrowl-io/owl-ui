import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsBluetoothProps } from '../SettingsBluetooth.types';

import { display } from './SettingsBluetooth-display.stories';
import { appearance } from './SettingsBluetooth-appearance.stories';
import { size } from './SettingsBluetooth-size.stories';
import { theme } from './SettingsBluetooth-theme.stories';

export const SettingsBluetooth = (args: IconsSettingsBluetoothProps) => (
  <Icon {...args}></Icon>
);

SettingsBluetooth.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsBluetooth.argTypes = {
  display,
  appearance,
  size,
  theme,
};
