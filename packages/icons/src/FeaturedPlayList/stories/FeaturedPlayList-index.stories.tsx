import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFeaturedPlayListProps } from '../FeaturedPlayList.types';

import { display } from './FeaturedPlayList-display.stories';
import { appearance } from './FeaturedPlayList-appearance.stories';
import { size } from './FeaturedPlayList-size.stories';
import { theme } from './FeaturedPlayList-theme.stories';

export const FeaturedPlayList = (args: IconsFeaturedPlayListProps) => (
  <Icon {...args}></Icon>
);

FeaturedPlayList.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FeaturedPlayList.argTypes = {
  display,
  appearance,
  size,
  theme,
};
