import * as React from 'react';
import { component as Icon } from '../index';
import { IconsAirlineSeatReclineExtraProps } from '../AirlineSeatReclineExtra.types';

import { display } from './AirlineSeatReclineExtra-display.stories';
import { appearance } from './AirlineSeatReclineExtra-appearance.stories';
import { size } from './AirlineSeatReclineExtra-size.stories';
import { theme } from './AirlineSeatReclineExtra-theme.stories';

export const AirlineSeatReclineExtra = (args: IconsAirlineSeatReclineExtraProps) => (
  <Icon {...args}></Icon>
);

AirlineSeatReclineExtra.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

AirlineSeatReclineExtra.argTypes = {
  display,
  appearance,
  size,
  theme,
};
