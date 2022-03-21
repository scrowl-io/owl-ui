import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlightTakeoffProps } from '../FlightTakeoff.types';

import { display } from './FlightTakeoff-display.stories';
import { appearance } from './FlightTakeoff-appearance.stories';
import { size } from './FlightTakeoff-size.stories';
import { theme } from './FlightTakeoff-theme.stories';

export const FlightTakeoff = (args: IconsFlightTakeoffProps) => (
  <Icon {...args}></Icon>
);

FlightTakeoff.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FlightTakeoff.argTypes = {
  display,
  appearance,
  size,
  theme,
};
