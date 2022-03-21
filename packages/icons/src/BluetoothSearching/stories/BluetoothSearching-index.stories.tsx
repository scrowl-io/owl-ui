import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBluetoothSearchingProps } from '../BluetoothSearching.types';

import { display } from './BluetoothSearching-display.stories';
import { appearance } from './BluetoothSearching-appearance.stories';
import { size } from './BluetoothSearching-size.stories';
import { theme } from './BluetoothSearching-theme.stories';

export const BluetoothSearching = (args: IconsBluetoothSearchingProps) => (
  <Icon {...args}></Icon>
);

BluetoothSearching.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BluetoothSearching.argTypes = {
  display,
  appearance,
  size,
  theme,
};
