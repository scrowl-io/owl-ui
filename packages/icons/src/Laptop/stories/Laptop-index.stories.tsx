import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLaptopProps } from '../Laptop.types';

import { display } from './Laptop-display.stories';
import { appearance } from './Laptop-appearance.stories';
import { size } from './Laptop-size.stories';
import { theme } from './Laptop-theme.stories';

export const Laptop = (args: IconsLaptopProps) => (
  <Icon {...args}></Icon>
);

Laptop.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Laptop.argTypes = {
  display,
  appearance,
  size,
  theme,
};
