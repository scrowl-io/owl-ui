import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBookmarkProps } from '../Bookmark.types';

import { display } from './Bookmark-display.stories';
import { appearance } from './Bookmark-appearance.stories';
import { size } from './Bookmark-size.stories';
import { theme } from './Bookmark-theme.stories';

export const Bookmark = (args: IconsBookmarkProps) => (
  <Icon {...args}></Icon>
);

Bookmark.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Bookmark.argTypes = {
  display,
  appearance,
  size,
  theme,
};
