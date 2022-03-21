import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRestaurantMenuProps } from '../RestaurantMenu.types';

import { display } from './RestaurantMenu-display.stories';
import { appearance } from './RestaurantMenu-appearance.stories';
import { size } from './RestaurantMenu-size.stories';
import { theme } from './RestaurantMenu-theme.stories';

export const RestaurantMenu = (args: IconsRestaurantMenuProps) => (
  <Icon {...args}></Icon>
);

RestaurantMenu.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RestaurantMenu.argTypes = {
  display,
  appearance,
  size,
  theme,
};
