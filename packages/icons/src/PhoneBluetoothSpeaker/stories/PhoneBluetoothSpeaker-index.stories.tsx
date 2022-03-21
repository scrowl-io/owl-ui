import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhoneBluetoothSpeakerProps } from '../PhoneBluetoothSpeaker.types';

import { display } from './PhoneBluetoothSpeaker-display.stories';
import { appearance } from './PhoneBluetoothSpeaker-appearance.stories';
import { size } from './PhoneBluetoothSpeaker-size.stories';
import { theme } from './PhoneBluetoothSpeaker-theme.stories';

export const PhoneBluetoothSpeaker = (args: IconsPhoneBluetoothSpeakerProps) => (
  <Icon {...args}></Icon>
);

PhoneBluetoothSpeaker.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhoneBluetoothSpeaker.argTypes = {
  display,
  appearance,
  size,
  theme,
};
