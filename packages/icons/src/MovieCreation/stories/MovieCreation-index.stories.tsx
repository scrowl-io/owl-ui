import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMovieCreationProps } from '../MovieCreation.types';

import { display } from './MovieCreation-display.stories';
import { appearance } from './MovieCreation-appearance.stories';
import { size } from './MovieCreation-size.stories';
import { theme } from './MovieCreation-theme.stories';

export const MovieCreation = (args: IconsMovieCreationProps) => (
  <Icon {...args}></Icon>
);

MovieCreation.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

MovieCreation.argTypes = {
  display,
  appearance,
  size,
  theme,
};
