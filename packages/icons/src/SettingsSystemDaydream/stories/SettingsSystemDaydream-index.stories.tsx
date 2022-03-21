import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsSystemDaydreamProps } from '../SettingsSystemDaydream.types';

import { display } from './SettingsSystemDaydream-display.stories';
import { appearance } from './SettingsSystemDaydream-appearance.stories';
import { size } from './SettingsSystemDaydream-size.stories';
import { theme } from './SettingsSystemDaydream-theme.stories';

export const SettingsSystemDaydream = (args: IconsSettingsSystemDaydreamProps) => (
  <Icon {...args}></Icon>
);

SettingsSystemDaydream.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsSystemDaydream.argTypes = {
  display,
  appearance,
  size,
  theme,
};
