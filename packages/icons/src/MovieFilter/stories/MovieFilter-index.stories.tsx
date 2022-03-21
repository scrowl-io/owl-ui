import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMovieFilterProps } from '../MovieFilter.types';

import { display } from './MovieFilter-display.stories';
import { appearance } from './MovieFilter-appearance.stories';
import { size } from './MovieFilter-size.stories';
import { theme } from './MovieFilter-theme.stories';

export const MovieFilter = (args: IconsMovieFilterProps) => (
  <Icon {...args}></Icon>
);

MovieFilter.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MovieFilter.argTypes = {
  display,
  appearance,
  size,
  theme,
};
