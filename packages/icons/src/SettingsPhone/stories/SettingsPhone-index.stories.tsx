import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsPhoneProps } from '../SettingsPhone.types';

import { display } from './SettingsPhone-display.stories';
import { appearance } from './SettingsPhone-appearance.stories';
import { size } from './SettingsPhone-size.stories';
import { theme } from './SettingsPhone-theme.stories';

export const SettingsPhone = (args: IconsSettingsPhoneProps) => (
  <Icon {...args}></Icon>
);

SettingsPhone.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsPhone.argTypes = {
  display,
  appearance,
  size,
  theme,
};
