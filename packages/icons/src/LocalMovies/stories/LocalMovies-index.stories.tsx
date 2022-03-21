import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalMoviesProps } from '../LocalMovies.types';

import { display } from './LocalMovies-display.stories';
import { appearance } from './LocalMovies-appearance.stories';
import { size } from './LocalMovies-size.stories';
import { theme } from './LocalMovies-theme.stories';

export const LocalMovies = (args: IconsLocalMoviesProps) => (
  <Icon {...args}></Icon>
);

LocalMovies.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalMovies.argTypes = {
  display,
  appearance,
  size,
  theme,
};
