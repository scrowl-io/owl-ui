import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAddShoppingCartProps } from '../AddShoppingCart.types';

import { display } from './AddShoppingCart-display.stories';
import { appearance } from './AddShoppingCart-appearance.stories';
import { size } from './AddShoppingCart-size.stories';
import { theme } from './AddShoppingCart-theme.stories';

export const AddShoppingCart = (args: IconsAddShoppingCartProps) => (
  <Icon {...args}></Icon>
);

AddShoppingCart.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AddShoppingCart.argTypes = {
  display,
  appearance,
  size,
  theme,
};
