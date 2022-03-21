import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhotoSizeSelectLargeProps } from '../PhotoSizeSelectLarge.types';

import { display } from './PhotoSizeSelectLarge-display.stories';
import { appearance } from './PhotoSizeSelectLarge-appearance.stories';
import { size } from './PhotoSizeSelectLarge-size.stories';
import { theme } from './PhotoSizeSelectLarge-theme.stories';

export const PhotoSizeSelectLarge = (args: IconsPhotoSizeSelectLargeProps) => (
  <Icon {...args}></Icon>
);

PhotoSizeSelectLarge.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhotoSizeSelectLarge.argTypes = {
  display,
  appearance,
  size,
  theme,
};
