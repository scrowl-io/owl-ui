import * as React from 'react';
import { component as Icon } from '../index';
import { IconsLocalParkingProps } from '../LocalParking.types';

import { display } from './LocalParking-display.stories';
import { appearance } from './LocalParking-appearance.stories';
import { size } from './LocalParking-size.stories';
import { theme } from './LocalParking-theme.stories';

export const LocalParking = (args: IconsLocalParkingProps) => (
  <Icon {...args}></Icon>
);

LocalParking.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

LocalParking.argTypes = {
  display,
  appearance,
  size,
  theme,
};
