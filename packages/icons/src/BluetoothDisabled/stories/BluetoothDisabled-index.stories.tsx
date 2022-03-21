import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBluetoothDisabledProps } from '../BluetoothDisabled.types';

import { display } from './BluetoothDisabled-display.stories';
import { appearance } from './BluetoothDisabled-appearance.stories';
import { size } from './BluetoothDisabled-size.stories';
import { theme } from './BluetoothDisabled-theme.stories';

export const BluetoothDisabled = (args: IconsBluetoothDisabledProps) => (
  <Icon {...args}></Icon>
);

BluetoothDisabled.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BluetoothDisabled.argTypes = {
  display,
  appearance,
  size,
  theme,
};
