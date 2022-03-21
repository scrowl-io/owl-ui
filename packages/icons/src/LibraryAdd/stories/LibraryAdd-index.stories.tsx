import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLibraryAddProps } from '../LibraryAdd.types';

import { display } from './LibraryAdd-display.stories';
import { appearance } from './LibraryAdd-appearance.stories';
import { size } from './LibraryAdd-size.stories';
import { theme } from './LibraryAdd-theme.stories';

export const LibraryAdd = (args: IconsLibraryAddProps) => (
  <Icon {...args}></Icon>
);

LibraryAdd.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LibraryAdd.argTypes = {
  display,
  appearance,
  size,
  theme,
};
