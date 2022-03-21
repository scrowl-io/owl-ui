import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBluetoothConnectedProps } from '../BluetoothConnected.types';

import { display } from './BluetoothConnected-display.stories';
import { appearance } from './BluetoothConnected-appearance.stories';
import { size } from './BluetoothConnected-size.stories';
import { theme } from './BluetoothConnected-theme.stories';

export const BluetoothConnected = (args: IconsBluetoothConnectedProps) => (
  <Icon {...args}></Icon>
);

BluetoothConnected.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BluetoothConnected.argTypes = {
  display,
  appearance,
  size,
  theme,
};
