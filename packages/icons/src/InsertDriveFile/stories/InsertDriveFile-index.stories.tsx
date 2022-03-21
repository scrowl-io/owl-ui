import * as React from 'react';
import { component as Icon } from '../index';
import { IconsInsertDriveFileProps } from '../InsertDriveFile.types';

import { display } from './InsertDriveFile-display.stories';
import { appearance } from './InsertDriveFile-appearance.stories';
import { size } from './InsertDriveFile-size.stories';
import { theme } from './InsertDriveFile-theme.stories';

export const InsertDriveFile = (args: IconsInsertDriveFileProps) => (
  <Icon {...args}></Icon>
);

InsertDriveFile.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

InsertDriveFile.argTypes = {
  display,
  appearance,
  size,
  theme,
};
