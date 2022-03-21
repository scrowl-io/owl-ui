import * as React from 'react';
import { component as Icon } from '../index';
import { IconsShoppingBasketProps } from '../ShoppingBasket.types';

import { display } from './ShoppingBasket-display.stories';
import { appearance } from './ShoppingBasket-appearance.stories';
import { size } from './ShoppingBasket-size.stories';
import { theme } from './ShoppingBasket-theme.stories';

export const ShoppingBasket = (args: IconsShoppingBasketProps) => (
  <Icon {...args}></Icon>
);

ShoppingBasket.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ShoppingBasket.argTypes = {
  display,
  appearance,
  size,
  theme,
};
