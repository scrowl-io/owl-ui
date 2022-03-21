import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFolderProps } from '../Folder.types';

import { display } from './Folder-display.stories';
import { appearance } from './Folder-appearance.stories';
import { size } from './Folder-size.stories';
import { theme } from './Folder-theme.stories';

export const Folder = (args: IconsFolderProps) => (
  <Icon {...args}></Icon>
);

Folder.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Folder.argTypes = {
  display,
  appearance,
  size,
  theme,
};
