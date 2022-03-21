import * as React from 'react';
import { component as Icon } from '../index';
import { IconsWallpaperProps } from '../Wallpaper.types';

import { display } from './Wallpaper-display.stories';
import { appearance } from './Wallpaper-appearance.stories';
import { size } from './Wallpaper-size.stories';
import { theme } from './Wallpaper-theme.stories';

export const Wallpaper = (args: IconsWallpaperProps) => (
  <Icon {...args}></Icon>
);

Wallpaper.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Wallpaper.argTypes = {
  display,
  appearance,
  size,
  theme,
};
