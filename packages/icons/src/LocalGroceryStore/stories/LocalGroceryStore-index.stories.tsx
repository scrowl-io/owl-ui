import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalGroceryStoreProps } from '../LocalGroceryStore.types';

import { display } from './LocalGroceryStore-display.stories';
import { appearance } from './LocalGroceryStore-appearance.stories';
import { size } from './LocalGroceryStore-size.stories';
import { theme } from './LocalGroceryStore-theme.stories';

export const LocalGroceryStore = (args: IconsLocalGroceryStoreProps) => (
  <Icon {...args}></Icon>
);

LocalGroceryStore.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalGroceryStore.argTypes = {
  display,
  appearance,
  size,
  theme,
};
