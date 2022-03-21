import * as React from 'react';
import { component as Icon } from '../index';
import { IconsShoppingCartProps } from '../ShoppingCart.types';

import { display } from './ShoppingCart-display.stories';
import { appearance } from './ShoppingCart-appearance.stories';
import { size } from './ShoppingCart-size.stories';
import { theme } from './ShoppingCart-theme.stories';

export const ShoppingCart = (args: IconsShoppingCartProps) => (
  <Icon {...args}></Icon>
);

ShoppingCart.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ShoppingCart.argTypes = {
  display,
  appearance,
  size,
  theme,
};
