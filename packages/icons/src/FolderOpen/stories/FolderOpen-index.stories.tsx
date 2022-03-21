import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFolderOpenProps } from '../FolderOpen.types';

import { display } from './FolderOpen-display.stories';
import { appearance } from './FolderOpen-appearance.stories';
import { size } from './FolderOpen-size.stories';
import { theme } from './FolderOpen-theme.stories';

export const FolderOpen = (args: IconsFolderOpenProps) => (
  <Icon {...args}></Icon>
);

FolderOpen.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FolderOpen.argTypes = {
  display,
  appearance,
  size,
  theme,
};
