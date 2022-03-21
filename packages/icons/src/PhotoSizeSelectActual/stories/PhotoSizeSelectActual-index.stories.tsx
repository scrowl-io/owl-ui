import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhotoSizeSelectActualProps } from '../PhotoSizeSelectActual.types';

import { display } from './PhotoSizeSelectActual-display.stories';
import { appearance } from './PhotoSizeSelectActual-appearance.stories';
import { size } from './PhotoSizeSelectActual-size.stories';
import { theme } from './PhotoSizeSelectActual-theme.stories';

export const PhotoSizeSelectActual = (args: IconsPhotoSizeSelectActualProps) => (
  <Icon {...args}></Icon>
);

PhotoSizeSelectActual.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhotoSizeSelectActual.argTypes = {
  display,
  appearance,
  size,
  theme,
};
