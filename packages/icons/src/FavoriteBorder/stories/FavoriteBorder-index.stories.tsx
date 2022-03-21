import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFavoriteBorderProps } from '../FavoriteBorder.types';

import { display } from './FavoriteBorder-display.stories';
import { appearance } from './FavoriteBorder-appearance.stories';
import { size } from './FavoriteBorder-size.stories';
import { theme } from './FavoriteBorder-theme.stories';

export const FavoriteBorder = (args: IconsFavoriteBorderProps) => (
  <Icon {...args}></Icon>
);

FavoriteBorder.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FavoriteBorder.argTypes = {
  display,
  appearance,
  size,
  theme,
};
