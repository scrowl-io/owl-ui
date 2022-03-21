import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalHotelProps } from '../LocalHotel.types';

import { display } from './LocalHotel-display.stories';
import { appearance } from './LocalHotel-appearance.stories';
import { size } from './LocalHotel-size.stories';
import { theme } from './LocalHotel-theme.stories';

export const LocalHotel = (args: IconsLocalHotelProps) => (
  <Icon {...args}></Icon>
);

LocalHotel.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalHotel.argTypes = {
  display,
  appearance,
  size,
  theme,
};
