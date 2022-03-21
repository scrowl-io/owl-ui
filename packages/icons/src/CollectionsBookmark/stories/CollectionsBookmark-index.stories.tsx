import * as React from 'react';
import { component as Icon } from '../index';
import { IconsCollectionsBookmarkProps } from '../CollectionsBookmark.types';

import { display } from './CollectionsBookmark-display.stories';
import { appearance } from './CollectionsBookmark-appearance.stories';
import { size } from './CollectionsBookmark-size.stories';
import { theme } from './CollectionsBookmark-theme.stories';

export const CollectionsBookmark = (args: IconsCollectionsBookmarkProps) => (
  <Icon {...args}></Icon>
);

CollectionsBookmark.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

CollectionsBookmark.argTypes = {
  display,
  appearance,
  size,
  theme,
};
