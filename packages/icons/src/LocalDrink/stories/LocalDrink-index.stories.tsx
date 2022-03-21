import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalDrinkProps } from '../LocalDrink.types';

import { display } from './LocalDrink-display.stories';
import { appearance } from './LocalDrink-appearance.stories';
import { size } from './LocalDrink-size.stories';
import { theme } from './LocalDrink-theme.stories';

export const LocalDrink = (args: IconsLocalDrinkProps) => (
  <Icon {...args}></Icon>
);

LocalDrink.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalDrink.argTypes = {
  display,
  appearance,
  size,
  theme,
};
