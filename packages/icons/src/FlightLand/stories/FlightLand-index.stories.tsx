import * as React from 'react';
import { component as Icon } from '../index';
import { IconsFlightLandProps } from '../FlightLand.types';

import { display } from './FlightLand-display.stories';
import { appearance } from './FlightLand-appearance.stories';
import { size } from './FlightLand-size.stories';
import { theme } from './FlightLand-theme.stories';

export const FlightLand = (args: IconsFlightLandProps) => (
  <Icon {...args}></Icon>
);

FlightLand.args = {
  display: display.defaultValue,
  appearance: 'Primary',
  size: 'Lg',
  theme: 'Default',
};

FlightLand.argTypes = {
  display,
  appearance,
  size,
  theme,
};
