import * as React from 'react';
import { component as Icon } from '../index';
import { IconsMotorcycleProps } from '../Motorcycle.types';

import { display } from './Motorcycle-display.stories';
import { appearance } from './Motorcycle-appearance.stories';
import { size } from './Motorcycle-size.stories';
import { theme } from './Motorcycle-theme.stories';

export const Motorcycle = (args: IconsMotorcycleProps) => (
  <Icon {...args}></Icon>
);

Motorcycle.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Motorcycle.argTypes = {
  display,
  appearance,
  size,
  theme,
};
