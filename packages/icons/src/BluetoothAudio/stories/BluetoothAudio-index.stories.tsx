import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBluetoothAudioProps } from '../BluetoothAudio.types';

import { display } from './BluetoothAudio-display.stories';
import { appearance } from './BluetoothAudio-appearance.stories';
import { size } from './BluetoothAudio-size.stories';
import { theme } from './BluetoothAudio-theme.stories';

export const BluetoothAudio = (args: IconsBluetoothAudioProps) => (
  <Icon {...args}></Icon>
);

BluetoothAudio.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BluetoothAudio.argTypes = {
  display,
  appearance,
  size,
  theme,
};
