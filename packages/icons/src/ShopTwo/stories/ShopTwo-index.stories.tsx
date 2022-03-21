import * as React from 'react';
import { component as Icon } from '../index';
import { IconsShopTwoProps } from '../ShopTwo.types';

import { display } from './ShopTwo-display.stories';
import { appearance } from './ShopTwo-appearance.stories';
import { size } from './ShopTwo-size.stories';
import { theme } from './ShopTwo-theme.stories';

export const ShopTwo = (args: IconsShopTwoProps) => (
  <Icon {...args}></Icon>
);

ShopTwo.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

ShopTwo.argTypes = {
  display,
  appearance,
  size,
  theme,
};
