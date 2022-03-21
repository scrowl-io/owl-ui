import * as React from 'react';
import { component as Icon } from '../index';
import { IconsToysProps } from '../Toys.types';

import { display } from './Toys-display.stories';
import { appearance } from './Toys-appearance.stories';
import { size } from './Toys-size.stories';
import { theme } from './Toys-theme.stories';

export const Toys = (args: IconsToysProps) => (
  <Icon {...args}></Icon>
);

Toys.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Toys.argTypes = {
  display,
  appearance,
  size,
  theme,
};
