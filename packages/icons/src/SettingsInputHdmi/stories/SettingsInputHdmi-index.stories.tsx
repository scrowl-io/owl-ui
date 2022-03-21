import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsInputHdmiProps } from '../SettingsInputHdmi.types';

import { display } from './SettingsInputHdmi-display.stories';
import { appearance } from './SettingsInputHdmi-appearance.stories';
import { size } from './SettingsInputHdmi-size.stories';
import { theme } from './SettingsInputHdmi-theme.stories';

export const SettingsInputHdmi = (args: IconsSettingsInputHdmiProps) => (
  <Icon {...args}></Icon>
);

SettingsInputHdmi.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsInputHdmi.argTypes = {
  display,
  appearance,
  size,
  theme,
};
