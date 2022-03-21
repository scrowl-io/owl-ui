import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRestaurantProps } from '../Restaurant.types';

import { display } from './Restaurant-display.stories';
import { appearance } from './Restaurant-appearance.stories';
import { size } from './Restaurant-size.stories';
import { theme } from './Restaurant-theme.stories';

export const Restaurant = (args: IconsRestaurantProps) => (
  <Icon {...args}></Icon>
);

Restaurant.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Restaurant.argTypes = {
  display,
  appearance,
  size,
  theme,
};
