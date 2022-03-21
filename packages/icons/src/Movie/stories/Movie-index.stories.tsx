import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMovieProps } from '../Movie.types';

import { display } from './Movie-display.stories';
import { appearance } from './Movie-appearance.stories';
import { size } from './Movie-size.stories';
import { theme } from './Movie-theme.stories';

export const Movie = (args: IconsMovieProps) => (
  <Icon {...args}></Icon>
);

Movie.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Movie.argTypes = {
  display,
  appearance,
  size,
  theme,
};
