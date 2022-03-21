import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLibraryBooksProps } from '../LibraryBooks.types';

import { display } from './LibraryBooks-display.stories';
import { appearance } from './LibraryBooks-appearance.stories';
import { size } from './LibraryBooks-size.stories';
import { theme } from './LibraryBooks-theme.stories';

export const LibraryBooks = (args: IconsLibraryBooksProps) => (
  <Icon {...args}></Icon>
);

LibraryBooks.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LibraryBooks.argTypes = {
  display,
  appearance,
  size,
  theme,
};
