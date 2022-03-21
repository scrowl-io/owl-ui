import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhotoSizeSelectSmallProps } from '../PhotoSizeSelectSmall.types';

import { display } from './PhotoSizeSelectSmall-display.stories';
import { appearance } from './PhotoSizeSelectSmall-appearance.stories';
import { size } from './PhotoSizeSelectSmall-size.stories';
import { theme } from './PhotoSizeSelectSmall-theme.stories';

export const PhotoSizeSelectSmall = (args: IconsPhotoSizeSelectSmallProps) => (
  <Icon {...args}></Icon>
);

PhotoSizeSelectSmall.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhotoSizeSelectSmall.argTypes = {
  display,
  appearance,
  size,
  theme,
};
