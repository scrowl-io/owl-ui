import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsCellProps } from '../SettingsCell.types';

import { display } from './SettingsCell-display.stories';
import { appearance } from './SettingsCell-appearance.stories';
import { size } from './SettingsCell-size.stories';
import { theme } from './SettingsCell-theme.stories';

export const SettingsCell = (args: IconsSettingsCellProps) => (
  <Icon {...args}></Icon>
);

SettingsCell.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsCell.argTypes = {
  display,
  appearance,
  size,
  theme,
};
