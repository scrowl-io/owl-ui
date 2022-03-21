import * as React from 'react';
import { component as Icon } from '../index';
import { IconsShopProps } from '../Shop.types';

import { display } from './Shop-display.stories';
import { appearance } from './Shop-appearance.stories';
import { size } from './Shop-size.stories';
import { theme } from './Shop-theme.stories';

export const Shop = (args: IconsShopProps) => (
  <Icon {...args}></Icon>
);

Shop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Shop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
