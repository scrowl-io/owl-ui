import * as React from 'react';
import { component as Icon } from '../index';
import { IconsVideoLibraryProps } from '../VideoLibrary.types';

import { display } from './VideoLibrary-display.stories';
import { appearance } from './VideoLibrary-appearance.stories';
import { size } from './VideoLibrary-size.stories';
import { theme } from './VideoLibrary-theme.stories';

export const VideoLibrary = (args: IconsVideoLibraryProps) => (
  <Icon {...args}></Icon>
);

VideoLibrary.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

VideoLibrary.argTypes = {
  display,
  appearance,
  size,
  theme,
};
