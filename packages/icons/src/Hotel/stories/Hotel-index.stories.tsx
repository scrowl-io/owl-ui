import * as React from 'react';
import { component as Icon } from '../index';
import { IconsHotelProps } from '../Hotel.types';

import { display } from './Hotel-display.stories';
import { appearance } from './Hotel-appearance.stories';
import { size } from './Hotel-size.stories';
import { theme } from './Hotel-theme.stories';

export const Hotel = (args: IconsHotelProps) => (
  <Icon {...args}></Icon>
);

Hotel.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

Hotel.argTypes = {
  display,
  appearance,
  size,
  theme,
};
