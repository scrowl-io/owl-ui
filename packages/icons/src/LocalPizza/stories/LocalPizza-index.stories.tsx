import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalPizzaProps } from '../LocalPizza.types';

import { display } from './LocalPizza-display.stories';
import { appearance } from './LocalPizza-appearance.stories';
import { size } from './LocalPizza-size.stories';
import { theme } from './LocalPizza-theme.stories';

export const LocalPizza = (args: IconsLocalPizzaProps) => (
  <Icon {...args}></Icon>
);

LocalPizza.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalPizza.argTypes = {
  display,
  appearance,
  size,
  theme,
};
