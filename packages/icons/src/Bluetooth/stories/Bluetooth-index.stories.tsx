import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBluetoothProps } from '../Bluetooth.types';

import { display } from './Bluetooth-display.stories';
import { appearance } from './Bluetooth-appearance.stories';
import { size } from './Bluetooth-size.stories';
import { theme } from './Bluetooth-theme.stories';

export const Bluetooth = (args: IconsBluetoothProps) => (
  <Icon {...args}></Icon>
);

Bluetooth.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Bluetooth.argTypes = {
  display,
  appearance,
  size,
  theme,
};
