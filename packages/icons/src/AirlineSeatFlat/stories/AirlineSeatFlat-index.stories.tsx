import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirlineSeatFlatProps } from '../AirlineSeatFlat.types';

import { display } from './AirlineSeatFlat-display.stories';
import { appearance } from './AirlineSeatFlat-appearance.stories';
import { size } from './AirlineSeatFlat-size.stories';
import { theme } from './AirlineSeatFlat-theme.stories';

export const AirlineSeatFlat = (args: IconsAirlineSeatFlatProps) => (
  <Icon {...args}></Icon>
);

AirlineSeatFlat.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirlineSeatFlat.argTypes = {
  display,
  appearance,
  size,
  theme,
};
