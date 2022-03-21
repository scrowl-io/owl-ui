import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsBrightnessProps } from '../SettingsBrightness.types';

import { display } from './SettingsBrightness-display.stories';
import { appearance } from './SettingsBrightness-appearance.stories';
import { size } from './SettingsBrightness-size.stories';
import { theme } from './SettingsBrightness-theme.stories';

export const SettingsBrightness = (args: IconsSettingsBrightnessProps) => (
  <Icon {...args}></Icon>
);

SettingsBrightness.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsBrightness.argTypes = {
  display,
  appearance,
  size,
  theme,
};
