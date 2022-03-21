import * as React from 'react';
import { component as Icon } from '../index';
import { IconsBookmarkBorderProps } from '../BookmarkBorder.types';

import { display } from './BookmarkBorder-display.stories';
import { appearance } from './BookmarkBorder-appearance.stories';
import { size } from './BookmarkBorder-size.stories';
import { theme } from './BookmarkBorder-theme.stories';

export const BookmarkBorder = (args: IconsBookmarkBorderProps) => (
  <Icon {...args}></Icon>
);

BookmarkBorder.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

BookmarkBorder.argTypes = {
  display,
  appearance,
  size,
  theme,
};
