import * as React from 'react';
import { component as Icon } from '../index';
import { IconsPhotoAlbumProps } from '../PhotoAlbum.types';

import { display } from './PhotoAlbum-display.stories';
import { appearance } from './PhotoAlbum-appearance.stories';
import { size } from './PhotoAlbum-size.stories';
import { theme } from './PhotoAlbum-theme.stories';

export const PhotoAlbum = (args: IconsPhotoAlbumProps) => (
  <Icon {...args}></Icon>
);

PhotoAlbum.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

PhotoAlbum.argTypes = {
  display,
  appearance,
  size,
  theme,
};
