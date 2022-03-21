import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsPowerProps } from '../SettingsPower.types';

import { display } from './SettingsPower-display.stories';
import { appearance } from './SettingsPower-appearance.stories';
import { size } from './SettingsPower-size.stories';
import { theme } from './SettingsPower-theme.stories';

export const SettingsPower = (args: IconsSettingsPowerProps) => (
  <Icon {...args}></Icon>
);

SettingsPower.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsPower.argTypes = {
  display,
  appearance,
  size,
  theme,
};
