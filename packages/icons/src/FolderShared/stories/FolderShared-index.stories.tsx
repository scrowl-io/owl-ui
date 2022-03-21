import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFolderSharedProps } from '../FolderShared.types';

import { display } from './FolderShared-display.stories';
import { appearance } from './FolderShared-appearance.stories';
import { size } from './FolderShared-size.stories';
import { theme } from './FolderShared-theme.stories';

export const FolderShared = (args: IconsFolderSharedProps) => (
  <Icon {...args}></Icon>
);

FolderShared.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FolderShared.argTypes = {
  display,
  appearance,
  size,
  theme,
};
