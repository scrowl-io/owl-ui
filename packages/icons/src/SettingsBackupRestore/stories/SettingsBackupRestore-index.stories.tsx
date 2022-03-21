import * as React from 'react';
import { component as Icon } from '../index';
import { IconsSettingsBackupRestoreProps } from '../SettingsBackupRestore.types';

import { display } from './SettingsBackupRestore-display.stories';
import { appearance } from './SettingsBackupRestore-appearance.stories';
import { size } from './SettingsBackupRestore-size.stories';
import { theme } from './SettingsBackupRestore-theme.stories';

export const SettingsBackupRestore = (args: IconsSettingsBackupRestoreProps) => (
  <Icon {...args}></Icon>
);

SettingsBackupRestore.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

SettingsBackupRestore.argTypes = {
  display,
  appearance,
  size,
  theme,
};
