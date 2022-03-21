import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFavoriteProps } from '../Favorite.types';

import { display } from './Favorite-display.stories';
import { appearance } from './Favorite-appearance.stories';
import { size } from './Favorite-size.stories';
import { theme } from './Favorite-theme.stories';

export const Favorite = (args: IconsFavoriteProps) => (
  <Icon {...args}></Icon>
);

Favorite.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Favorite.argTypes = {
  display,
  appearance,
  size,
  theme,
};
