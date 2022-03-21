import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLibraryMusicProps } from '../LibraryMusic.types';

import { display } from './LibraryMusic-display.stories';
import { appearance } from './LibraryMusic-appearance.stories';
import { size } from './LibraryMusic-size.stories';
import { theme } from './LibraryMusic-theme.stories';

export const LibraryMusic = (args: IconsLibraryMusicProps) => (
  <Icon {...args}></Icon>
);

LibraryMusic.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LibraryMusic.argTypes = {
  display,
  appearance,
  size,
  theme,
};
