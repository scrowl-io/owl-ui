import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhotoLibraryProps } from '../PhotoLibrary.types';

import { display } from './PhotoLibrary-display.stories';
import { appearance } from './PhotoLibrary-appearance.stories';
import { size } from './PhotoLibrary-size.stories';
import { theme } from './PhotoLibrary-theme.stories';

export const PhotoLibrary = (args: IconsPhotoLibraryProps) => (
  <Icon {...args}></Icon>
);

PhotoLibrary.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhotoLibrary.argTypes = {
  display,
  appearance,
  size,
  theme,
};
