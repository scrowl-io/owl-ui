import * as React from 'react';
import { component as Icon } from '../index';
import { IconsRemoveShoppingCartProps } from '../RemoveShoppingCart.types';

import { display } from './RemoveShoppingCart-display.stories';
import { appearance } from './RemoveShoppingCart-appearance.stories';
import { size } from './RemoveShoppingCart-size.stories';
import { theme } from './RemoveShoppingCart-theme.stories';

export const RemoveShoppingCart = (args: IconsRemoveShoppingCartProps) => (
  <Icon {...args}></Icon>
);

RemoveShoppingCart.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

RemoveShoppingCart.argTypes = {
  display,
  appearance,
  size,
  theme,
};
