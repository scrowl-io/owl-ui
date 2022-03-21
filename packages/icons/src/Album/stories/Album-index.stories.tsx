import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAlbumProps } from '../Album.types';

import { display } from './Album-display.stories';
import { appearance } from './Album-appearance.stories';
import { size } from './Album-size.stories';
import { theme } from './Album-theme.stories';

export const Album = (args: IconsAlbumProps) => (
  <Icon {...args}></Icon>
);

Album.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Album.argTypes = {
  display,
  appearance,
  size,
  theme,
};
