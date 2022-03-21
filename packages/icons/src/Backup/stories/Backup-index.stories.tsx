import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBackupProps } from '../Backup.types';

import { display } from './Backup-display.stories';
import { appearance } from './Backup-appearance.stories';
import { size } from './Backup-size.stories';
import { theme } from './Backup-theme.stories';

export const Backup = (args: IconsBackupProps) => (
  <Icon {...args}></Icon>
);

Backup.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Backup.argTypes = {
  display,
  appearance,
  size,
  theme,
};
